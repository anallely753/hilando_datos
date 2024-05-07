// Portada pregunta
const navTextoId = document.getElementById('nav_texto');
const elements = document.querySelectorAll('.navegador_div');
const navegadorId = document.querySelector('.navegador');

function navLima(){
  elements.forEach(element => {
      // Remove the 'navegador_div_verde' class if it exists
      element.classList.remove('navegador_div_verde');
      element.classList.remove('navegador_div_azul');
      
      // Add the 'navegador_div_lima' class
      element.classList.add('navegador_div_lima');
  });

  navTextoId.classList.remove('navegador_texto_verde');
  navTextoId.classList.remove('navegador_texto_azul');
  navTextoId.classList.add('navegador_texto_lima');
  navegadorId.style.opacity=1
}

function navVerde(){
  // Iterate through the NodeList
  elements.forEach(element => {
      // Remove the 'navegador_div_verde' class if it exists
      element.classList.remove('navegador_div_lima');
      element.classList.remove('navegador_div_azul');
      
      // Add the 'navegador_div_lima' class
      element.classList.add('navegador_div_verde');
  });

  navTextoId.classList.remove('navegador_texto_lima');
  navTextoId.classList.remove('navegador_texto_azul');
  navTextoId.classList.add('navegador_texto_verde');
  navegadorId.style.opacity=1
}

function navAzul(){
  // Iterate through the NodeList
  elements.forEach(element => {
      // Remove the 'navegador_div_verde' class if it exists
      element.classList.remove('navegador_div_lima');
      element.classList.remove('navegador_div_verde');
      
      // Add the 'navegador_div_lima' class
      element.classList.add('navegador_div_azul');
  });

  navTextoId.classList.remove('navegador_texto_lima');
  navTextoId.classList.remove('navegador_texto_verde');

  navTextoId.classList.add('navegador_texto_azul');
  navegadorId.style.opacity=1
}


  const gsapIntro = gsap.timeline({
    scrollTrigger: {
      trigger: '.aux_pregunta1',  
      start: 'top bottom',
      end: 'top top',
      scrub: 1,    
      markers: false, 
      onEnter: navLima,
      onEnterBack: navLima,
    },
  });
  gsapIntro.to('.navegador', {
    opacity:1,
  },);


  // Intro

    const gsapIntro2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro1',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          navTextoId.textContent = 'intro';
        },
      },
    });


    const gsapIntro3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });

    const gsapIntro4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
      },
    });

    const gsapIntro5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro3',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });



    const gsapIntro6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro4',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
      },
    });

    const gsapIntro7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro5',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
          navTextoId.textContent = 'intro';
        },
      },
    });


  // Ciclo de vida

    const gsapNavCicloInicio = gsap.timeline({
      scrollTrigger: {
        trigger: '#nave_ciclo1',  
        start: 'top top',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'ciclo de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });

    const gsapNavCicloFibra = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_fibra',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavCicloDis = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_dis',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });


    const gsapNavCicloManufactura = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_manufactura',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
      },
    });

    const gsapNavCicloUyM = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_uso',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
      },
    });
      const gsapNavCicloLog = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_logistica',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
      },
    });

     const gsapNavCicloNV = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_nuevavida',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
            navTextoId.textContent = 'ciclo de vida';
          },
      },
    });


  // Producción de Fibra
    const gsapNavProduccion1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_produccion',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'producción de fibra';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavProduccion3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion3',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'producción de fibra';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavProduccion2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion4',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'producción de fibra';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });


  // Diseño
    const gsapNavDis1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_diseno',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'diseño';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavDis2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.dis_aux5',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'diseño';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });

  // Manufactura
      const gsapNavMan1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man1_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
          },
          onEnter: navLima,
          onEnterBack: navLima,
        },
      });
      const gsapNavMan2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man2_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
          },
          onEnter: navLima,
          onEnterBack: navLima,
        },
      });
      const gsapNavMan3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man3_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
          },
          onEnter: navVerde,
          onEnterBack: navVerde,
        },
      });
       const gsapNavMan4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man4_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
            navegadorId.style.opacity = '1'
          },
          onEnter: navVerde,
          onEnterBack: navVerde,
        },
      });

       const gsapNavMan5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man5_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
            navegadorId.style.opacity = '0'
          },
        },
      });

       const gsapNavMan52 = gsap.timeline({
        scrollTrigger: {
          trigger: '.aux_man5_6',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
            navegadorId.style.opacity = '0'
          },
        },
      });

      const gsapNavMan6 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man6_container',  
          start: 'top bottom',
          end: 'top top',
          onEnter: navVerde,
          onEnterBack: navVerde,
          markers: false, 
           onUpdate: function(){
            navTextoId.textContent = 'manufactura';
            navegadorId.style.opacity = '1'
          },
          
        },
      });
       
  // Logística
    const gsapNavLog1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log1_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });

    const gsapNavLog2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navAzul,
        onEnterBack: navAzul,
      },
    });

    const gsapNavLog3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log3_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navAzul,
        onEnterBack: navAzul,
      },
    });

    const gsapNavLog4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log4_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navAzul,
        onEnterBack: navAzul,
      },
    });

    const gsapNavLog5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navAzul,
        onEnterBack: navAzul,
      },
    });

    const gsapNavLog6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Logística';
        },
        onEnter: navAzul,
        onEnterBack: navAzul,
      },
    });


  // Uso
    const gsapNavUso1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman1_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Uso y Mantenimiento';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavUso2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Uso y Mantenimiento';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavUso5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Uso y Mantenimiento';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavUso6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Uso y Mantenimiento';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });


  // Fin de vida
    const gsapNavFin1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_1',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavFin2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavFin3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_3',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavFin4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_4_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavFin5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });
    const gsapNavFin6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navTextoId.textContent = 'Fin de vida';
        },
        onEnter: navLima,
        onEnterBack: navLima,
      },
    });


  // Embajadores
     const gsapNavEmb1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_embajadores',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navegadorId.style.opacity = '0'
        },
      },
    });

  // Footer
     const gsapNavFooter1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_footer',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onUpdate: function(){
          navegadorId.style.opacity = '0'
        },
      },
    });