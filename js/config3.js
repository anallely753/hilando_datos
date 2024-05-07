var config4 = {
    style: 'mapbox://styles/anallelymtzc/clup0oxpb03ks01qfeamh41v6',
    accessToken: 'pk.eyJ1IjoiYW5hbGxlbHltdHpjIiwiYSI6ImNsdWkyajlyYzAwMGsyaW8xaHF0ODhrOTcifQ.a-49qQrQ7XlMxKMWxhnRMQ',
    showMarkers: true,
    markerColor: '#cfee51',
    markerBg:'',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'slug-style-id4',
            alignment: 'left',
            hidden: false,
            title: 'Tepito',
            description: 'El punto de inicio de este proceso, se encuentra en Tepito, en la Ciudad de México. Aquí el diseñador  se da a la tarea de buscar entre la ropa de paca, aquellas prendas que le parezcan más interesantes para reciclar.',
            location: {
                center: [-99.1283, 19.44],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'second-identifier4',
            alignment: 'left',
            hidden: false,
            title: 'Tepito - Centro',
            description: 'Posteriormente se dirige al centro de la ciudad de México donde se concentra la mayo parte de materiales de confección.',
            location: {
                center: [-99.1373,19.43],
                zoom: 12,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Tepito - Centro</p><p class="popup_marker_p">Distancia: <span>4.2 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>305 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>0.02 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Vehículo</span></p>'
        },
        {
            id: 'third-identifier4',
            alignment: 'left',
            hidden: false,
            title: 'Centro - Iztapalapa',
            description: 'Una vez que ha adquirido el material necesario, va hacia su taller, en Iztapalapa, donde diseña y cofecciona la prenda.',
            location: {
                center: [-99.0799, 19.3467],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Centro - Iztapalapa</p><p class="popup_marker_p">Distancia: <span>18 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>2,872 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>0.19 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Vehículo</span></p>'
        },
        {
            id: 'fourth-chapter4',
            alignment: 'left',
            hidden: false,
            title: 'Iztapalapa - Insurgentes',
            description: 'Finalmente como último punto, se traslada a Insurgentes, lugar donde vende las prendas queél mismo ha rescatado y transformado',
            location: {
                center: [-99.1633, 19.4236],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Iztapalapa - Insurgentes</p><p class="popup_marker_p">Distancia: <span>37 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>5,952 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>0.39 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Vehículo</span></p>'
        },
        // {
        //     id: 'fifth-identifier4',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Bangladesh- Shandong',
        //     description: 'Una vez teniendo lista la prenda, regresa a Shandong, China como punto clave de la distribución y se embarca para ir de regreso al continente americano.',
        //     location: {
        //         center: [119.2791, 36.0671],
        //         zoom: 3,
        //         pitch: 20,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'sixth-identifier4',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Shandong - San Francisco',
        //     description: 'Finalmente en San Francisco comienza la comercialización de la prenda para llegar al usuario final',
        //     location: {
        //         center: [-122.41, 37.7749],
        //         zoom: 3,
        //         pitch: 20,
        //         bearing: 0
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};