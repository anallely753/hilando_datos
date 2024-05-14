const man1_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man1_1',  
    start: 'top center', 
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man1_1.to('.man1_titulo', {
  top:'10%'
},);
man1_1.to('.man1_texto', {
  bottom:'25%'
},'<');


const man1_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man1_2',  
    start: 'top center',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1


const man2_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man2_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man2_1.to('.man2_fondo_verde', {
  opacity:'1'
},);
man2_1.to('.btn-main img, .portada_btn-xdata img', {
    filter: 'invert(80%)',
}, '<');
man2_1.to('.btn-main', {
    color:'#383838',
}, '<');


const man2_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man2_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man2_2.to('.man2_texto', {
  bottom:'15%'
},);

const man3_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_1.to('.man3_mano1, .man3_mano1_azul', {
  right:0
},);
man3_1.to('.man3_mano2', {
  top:'-20%'
});


const man3_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_2.to('.man3_texto1', {
  top:'30%'
},);


const man3_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man3_3',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
man3_3.to('.man3_texto2', {
  bottom:'25%'
});
man3_3.to('.man3_mano1_azul', {
  opacity:1
},'<');


const man4_01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man4_1',  
    start: 'top center',  
    end: 'top center',  
    scrub: 1,    
    markers: false, 
  },
});
man4_01.to('.man4_main_div', {
  opacity:'1'
});

const man4_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man4_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man4_1.to('.man4_texto1', {
  top:0
},'<');
man4_1.to('.man4_main_img2 img', {
  bottom:'-2%'
},'<');



const man4_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man4_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man4_2.to('.man4_main2_1', {
  opacity:1
},'<');
man4_2.to('.man4_main_texto1', {
  opacity:'1',
  top:'0',
},'<');
man4_2.to('.man4_main_img1 .moneda, .man4_main_img3 .moneda', {
  bottom:'-2.5%'
},'<');


const man4_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man4_3',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man4_3.to('.man4_main_img1 .moneda, .man4_main_img3 .moneda', {
  bottom:'-45%'
});
man4_3.to('.man4_main_texto1', {
  top:'-100%',
  opacity:0
},'<');
man4_3.to('.man4_main_texto2', {
  top:'0',
  opacity:'1'
},'<');
man4_3.to('.man4_main_texto3', {
  top:'100%',
},'<');
man4_3.to('.man4_main2_1', {
  left:'calc(50% - 6.5px)'
},'<');
man4_3.to('.num1', {
  opacity:0
},'<');
man4_3.to('.num2', {
  opacity:1
},'<');
man4_3.to('.man4_main_img1 .reloj, .man4_main_img3 .reloj', {
  bottom:'20%'
},'<');


const man4_4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man4_4',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man4_4.to('.man4_main_img1 .reloj, .man4_main_img3 .reloj', {
  bottom:'-45%'
},'<');
man4_4.to('.man4_main_texto2', {
  top:'-100%',
  opacity:'0'
},'<');
man4_4.to('.man4_main_texto3', {
  top:'0',
  opacity:'1'
},'<');
man4_4.to('.man4_main2_1', {
  left:'calc(70.8% - 6.5px)'
},'<');
man4_4.to('.num1', {
  opacity:0
},'<');
man4_4.to('.num2', {
  opacity:0
},'<');
man4_4.to('.num3', {
  opacity:1
},'<');

// manufactura 5

const man5_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_1.to('.man5_texto1', {
  top:'0%',
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 0,
        endDistancia = 64,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 64,
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
  }
},'<');
man5_1.to('.man5_lineas_fechas.fechas1', {
  opacity:1
},'<');
man5_1.to('.man5_marcador', {
  left:'calc(8.33% - 18px)'
},'<');
man5_1.to('.man5_grafica.man5_grafica1', {
  top:0
},'<');



const man5_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_2.to('.man5_texto1', {
  top:'-120%',
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 64,
        endDistancia = 85,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 85,
        endDistancia = 64,
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
  }
},'<');
man5_2.to('.man5_texto2', {
  top:'0%'
},'<');
man5_2.to('.man5_marcador', {
  left:'calc(25% - 18px)'
},'<');
man5_2.to('.man5_grafica.man5_grafica1', {
  top:'50%'
},'<');
man5_2.to('.man5_textos_img1_fuego', {
  opacity:1
},'<');
man5_2.to('.man5_grafica.man5_grafica2', {
  top:0
},'<');
man5_2.to('.man5_lineas_fechas.fechas1', {
  opacity:.6
},'<');
man5_2.to('.man5_lineas_fechas.fechas2', {
  opacity:1
},'<');


