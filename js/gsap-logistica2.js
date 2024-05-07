const log1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log1',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false, 
  },
});
log1.to('.log1_container', {
  backgroundPosition:'0 0'
},);

const log1_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log1_2',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false, 
  },
});
log1_2.to('.log1_texto', {
  top:'0'
},);

const log2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log2',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log2.to('.log2_texto', {
  top:'0'
},'<');


const log2_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log2_2',  
    start: 'top bottom',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log2_2.to('.log2_van', {
  visibility:'visible',
  // onStart : function(){
  //   document.getElementById('mapboxgl-marker-id').style.display="none"
  // }
},'<');
log2_2.to('.log2_van', {
  left:'250vh',
},'<');
log2_2.to('.log2_texto', {
  opacity:0
},'<');
log2_2.to('.log2_texto', {
  left:'350vh',
},'<+.17');

const log3Top = gsap.timeline({
  scrollTrigger: {
    trigger: '.logistica3',  
    start: 'top top',
    scrub: 1,    
    markers: false,
    pin:true,
  },
});
log3Top.to('.ruta_internacional', {
  top:0
});
log3Top.to('.log3_texto', {
 transform:'translateY(0)'
},);
log3Top.to('.log3_texto_abajo', {
  top:'80%',
},);
log3Top.to('.ruta_internacional_img', {
  transform:'scale(3.5)'
});
log3Top.to('.ruta_internacional_img', {
  opacity:0
});
log3Top.to('.log3_texto', {
 transform:'translateY(-150%)'
},'<');
log3Top.to('.log3_texto_abajo', {
  top:'-150%',
},'<');
log3Top.to('.section_map', {
  visibility:'visible'
});
log3Top.to('.log3_indicadores', {
  right:'0%'
});
log3Top.to('.log3_info_abajo', {
  right:'0%',
},'<');
log3Top.to('#mapboxgl-marker-id', {
  opacity:0
},'<');


const log3Texas = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxTexas',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)
  },
});
// TEXAS
log3Texas.to('.log3_indicadores', {
  borderColor:'violet',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.display="block"

    document.getElementById('mapboxgl-marker-id').textContent="Texas";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible"

    document.getElementById('log3_distancia').textContent="0"
    document.getElementById('log3_energia').textContent="0"
    document.getElementById('log3_co2').textContent="0"
    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="hidden"
  },
},'<');
log3Texas.to('#mapboxgl-marker-id', {
  opacity:1
},'<');


