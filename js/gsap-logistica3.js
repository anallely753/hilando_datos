const log4Top = gsap.timeline({
  scrollTrigger: {
    trigger: '.logistica4',  
    start: 'top top',
    scrub: 1,    
    markers: false,
    pin:true,
},
});
log4Top.to('.ruta_internacional4', {
  top:0
});
log4Top.to('.log4_texto', {
   top:0,
},);
log4Top.to('.log4_texto_abajo', {
  top:'80%',
},);
log4Top.to('.ruta_internacional_img4', {
  transform:'scale(3.5)'
});
log4Top.to('.ruta_internacional_img4', {
  opacity:0
});
log4Top.to('.log4_texto', {
   transform:'translateY(-150%)'
},'<');
log4Top.to('.log4_texto_abajo', {
  top:'-150%',
},'<');
log4Top.to('.section_map4', {
  visibility:'visible'
});
log4Top.to('.log4_indicadores', {
  right:'0%'
});
log4Top.to('.log4_info_abajo', {
  right:'1%',
},'<');
log4Top.to('#mapboxgl-marker-id4', {
 opacity:'0'
});


const log4Tepito = gsap.timeline({
  scrollTrigger: {
    trigger: '#log4_auxTepito',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)
},
});
// TEPITO
log4Tepito.to('.log4_indicadores', {
  borderColor:'violet',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id4').style.display="block"

    document.getElementById('mapboxgl-marker-id4').textContent="Tepito";
    document.getElementById('mapboxgl-marker-id4').style.visibility="visible"

    document.getElementById('log4_distancia').textContent="0"
    document.getElementById('log4_energia').textContent="0"
    document.getElementById('log4_co2').textContent="0"
    document.getElementById('mapboxgl-marker-proyeccion4').style.visibility="hidden"
},
},'<');
log4Tepito.to('#mapboxgl-marker-id4', {
 opacity:'1'
});

const log4Centro = gsap.timeline({
  scrollTrigger: {
    trigger: '#log4_auxCentro',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// Tepito - Centro
log4Centro.to('.log4_indicadores', {
    borderColor:'green',
    onUpdate : function(){
    document.getElementById('mapboxgl-marker-id4').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id4').textContent="Centro";
    document.getElementById('mapboxgl-marker-id4').style.visibility="visible"

    document.getElementById('mapboxgl-marker-proyeccion4').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion4').style.width="0px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.height="0px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.top="0"
    document.getElementById('mapboxgl-marker-proyeccion4').style.left="calc(100% - 44px)";
    },
    onStart : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 0,
        endDistancia = 4.2,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 0,
        endEnergia = 305,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0,
        endCo2 = .02,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } ,

    onReverseComplete : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 4.2,
        endDistancia = 0,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 305,
        endEnergia = 0,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0.02,
        endCo2 = 0,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } 
    },);


const log4Iztapalapa = gsap.timeline({
  scrollTrigger: {
    trigger: '#log4_auxIztapalapa',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// Centro - Iztapalapa
log4Iztapalapa.to('.log4_indicadores', {
    borderColor:'green',
    onUpdate : function(){
    document.getElementById('mapboxgl-marker-id4').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id4').textContent="Iztapalapa";
    document.getElementById('mapboxgl-marker-id4').style.visibility="visible"

    document.getElementById('mapboxgl-marker-proyeccion4').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion4').style.width="70px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.height="70px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.top="0"
    document.getElementById('mapboxgl-marker-proyeccion4').style.left="calc(100% - 48px)";
    },
    onStart : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 4.2,
        endDistancia = 22.2,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 305,
        endEnergia = 3177,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0.02,
        endCo2 = .21,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } ,

    onReverseComplete : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 22.2,
        endDistancia = 4.2,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 3177,
        endEnergia = 305,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0.21,
        endCo2 = 0.02,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } 
},);

const log4Insurgentes = gsap.timeline({
  scrollTrigger: {
    trigger: '#log4_auxInsurgentes',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// Centro - Iztapalapa
log4Insurgentes.to('.log4_indicadores', {
    borderColor:'green',
    onUpdate : function(){
    document.getElementById('mapboxgl-marker-id4').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id4').textContent="Insurgentes";
    document.getElementById('mapboxgl-marker-id4').style.visibility="visible"

    document.getElementById('mapboxgl-marker-proyeccion4').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion4').style.width="130px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.height="130px"
    document.getElementById('mapboxgl-marker-proyeccion4').style.top="-60%"
    document.getElementById('mapboxgl-marker-proyeccion4').style.left="calc(100% - 80px)";
    },
    onStart : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 22.2,
        endDistancia = 59.2,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 3177,
        endEnergia = 9129,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0.21,
        endCo2 = .60,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } ,

    onReverseComplete : function(){
        // Counter for log3_distancia
        let objDistancia = document.getElementById('log4_distancia'),
        startDistancia = 59.2,
        endDistancia = 22.2,
        currentDistancia = startDistancia,
        rangeDistancia = endDistancia - startDistancia,
        incrementDistancia = endDistancia > startDistancia ? 1 : -1,
        stepsDistancia = 100,
        stepTimeDistancia = 2500 / stepsDistancia,
        stepIncrementDistancia = rangeDistancia / stepsDistancia * incrementDistancia;

        let timerDistancia = setInterval(() => {
            currentDistancia += stepIncrementDistancia;
            if (currentDistancia >= endDistancia) {
                currentDistancia = endDistancia;
                clearInterval(timerDistancia);
            }
            objDistancia.textContent = Math.floor(currentDistancia).toLocaleString();
        }, stepTimeDistancia);

        // Counter for log3_energia
        let objEnergia = document.getElementById('log4_energia'),
        startEnergia = 9129,
        endEnergia = 3177,
        currentEnergia = startEnergia,
        rangeEnergia = endEnergia - startEnergia,
        incrementEnergia = endEnergia > startEnergia ? 1 : -1,
        stepsEnergia = 100,
        stepTimeEnergia = 2500 / stepsEnergia,
        stepIncrementEnergia = rangeEnergia / stepsEnergia * incrementEnergia;

        let timerEnergia = setInterval(() => {
            currentEnergia += stepIncrementEnergia;
            if (currentEnergia >= endEnergia) {
                currentEnergia = endEnergia;
                clearInterval(timerEnergia);
            }
            objEnergia.textContent = Math.floor(currentEnergia).toLocaleString();
        }, stepTimeEnergia);

        // Counter for log3_co2
        let objCo2 = document.getElementById('log4_co2'),
        startCo2 = 0.60,
        endCo2 = 0.21,
        currentCo2 = startCo2,
        rangeCo2 = endCo2 - startCo2,
        incrementCo2 = endCo2 > startCo2 ? 1 : -1,
        stepsCo2 = 100,
        stepTimeCo2 = 2500 / stepsCo2,
        stepIncrementCo2 = rangeCo2 / stepsCo2 * incrementCo2;

        let timerCo2 = setInterval(() => {
            currentCo2 += stepIncrementCo2;
            if (currentCo2 >= endCo2) {
                currentCo2 = endCo2;
                clearInterval(timerCo2);
            }
            objCo2.textContent = Math.floor(currentCo2).toLocaleString();
        }, stepTimeCo2);
    } 
},);