const man5_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_3',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_3.to('.man5_texto2', {
  top:'-120%'
},'<');
man5_3.to('.man5_texto3', {
  top:'0%'
},'<');
man5_3.to('.man5_marcador', {
  left:'calc(41.5% - 18px)'
},'<');
man5_3.to('.man5_textos_img1', {
  opacity:0
},'<');
man5_3.to('.man5_textos_img1_fuego', {
  opacity:0
},'<');
man5_3.to('.man5_textos_img2', {
  opacity:1
},'<');
man5_3.to('.man5_grafica.man5_grafica2', {
  top:'40%'
},'<');
man5_3.to('.man5_grafica.man5_grafica3', {
  top:'0%'
},'<');
man5_3.to('.man5_lineas_fechas.fechas2', {
  opacity:.6
},'<');
man5_3.to('.man5_lineas_fechas.fechas3', {
  opacity:1
},'<');



const man5_4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_4',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_4.to('.man5_texto3', {
  top:'-120%'
},'<');
man5_4.to('.man5_texto4', {
  top:'0%'
},'<');
man5_4.to('.man5_marcador', {
  left:'calc(58.2% - 18px)'
},'<');
man5_4.to('.man5_textos_img2', {
  opacity:0
},'<');
man5_4.to('.man5_textos_img3', {
  opacity:1
},'<');
man5_4.to('.man5_grafica.man5_grafica3', {
  top:'40%'
},'<');
man5_4.to('.man5_grafica.man5_grafica4', {
  top:'0%'
},'<');
man5_4.to('.man5_lineas_fechas.fechas3', {
  opacity:.6
},'<');
man5_4.to('.man5_lineas_fechas.fechas4', {
  opacity:1
},'<');


const man5_5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_5',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_5.to('.man5_texto4', {
  top:'-120%',
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 85,
        endDistancia = 197,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 197,
        endDistancia = 85,
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
  }
},'<');
man5_5.to('.man5_texto5', {
  top:'0%'
},'<');
man5_5.to('.man5_marcador', {
  left:'calc(74% )'
},'<');
man5_5.to('.man5_textos_img3', {
  opacity:0
},'<');
man5_5.to('.man5_textos_img4', {
  opacity:1
},'<');
man5_5.to('.man5_grafica.man5_grafica5', {
  top:0
},'<');
man5_5.to('.man5_grafica.man5_grafica4', {
  top:'40%'
},'<');
man5_5.to('.man5_grafica.man5_grafica5', {
  top:'0%'
},'<');
man5_5.to('.man5_lineas_fechas.fechas4', {
  opacity:.6
},'<');
man5_5.to('.man5_lineas_fechas.fechas5', {
  opacity:1
},'<');


const man5_6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man5_6',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man5_6.to('.man5_texto5', {
  top:'-120%',
  onStart: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 197,
        endDistancia = 1335,
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
  },
  onReverseComplete: function(){
    // Counter for log3_distancia
    let objDistancia = document.getElementById('man5_counter'),
        startDistancia = 1335,
        endDistancia = 197,
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
  }
},'<');
man5_6.to('.man5_texto6', {
  top:'0%'
},'<');
man5_6.to('.man5_marcador', {
  left:'calc(91.5% - 18px)'
},'<');
man5_6.to('.man5_textos_img4', {
  opacity:0
},'<');
man5_6.to('.man5_textos_img5', {
  opacity:1
},'<');
man5_6.to('.man5_grafica.man5_grafica5', {
  top:'60%'
},'<');
man5_6.to('.man5_grafica.man5_grafica6', {
  top:'0%'
},'<');
man5_6.to('.man5_lineas_fechas.fechas5', {
  opacity:.6
},'<');
man5_6.to('.man5_lineas_fechas.fechas6', {
  opacity:1
},'<');

const man61_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man61_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man61_1.to('.man61_texto', {
  top:0
},'<');


const man6_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_man6_1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
man6_1.to('.man6_texto', {
  top:'10%'
},'<');
man6_1.to('.contract1', {
  bottom:'-20%'
},'<');
man6_1.to('.contract2', {
  bottom:'-34%'
},'<');
man6_1.to('.contract3', {
  bottom:'-26%'
},'<');
man6_1.to('.contract4', {
  bottom:'-32%'
},'<');
man6_1.to('.contract5', {
  bottom:'-32%'
},'<');
man6_1.to('.contract6', {
  bottom:'-20%'
},'<');

// const man6_2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_man6_2',  
//     start: 'top center',  
//     end: 'top top',  
//     scrub: 1,    
//     markers: true, 
//   },
// });
// man6_2.to('.contract1', {
//   bottom:'-20%'
// });