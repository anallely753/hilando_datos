var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);



mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

// Create a inset map if enabled in config.js
if (config.inset) {
 var insetMap = new mapboxgl.Map({
    container: 'mapInset', // container id
    style: 'mapbox://styles/anallelymtzc/clup0oxpb03ks01qfeamh41v6', //hosted style id
    center: config.chapters[0].location.center,
    // Hardcode above center value if you want insetMap to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetmap can be a globe with the following parameter.
    //projection: 'globe'
  });

}

if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor});
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
    
}

// instantiate the scrollama
var scroller = scrollama();

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [] // Empty initially
            }
        }
    ]
};

map.on("load", function() {
    map.addSource('line', {
        'type': 'geojson',
        'data': geojson
    });
    map.addLayer({
        'id': 'line-animation',
        'type': 'line',
        'source': 'line',
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#4444db',
            'line-width': 3,
            'line-opacity': 0.8,
            'line-dasharray': [2, 1.5]
        }
    });
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    };

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
    map.on('move', getInsetBounds);
    }
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(async response => {
        var current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
        var chapter = config.chapters[current_chapter];
        
        response.element.classList.add('active');
        map[chapter.mapAnimation || 'flyTo'](chapter.location);

        // Incase you do not want to have a dynamic inset map,
        // rather want to keep it a static view but still change the
        // bbox as main map move: comment out the below if section.
        if (config.inset) {
          if (chapter.location.zoom < 5) {
            insetMap.flyTo({center: chapter.location.center, zoom: 0});
          }
          else {
            insetMap.flyTo({center: chapter.location.center, zoom: 3});
          }
        }
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
            window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
            map.once('moveend', () => {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
        // if (config.auto) {
        //      var next_chapter = (current_chapter + 1) % config.chapters.length;
        //      map.once('moveend', () => {
        //          document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
        //      });
        // }
        if (chapter.id === 'second-identifier') {
            const featureIndex = addNewLineFeature([-97.7431, 30.2672], [-122.41, 37.7749]);
            animateLine(featureIndex, [-122.41, 37.7749]);
        }
        // San francisco - Shandong
        if (chapter.id === 'third-identifier') {
           const featureIndex = addNewLineFeature([-122.41, 37.7749],[-241.2791, 36.0671]);
           animateLine(featureIndex, [-241.2791, 36.0671]);
        }
        if (chapter.id === 'fourth-chapter') {
           const featureIndex = addNewLineFeature([119.2791, 36.0671], [90.4125, 23.8103]);
           animateLine(featureIndex, [90.4125, 23.8103]);
        }
        // Bangladesh - Shandong
        if (chapter.id === 'fifth-identifier') {
           const featureIndex = addNewLineFeature([90.4125, 23.8103],[119.2791, 36.0671], );
           animateLine(featureIndex, [119.2791, 36.0671]);
        }
        if (chapter.id === 'sixth-identifier') {
           const featureIndex = addNewLineFeature([-241.2791, 36.0671],[-122.41, 37.7749], );
           animateLine(featureIndex, [-122.41, 37.7749]);
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }

    });


    if (config.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }
});

function addNewLineFeature(startCoord, endCoord) {
   const feature = {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [startCoord, endCoord] // Initialize with both start and end for simplicity
        },
        'properties': {
            'startCoord': startCoord,
            'endCoord': endCoord
        }
    };
    geojson.features.push(feature);
    return geojson.features.length - 1;
}

let help = 0;
let spanValue;

const markers = document.querySelectorAll('.mapboxgl-marker');

// Loop through each marker element
markers.forEach(marker => {
  // Create a new span element
  const span = document.createElement('span');
  span.className = 'fs-08';
  span.id = 'mapboxgl-marker-id';

  // Set some content or attributes (modify as needed)
  span.textContent = "Texas"; // Add text inside the span

  // Append the span to the current marker
  marker.appendChild(span);
});

const proyeccion = document.querySelectorAll('.mapboxgl-marker');

// Loop through each marker element
proyeccion.forEach(marker => {
  // Create a new span element
  const span = document.createElement('div');
  span.className = 'log3_proyeccion';
  span.id = 'mapboxgl-marker-proyeccion';

  // Append the span to the current marker
  marker.appendChild(span);
});



function animateLine(featureIndex, endCoord, duration = 1000, callback) {
            updateSpanContent();
    
    let startTimestamp = null;
    const startCoord = geojson.features[featureIndex].geometry.coordinates[0];

    function frame(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = (timestamp - startTimestamp) / duration;
        const t = Math.min(progress, 1);
        const currentCoord = [
            startCoord[0] * (1 - t) + endCoord[0] * t,
            startCoord[1] * (1 - t) + endCoord[1] * t
        ];
        geojson.features[featureIndex].geometry.coordinates = [startCoord, currentCoord];
        map.getSource('line').setData(geojson);

        if (t < 1) {
            requestAnimationFrame(frame);
        } else {
            if (callback) callback(featureIndex); // Call the callback function when the animation is complete
        }
    }

    requestAnimationFrame(frame);

    help = featureIndex;
}
function updateSpanContent() {
    const markers = document.querySelectorAll('.mapboxgl-marker');

    const element1 = document.getElementById('slug-style-id');
    const element2 = document.getElementById('second-identifier');
    const element3 = document.getElementById('third-identifier');
    const element4 = document.getElementById('fourth-chapter');
    const element5 = document.getElementById('fifth-identifier');
    const element6 = document.getElementById('sixth-identifier');

    let span = document.querySelectorAll('.mapboxgl-marker span');


      // Check if the element has the 'active' class
     

    // markers.forEach(marker => {
    //     const span = marker.querySelector('span');
    //     // if (!span) return;

    //     // Example condition: you might want to use actual conditions based on your application's logic
    //    if (element1 && element1.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "Texas"
    //       span.textContent = spanValue;
    //     }
    //     if (element2 && element2.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "San Francisco"
    //       span.textContent = spanValue;
    //     }
    //     if (element3 && element3.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "Shandong"
    //       span.textContent = spanValue;
    //     }
    //     if (element4 && element4.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "Daca"
    //       span.textContent = spanValue;
    //     }
    //     if (element5 && element5.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "Shandong"
    //       span.textContent = spanValue;
    //     }
    //     if (element6 && element6.classList.contains('active')) {
    //       // Send an alert if the class 'active' is found
    //       spanValue = "San Francisco"
    //       span.textContent = spanValue;
    //     }
    // });

}





//Helper functions for insetmap
function getInsetBounds() {
            let bounds = map.getBounds();

            let boundsJson = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [
                            [
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._sw.lat
                                ],
                                [
                                    bounds._ne.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._ne.lat
                                ],
                                [
                                    bounds._sw.lng,
                                    bounds._sw.lat
                                ]
                            ]
                        ]
                    }
                }]
            }

            if (initLoad) {
                addInsetLayer(boundsJson);
                initLoad = false;
            } else {
                updateInsetLayer(boundsJson);
            }

        }

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}



// setup resize event
window.addEventListener('resize', scroller.resize);



