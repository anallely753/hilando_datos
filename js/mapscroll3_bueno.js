var initLoad4 = true;
var layerTypes4 = {
    'fill4': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments4 = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType4(layer) {
    var layerType4 = map4.getLayer(layer).type;
    return layerTypes4[layerType4];
}

function setLayerOpacity4(layer) {
    var paintProps = getLayerPaintType4(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map4.setPaintProperty(layer.layer, transitionProp, options);
        }
        map4.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story4 = document.getElementById('story4');
var features4 = document.createElement('div');
features4.setAttribute('id', 'features4');

var header4 = document.createElement('div');

if (config4.title) {
    var titleText4 = document.createElement('h1');
    titleText4.innerText = config4.title;
    header4.appendChild(titleText4);
}

if (config4.subtitle) {
    var subtitleText4 = document.createElement('h2');
    subtitleText4.innerText = config4.subtitle;
    header4.appendChild(subtitleText4);
}

if (config4.byline) {
    var bylineText4 = document.createElement('p');
    bylineText4.innerText = config4.byline;
    header4.appendChild(bylineText4);
}

if (header4.innerText.length > 0) {
    header4.classList.add(config4.theme);
    header4.setAttribute('id', 'header4');
    story4.appendChild(header4);
}

config4.chapters.forEach((record, idx) => {
    var container4 = document.createElement('div');
    var chapter4 = document.createElement('div');

    if (record.title) {
        var title4 = document.createElement('h3');
        title4.innerText = record.title;
        chapter4.appendChild(title4);
    }

    if (record.image) {
        var image4 = new Image();
        image4.src = record.image;
        chapter4.appendChild(image4);
    }

    if (record.description) {
        var story4 = document.createElement('p');
        story4.innerHTML = record.description;
        chapter4.appendChild(story4);
    }

    container4.setAttribute('id', record.id);
    container4.classList.add('step4');
    if (idx === 0) {
        container4.classList.add('active');
    }

    chapter4.classList.add(config4.theme);
    container4.appendChild(chapter4);
    container4.classList.add(alignments4[record.alignment] || 'centered');
    if (record.hidden) {
        container4.classList.add('hidden');
    }
    features4.appendChild(container4);
});

story4.appendChild(features4);



mapboxgl.accessToken = config4.accessToken;

const transformRequest4 = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map4 = new mapboxgl.Map({
    container: 'map4',
    style: config4.style,
    center: config4.chapters[0].location.center,
    zoom: config4.chapters[0].location.zoom,
    bearing: config4.chapters[0].location.bearing,
    pitch: config4.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config4.projection
});

// Create a inset map if enabled in config.js
if (config4.inset) {
 var insetMap4 = new mapboxgl.Map({
    container: 'mapInset4', // container4 id
    style: 'mapbox://styles/anallelymtzc/clup0oxpb03ks01qfeamh41v6', //hosted style id
    center: config4.chapters[0].location.center,
    // Hardcode above center value if you want insetMap4 to be static.
    zoom: 3, // starting zoom
    hash: false,
    interactive: false,
    attributionControl: false,
    //Future: Once official mapbox-gl-js has globe view enabled,
    //insetMap4 can be a globe with the following parameter.
    //projection: 'globe'
  });

}

if (config4.showMarkers) {
    var marker4 = new mapboxgl.Marker({ color: config.markerColor});
    marker4.setLngLat(config4.chapters[0].location.center).addTo(map4);
}

// instantiate the scrollama
var scroller4 = scrollama();

const geojson4 = {
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

map4.on("load", function() {
    map4.addSource('line', {
        'type': 'geojson',
        'data': geojson4
    });
    map4.addLayer({
        'id': 'line-animation4',
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

    scroller4
    .setup({
        step: '.step4',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(async response => {
        var current_chapter4 = config4.chapters.findIndex(chap => chap.id === response.element.id);
        var chapter4 = config4.chapters[current_chapter4];

        response.element.classList.add('active');

        map4[chapter4.mapAnimation || 'flyTo'](chapter4.location);

       
        if (config4.showMarkers) {
            marker4.setLngLat(chapter4.location.center);
        }
        if (chapter4.onChapterEnter.length > 0) {
            chapter4.onChapterEnter.forEach(setLayerOpacity);
        }

        if (chapter4.callback) {
            window[chapter4.callback]();
        }
        if (chapter4.rotateAnimation) {
            map4.once('moveend', () => {
                const rotateNumber4 = map4.getBearing();
                map4.rotateTo(rotateNumber4 + 180, {
                    duration: 30000, easing: function (t) {
                        return t;
                    }
                });
            });
        }
        if (chapter4.id === 'second-identifier4') {
            const featureIndex4 = addNewLineFeature4([-99.1283, 19.44], [-99.1373,19.43]);
            animateLine4(featureIndex4, [-99.1373,19.43]);
        }
        // San francisco - Shandong
        if (chapter4.id === 'third-identifier4') {
           const featureIndex4 = addNewLineFeature4([-99.1373,19.43],[-99.0799, 19.3467]);
           animateLine4(featureIndex4, [-99.0799, 19.3467]);
        }
        if (chapter4.id === 'fourth-chapter4') {
           const featureIndex4 = addNewLineFeature4([-99.0799, 19.3467], [-99.1633, 19.4236]);
           animateLine4(featureIndex4, [-99.1633, 19.4236]);
        }
        
    })
    .onStepExit(response => {
        var chapter4 = config4.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        // if (chapter4.onchapterExit.length > 0) {
        //     chapter4.onchapterExit.forEach(setLayerOpacity4);
        // }

    });
    if (config4.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }
});

function addNewLineFeature4(startCoord, endCoord) {
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
    geojson4.features.push(feature);
    return geojson4.features.length - 1;
}

let help4 = 0;
let spanValue4;

const markers4 = document.querySelectorAll('#map4 .mapboxgl-marker');

// Loop through each marker element
markers4.forEach(marker => {
  // Create a new span element
  const span = document.createElement('span');
  span.className = 'fs-08';
  span.id = 'mapboxgl-marker-id4';

  // Set some content or attributes (modify as needed)
  span.textContent = "Tepito"; // Add text inside the span

  // Append the span to the current marker
  marker.appendChild(span);
});

const proyeccion4 = document.querySelectorAll('#map4 .mapboxgl-marker');

// Loop through each marker element
proyeccion4.forEach(marker => {
  // Create a new span element
  const span = document.createElement('div');
  span.className = 'log4_proyeccion';
  span.id = 'mapboxgl-marker-proyeccion4';

  // Append the span to the current marker
  marker.appendChild(span);
});



function animateLine4(featureIndex4, endCoord, duration = 1000, callback) {
            updateSpanContent4();
    
    let startTimestamp = null;
    const startCoord = geojson4.features[featureIndex4].geometry.coordinates[0];

    function frame4(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = (timestamp - startTimestamp) / duration;
        const t = Math.min(progress, 1);
        const currentCoord = [
            startCoord[0] * (1 - t) + endCoord[0] * t,
            startCoord[1] * (1 - t) + endCoord[1] * t
        ];
        geojson4.features[featureIndex4].geometry.coordinates = [startCoord, currentCoord];
        map4.getSource('line').setData(geojson4);

        if (t < 1) {
            requestAnimationFrame(frame4);
        } else {
            if (callback) callback(featureIndex4); // Call the callback function when the animation is complete
        }
    }

    requestAnimationFrame(frame4);

    help4 = featureIndex4;
}
function updateSpanContent4() {
    const markers4 = document.querySelectorAll('.mapboxgl-marker4');

    const element1 = document.getElementById('slug-style-id4');
    const element2 = document.getElementById('second-identifier4');
    const element3 = document.getElementById('third-identifier4');
    const element4 = document.getElementById('fourth-chapter4');

    let span = document.querySelectorAll('.mapboxgl-marker4 span');
}





//help4er functions for insetMap4
function getInsetBounds4() {
            let bounds = map4.getBounds();

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

            if (initLoad4) {
                addInsetLayer4(boundsJson);
                initLoad4 = false;
            } else {
                updateInsetLayer4(boundsJson);
            }

        }

function addInsetLayer4(bounds) {
    insetMap4.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap4.addLayer({
        'id': 'boundsLayer',
        'type': 'fill4',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap4.addLayer({
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

function updateInsetLayer4(bounds) {
    insetMap4.getSource('boundsSource').setData(bounds);
}



// setup resize event
window.addEventListener('resize', scroller4.resize);



