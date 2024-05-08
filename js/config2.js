var config = {
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Texas - EUA',
            description: 'Como punto de inicio, nos situamos en Texas, Estados Unidos, lugar donde se produce el 70% de algodón en ese país, lo que representa un tercio de la producción mundial.',
            location: {
                center: [-97.7431, 30.2672],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],

        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Texas - San Francisco',
            description: 'Posteriormente nos dirigimos al estado de San Francisco, un punto geográfico clave en cuanto a la distribución, ya que aquí es donde se embarcan grandes cantidades de materia prima con destino a China.',
            location: {
                center: [-122.41, 37.7749],
                zoom: 3,
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
            markerDescription:'<p class="popup_marker_title">Texas - San Francisco</p><p class="popup_marker_p">Distancia: <span>2,253 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>321,871 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>24 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Vehículo</span></p>'
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco - Shandong',
            description: 'Una vez que el algodón llega al continente asiático (en particular a Shandong, China) comienza el proceso de preparación de los materiales para convertirlos en tela.',
            location: {
                center: [-241.2791, 36.0671],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">San Francisco - Shandong</p><p class="popup_marker_p">Distancia: <span>19,767 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>226,109 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>16 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Barco</span></p>'
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Shandong - Bangladesh',
            description: 'Luego se traslada a Daca, Bangladesh con el fin de confeccionar las prendas.',
            location: {
                center: [90.4125, 23.8103],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Shandong - Bangladesh</p><p class="popup_marker_p">Distancia: <span>12,620 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>506,747 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>35 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Tren</span></p>'

        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Bangladesh- Shandong',
            description: 'Una vez teniendo lista la prenda, regresa a Shandong, China como punto clave de la distribución y se embarca para regresar al continente americano.',
            location: {
                center: [119.2791, 36.0671],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Bangladesh- Shandong</p><p class="popup_marker_p">Distancia: <span>12,621 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>60,647 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>35 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Tren</span></p>'

        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Shandong - San Francisco',
            description: 'Finalmente, en San Francisco comienza la comercialización de la prenda para llegar al usuario final.',
            location: {
                center: [-122.41, 37.7749],
                zoom: 3,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            markerDescription:'<p class="popup_marker_title">Shandong - San Francisco</p><p class="popup_marker_p">Distancia: <span>12,621 <small>KM</small></span></p><p class="popup_marker_p">Energía consumida: <span>226,109 <small>WTW</small></span></p><p class="popup_marker_p">Emisión CO2: <span>16 <small>WTW</small></span></p><p class="popup_marker_p">Medio de Transporte: <span>Barco</span></p>'

        }
    ]
};