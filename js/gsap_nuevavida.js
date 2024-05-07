const nv1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nuevavida_1',  
    start: 'top top', 
    scrub: true,    
    markers: false, 
    pin:true,
  },
});
nv1.to('.nv1_texto', {
   top:0
}, '<');
nv1.to('.btn-main img, .portada_btn-xdata img', {
    filter: 'invert(0%)',
}, '<');
nv1.to('.btn-main', {
    color:'#fff',
}, '<');

const nv2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nuevavida_2',  
    start: 'top top', 
    scrub: true,    
    markers: false, 
    pin:true,
    pinSpacing:false,
  },
});
nv2.to('.nv2_titulo', {
   top:0
}, '<');
nv2.to('.nv2_img', {
   left:0
});
nv2.to('.nv2_texto1', {
   top:'14%'
});
nv2.to('.nv2_texto2', {
   top:'60%'
});
nv2.to('.nv2_texto3', {
   top:'52%'
});

const nv3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux1',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
nv3.to('.nv3_1', {
   position:'sticky',
   top:0
}, '<');
nv3.to('.nv3_texto', {
   top:0
}, '<');

const nv3Prendas = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux2',  
    start: 'top bottom', 
    end:'top -150%',
    scrub: true,    
    markers: false, 
  },
});
nv3Prendas.to('.nv3_camion_puerta', {
   top:'-110%', 
   duration:.3
});
nv3Prendas.to('.nv3_prenda1', {
   transform:'translateY(40%) translateX(-15%) rotate(10deg)'
},);
nv3Prendas.to('.nv3_prenda2', {
   transform:'translateY(220%) translateX(15%) rotate(-30deg)'
},'<');
nv3Prendas.to('.nv3_prenda3', {
   transform:'translateY(10%) translateX(-10%) rotate(-10deg)'
},'<');
nv3Prendas.to('.nv3_prenda4', {
   transform:'translateY(200%) translateX(80%) rotate(90deg)'
},'<');
nv3Prendas.to('.nv3_prenda5', {
   transform:'translateY(100%) translateX(-40%) rotate(10deg)'
},'<');
nv3Prendas.to('.nv3_prenda6', {
   transform:'translateY(120%) translateX(20%) rotate(-15deg)'
},'<');
nv3Prendas.to('.nv3_prenda7', {
   transform:'translateY(60%) translateX(20%) rotate(85deg)'
},'<');
nv3Prendas.to('.nv3_prenda8', {
   transform:'translateY(900%) translateX(30%) rotate(35deg)'
},'<');
nv3Prendas.to('.nv3_prenda9', {
   transform:'translateY(300%) translateX(20%) rotate(45deg)'
},'<');
nv3Prendas.to('.nv3_prenda10', {
   transform:'translateY(380%) translateX(0%) rotate(-25deg)'
},'<');
nv3Prendas.to('.nv3_prenda11', {
   transform:'translateY(390%) translateX(40%) rotate(75deg)'
},'<');

const nv31 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux3',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
nv31.to('.nv3_camion_img', {
   transform:'translateY(-110%)'
}, '<');
nv31.to('.nv3_texto', {
   transform:'translateY(-110%)'
}, '<');
nv31.to('.nv3_camion_puerta_div', {
   transform:'translateY(-350%)'
}, '<');


const nv32 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux4',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
nv32.to('.nv3_texto_92', {
   top:'10%'
}, '<');

const nv33 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux5',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
nv33.to('.nv3_texto_1', {
   top:'24%'
}, '<');
nv33.to('.nv3_2_cinturon', {
   filter:'none'
}, '<');

const nv34 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv3_aux6',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
nv34.to('.nv3_texto_2', {
   top:'48%'
}, '<');
nv34.to('.nv3_2_abrigo', {
   filter:'none'
}, '<');

const nv4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nuevavida_4_container',  
    start: 'top top', 
    scrub: true,    
    markers: false, 
  },
});
nv4.to('.nv4_texto', {
   position:'fixed'
}, '<');

const nv5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nuevavida_5',  
    start: 'top bottom', 
    scrub: true,    
    markers: false, 
  },
});
nv5.to('.nv4_texto', {
   top:'-80%'
}, '<');


const nv6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv5_aux1',  
    start: 'top center', 
    scrub: true,    
    markers: false, 
  },
});
nv6.to('.nv5_texto', {
   top:'0%'
}, '<');

const nv7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv5_aux2',  
    start: 'top center', 
    scrub: true,    
    markers: false, 
  },
});
nv7.to('.nv5_azul', {
   // bottom:'15%'
   opacity:'1'
}, '<');

const nv8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv5_aux3',  
    start: 'top center', 
    scrub: true,    
    markers: false, 
  },
});
nv8.to('.nv5_fondo', {
   bottom:'0'
}, '<');

const nv9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv6_aux1',  
    start: 'top 30%', 
    end: 'top top', 
    scrub: true,    
    markers: false, 
  },
});
// nv9.to('.nv6_texto', {
//    top:'0'
// }, '<');
// nv9.to('#radial_graph svg', {
//    top:'0'
// }, '<');

// Horizontal Scrolling
  /**
  * By Alvaro Trigo 
  * Follow me on Twitter: https://twitter.com/imac2
  */
  (function(){
      init();

      var g_containerInViewport;
      function init(){
          setStickyContainersSize();
          bindEvents();
      }

      function bindEvents(){
          window.addEventListener("wheel", wheelHandler);        
      }

      function setStickyContainersSize(){
          document.querySelectorAll('.nuevavida4_sticky').forEach(function(container){
              const stikyContainerHeight = container.querySelector('.nuevavida4_main').scrollWidth;
              container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
          });
      }

      function isElementInViewport (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
      }

      function wheelHandler(evt){
          
          const containerInViewPort = Array.from(document.querySelectorAll('.nuevavida4_sticky')).filter(function(container){
              return isElementInViewport(container);
          })[0];

          if(!containerInViewPort){
              return;
          }

          var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
          var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
          let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

          if(g_canScrollHorizontally){
              containerInViewPort.querySelector('.nuevavida4_main').scrollLeft += evt.deltaY;
          }
      }
  })();