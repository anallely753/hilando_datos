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


if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor});
    marker.setLngLat(config.chapters[0].location.center).addTo(map);

}

function attachPopupToMarker(marker, description) {
    const element = marker.getElement();

    element.addEventListener('mouseenter', () => {
        popup.setLngLat(marker.getLngLat())
             .setHTML(description)
             .addTo(map);
        map.getCanvas().style.cursor = 'pointer';
    });

    element.addEventListener('mouseleave', () => {
        popup.remove();
        map.getCanvas().style.cursor = '';
    });
}


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
       
        if(response.direction === 'down'){
           
            
            if (chapter.id === 'slug-style-id') {
                document.querySelector('.mapboxgl-marker path').style.fill='#cfee51';
                response.element.dataset.featureIndex = 0;
                // alert("stepEnter: "+featureIndex)
            }
            if (chapter.id === 'second-identifier') {
                const featureIndex = addNewLineFeature([-97.7431, 30.2672], [-122.41, 37.7749]);
                animateLine(featureIndex, [-122.41, 37.7749]);
                document.querySelector('.mapboxgl-marker path').style.fill='#ef774d';
                attachPopupToMarker(marker, chapter.markerDescription);
                response.element.dataset.featureIndex = featureIndex;
                // alert("stepEnter: "+featureIndex)
            }
            // San francisco - Shandong
            if (chapter.id === 'third-identifier') {
               const featureIndex = addNewLineFeature([-122.41, 37.7749],[-241.2791, 36.0671]);
               animateLine(featureIndex, [-241.2791, 36.0671]);
                document.querySelector('.mapboxgl-marker path').style.fill='#4444e5',
                attachPopupToMarker(marker, chapter.markerDescription);
                response.element.dataset.featureIndex = featureIndex;
                // alert("stepEnter: "+featureIndex)
            }
            if (chapter.id === 'fourth-chapter') {
               const featureIndex = addNewLineFeature([119.2791, 36.0671], [90.4125, 23.8103]);
               animateLine(featureIndex, [90.4125, 23.8103]);
                document.querySelector('.mapboxgl-marker path').style.fill='#ef774d',
                attachPopupToMarker(marker, chapter.markerDescription);
                response.element.dataset.featureIndex = featureIndex;
                // alert("stepEnter: "+featureIndex)
            }
            // Bangladesh - Shandong
            if (chapter.id === 'fifth-identifier') {
               const featureIndex = addNewLineFeature([90.4125, 23.8103],[119.2791, 36.0671], );
               animateLine(featureIndex, [119.2791, 36.0671]);
                document.querySelector('.mapboxgl-marker path').style.fill='#ef774d',
                attachPopupToMarker(marker, chapter.markerDescription);
                response.element.dataset.featureIndex = featureIndex;
                // alert("stepEnter: "+featureIndex)
            }
            if (chapter.id === 'sixth-identifier') {
               const featureIndex = addNewLineFeature([-241.2791, 36.0671],[-122.41, 37.7749], );
               animateLine(featureIndex, [-122.41, 37.7749]);
                document.querySelector('.mapboxgl-marker path').style.fill='#4444db',
                attachPopupToMarker(marker, chapter.markerDescription);
                response.element.dataset.featureIndex = featureIndex;
                // alert("stepEnter: "+featureIndex)
            }
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }

            // Check if the scroll direction is up
            if (response.direction === 'up') {
                const featureIndex = response.element.dataset.featureIndex; // Retrieving the feature index
                if (featureIndex) {
                    if (chapter.id === 'second-identifier') {
                        // animateReverseLine(1, geojson.features[1].geometry.coordinates[0]);
                        animateReverseLine(featureIndex, [-97.7431, 30.2672], [-122.41, 37.7749]);
                        // alert("stepExit: "+featureIndex)
                    }
                    if (chapter.id === 'third-identifier') {
                        // animateReverseLine(2, geojson.features[2].geometry.coordinates[0]);
                        animateReverseLine(featureIndex, [-122.41, 37.7749],[-241.2791, 36.0671]);
                        // alert("stepExit: "+featureIndex)
                    }
                    if (chapter.id === 'fourth-chapter') {
                        // animateReverseLine(3, geojson.features[3].geometry.coordinates[0]);
                        animateReverseLine(featureIndex,[119.2791, 36.0671],[90.4125, 23.8103]);
                        // alert("stepExit: "+featureIndex)
                    }
                    // Bangladesh - Shandong
                    if (chapter.id === 'fifth-identifier') {
                        // animateReverseLine(4, geojson.features[4].geometry.coordinates[0]);
                        animateReverseLine(featureIndex, [90.4125, 23.8103],[119.2791, 36.0671]);
                        // alert("stepExit: "+featureIndex)
                    }
                    if (chapter.id === 'sixth-identifier') {
                        // animateReverseLine(5, geojson.features[5].geometry.coordinates[0]);
                        animateReverseLine(featureIndex,[-241.2791, 36.0671],[-122.41, 37.7749]);
                        // alert("stepExit: "+featureIndex)
                    }
                }
                    // animateReverseLine(1, geojson.features[1].geometry.coordinates[0]);
               
            }

    });


    if (config.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }
});

const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
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
  span.textContent = ""; // Add text inside the span

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
function animateReverseLine(featureIndex, startCoord, endCoord, duration = 1000) {
    let endTimestamp = null;
    // const endCoord = geojson.features[featureIndex].geometry.coordinates[1];

    function frame(timestamp) {
        if (!endTimestamp) endTimestamp = timestamp;
        const progress = (timestamp - endTimestamp) / duration;
        const t = Math.max(1 - progress, 0);
        const currentCoord = [
            endCoord[0] * t + startCoord[0] * (1 - t),
            endCoord[1] * t + startCoord[1] * (1 - t)
        ];
        geojson.features[featureIndex].geometry.coordinates = [startCoord, currentCoord];
        map.getSource('line').setData(geojson);

        if (t > 0) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
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
}


// setup resize event
window.addEventListener('resize', scroller.resize);



