var config = {
    style: 'mapbox://styles/anallelymtzc/clup0oxpb03ks01qfeamh41v6',
    accessToken: 'pk.eyJ1IjoiYW5hbGxlbHltdHpjIiwiYSI6ImNsdWkyajlyYzAwMGsyaW8xaHF0ODhrOTcifQ.a-49qQrQ7XlMxKMWxhnRMQ',
    showMarkers: true,
    markerColor: '#4444e5',
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
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Texas - San Francisco',
            description: 'Posteriormente nos dirigimos al estado de San Francisco, un punto geográfico clave en cuanto a la distribución ya que aquí es donde se embarcan grandes cantidades de materia prima con destino a China.',
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
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco - Shandong',
            description: 'Una vez que  el algodón llega al continente asiático, en particular a Shandong, China comienza el proceso de la preparación de los materiales para convertirlos en tela.',
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
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Shandong - Bangladesh',
            description: 'Luego, se traslada a Daca, Bangladesh con el fin de confeccionar las prendas',
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
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Bangladesh- Shandong',
            description: 'Una vez teniendo lista la prenda, regresa a Shandong, China como punto clave de la distribución y se embarca para ir de regreso al continente americano.',
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
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Shandong - San Francisco',
            description: 'Finalmente en San Francisco comienza la comercialización de la prenda para llegar al usuario final',
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
            onChapterExit: []
        }
    ]
};