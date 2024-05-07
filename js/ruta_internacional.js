mapboxgl.accessToken = 'pk.eyJ1IjoiYW5hbGxlbHltdHpjIiwiYSI6ImNsdWkyajlyYzAwMGsyaW8xaHF0ODhrOTcifQ.a-49qQrQ7XlMxKMWxhnRMQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/anallelymtzc/clup0oxpb03ks01qfeamh41v6',
    center: [-110, 39],
    zoom: 1.6,
    // projection: 'equirectangular'
});
map.scrollZoom.disable();
let lineDrawn = false; // Initially, no line is drawn
let currentFeatureIndex = null; // Keep track of the current line feature index


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

map.on('load', () => {
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

function animateLine(featureIndex, endCoord, duration = 1000, callback) {
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
}


function eraseLine(featureIndex, duration = 1000, callback) {
    let startTimestamp = null;
    const startCoord = geojson.features[featureIndex].geometry.coordinates[0]; // Start coordinate is the first coordinate of the line
    const endCoord = geojson.features[featureIndex].geometry.coordinates[1]; // End coordinate is the last coordinate of the line

    function frame(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = (timestamp - startTimestamp) / duration;
        const t = Math.min(progress, 1);
        const currentCoord = [
            endCoord[0] * (1 - t) + startCoord[0] * t,
            endCoord[1] * (1 - t) + startCoord[1] * t
        ];
        geojson.features[featureIndex].geometry.coordinates = [startCoord, currentCoord]; // Update coordinates in reverse order
        map.getSource('line').setData(geojson);

        if (t < 1) {
            requestAnimationFrame(frame);
        } else {
            if (callback) callback(featureIndex); // Call the callback function when the animation is complete
        }
    }

    requestAnimationFrame(frame);
}