const log3SF1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxSF1',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// TEXAS - SAN FRANCISCO
log3SF1.to('.log3_indicadores', {
  borderColor:'green',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id').textContent="San Francisco";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible"

    document.getElementById('log3_img_medios').src="./img/logistica/van.png";
    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion').style.width="60px"
    document.getElementById('mapboxgl-marker-proyeccion').style.height="60px"
    document.getElementById('mapboxgl-marker-proyeccion').style.top="0"
    document.getElementById('mapboxgl-marker-proyeccion').style.left="calc(100% - 44px)";
  },
  onStart : function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 0,
        endDistancia = 2253,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 0,
        endEnergia = 321871,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 0,
        endCo2 = 24,
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
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 2253,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 321871,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 24,
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

const log3SH1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxSH1',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// SAN FRANCISCO - SHANDONG
log3SH1.to('.log3_indicadores', {
  borderColor:'green',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id').textContent="Shandong";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible";

    document.getElementById('log3_img_medios').src="./img/logistica/logbarco.png";

    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion').style.width="54px"
    document.getElementById('mapboxgl-marker-proyeccion').style.height="54px"
    document.getElementById('mapboxgl-marker-proyeccion').style.top="5%"
    document.getElementById('mapboxgl-marker-proyeccion').style.left="calc(100% - 42px)";
  },
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 2253,
        endDistancia = 22020,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 321871,
        endEnergia = 547980,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 24,
        endCo2 = 40,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 22020,
        endDistancia = 2253,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia =  547980,
        endEnergia = 321871,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 40,
        endCo2 = 24,
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


const log3Daca = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxDaca',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)
  },
});
// SHANDONG - DACA
log3Daca.to('.log3_indicadores', {
  borderColor:'green',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id').textContent="Daca";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible";

    document.getElementById('log3_img_medios').src="./img/logistica/logistica_tren.png";

    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion').style.width="90px"
    document.getElementById('mapboxgl-marker-proyeccion').style.height="90px"
    document.getElementById('mapboxgl-marker-proyeccion').style.top="-35%"
    document.getElementById('mapboxgl-marker-proyeccion').style.left="calc(100% - 60px)";    
  },
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 22020,
        endDistancia = 34640,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 547980,
        endEnergia = 1054727,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 40,
        endCo2 = 75,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 34640,
        endDistancia =  22020,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia =  1054727,
        endEnergia = 547980,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 75,
        endCo2 = 40,
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

const log3SH2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxSH2',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// DACA - SHANDONG
log3SH2.to('.log3_indicadores', {
  borderColor:'green',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id').textContent="Shandong";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible";

    document.getElementById('log3_img_medios').src="./img/logistica/logistica_tren.png";

    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion').style.width="90px"
    document.getElementById('mapboxgl-marker-proyeccion').style.height="90px"
    document.getElementById('mapboxgl-marker-proyeccion').style.top="-35%"
    document.getElementById('mapboxgl-marker-proyeccion').style.left="calc(100% - 60px)";
  },
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 34640,
        endDistancia = 47261,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 1054727,
        endEnergia = 1561474,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 75,
        endCo2 = 110,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 47261 ,
        endDistancia = 34640,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 1561474 ,
        endEnergia = 1054727,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 110,
        endCo2 = 75,
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


const log3SF2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#log3_auxSF2',  
    start: 'top center',
    // end:'bottom center',
    scrub: 1,    
    markers: false,
    onRefresh: self => self.progress === 1 && self.animation.progress(1)

  },
});
// SHANDONG - SAN FRANCISCO
log3SF2.to('.log3_indicadores', {
  borderColor:'green',
  onUpdate : function(){
    document.getElementById('mapboxgl-marker-id').style.visibility="hidden"
    document.getElementById('mapboxgl-marker-id').textContent="San Francisco";
    document.getElementById('mapboxgl-marker-id').style.visibility="visible";

    document.getElementById('log3_img_medios').src="./img/logistica/logbarco.png";

    document.getElementById('mapboxgl-marker-proyeccion').style.visibility="visible"
    document.getElementById('mapboxgl-marker-proyeccion').style.width="60px"
    document.getElementById('mapboxgl-marker-proyeccion').style.height="60px"
    document.getElementById('mapboxgl-marker-proyeccion').style.top="0"
    document.getElementById('mapboxgl-marker-proyeccion').style.left="calc(100% - 44px)";
  },
  onStart:function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 47261,
        endDistancia = 67033,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 1561474,
        endEnergia = 1787583,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 110,
        endCo2 = 126,
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
  },
  onReverseComplete:function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('log3_distancia'),
        startDistancia = 67033,
        endDistancia = 47261,
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
    let objEnergia = document.getElementById('log3_energia'),
        startEnergia = 1787583 ,
        endEnergia = 1561474,
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
    let objCo2 = document.getElementById('log3_co2'),
        startCo2 = 126,
        endCo2 = 110,
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

const log5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log51',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log5.to('.log5_texto', {
  top:'0'
},);

const log52 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log52',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log52.to('.log5_grafica_rutas', {
  top:'0'
},'<');

const log6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log61',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log6.to('.log6_playeras_img', {
  left:'10%'
},);

const log62 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_log62',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false,
  },
});
log62.to('.log6_texto', {
  top:'0'
},);