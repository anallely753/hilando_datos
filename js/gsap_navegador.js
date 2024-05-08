// Portada pregunta
const navTextoId = document.getElementById('nav_texto');
const elements = document.querySelectorAll('.navegador_div');
const navegadorId = document.querySelector('.navegador');
const navegador1 = document.querySelector('.navegador1');
const navegador2 = document.querySelector('.navegador2');
const navegador3 = document.querySelector('.navegador3');
const navegador4 = document.querySelector('.navegador4');
const navegador5 = document.querySelector('.navegador5');
const navegador6 = document.querySelector('.navegador6');
const navegador7 = document.querySelector('.navegador7');
const navegador8 = document.querySelector('.navegador8');

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
      end: 'top bottom',
      scrub: 1,    
      markers: false, 
      onEnter: navLima,
      onEnterBack: navLima,
     onUpdate: function(){
        contenidoNavegador = '';
        navTextoId.textContent=contenidoNavegador;

      },
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
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--verde)';
        },
      },
    });
    


    const gsapIntro3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador
          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--lima)';
        },
      },
    });
   

    const gsapIntro4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--verde)';

        },
      },
    });
    

    const gsapIntro5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro3',  
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--lima)';

        },
      },
    });
     gsapIntro5.to('.navegador1', {
      backgroundColor:'var(--lima)'
    },);



    const gsapIntro6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro4',  
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--verde)';
        },
      },
    });
    

    const gsapIntro7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro5',  
        start: 'top bottom',
        end: 'top bottom',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
          contenidoNavegador = 'intro';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador1.style.backgroundColor='var(--lima)';

        },
      },
    });


  // Ciclo de vida

    const gsapNavCicloInicio = gsap.timeline({
      scrollTrigger: {
        trigger: '#nave_ciclo1',  
        start: 'top top',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
        onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--lima)';
        },
      },
    });
   

    const gsapNavCicloFibra = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_fibra',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--lima)';
        },
      },
    });
    

    const gsapNavCicloDis = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_dis',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--lima)';
        },
      },
    });
   

    const gsapNavCicloManufactura = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_manufactura',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--verde)';
        },
      },
    });
    

    const gsapNavCicloUyM = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_uso',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;
            elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--verde)';
        },
      },
    });
    
      const gsapNavCicloLog = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_logistica',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navVerde,
        onEnterBack: navVerde,
        onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;
           elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--verde)';
        },
      },
    });


     const gsapNavCicloNV = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_nuevavida',  
        start: 'top center',
        end: 'top center',
        scrub: 1,    
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
       onUpdate: function(){
          contenidoNavegador = 'ciclo de vida';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador2.style.backgroundColor='var(--lima)';
        },
      },
    });


  // Producción de Fibra
    const gsapNavProduccion1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_produccion',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'producción';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador3.style.backgroundColor='var(--lima)';
        },
      },
    });
    


    const gsapNavProduccion3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion3',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'producción';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador3.style.backgroundColor='var(--lima)';
        },
       
      },
    });
   


    const gsapNavProduccion2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion4',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'producción';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador3.style.backgroundColor='var(--lima)';
        },
      },
    });



  // Diseño
    const gsapNavDis1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_diseno',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'diseño';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador4.style.backgroundColor='var(--lima)';
        },
      },
    });

    

    const gsapNavDis2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.dis_aux5',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador= 'diseño';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador4.style.backgroundColor='var(--lima)';
        },
      
      },
    });

  // Manufactura
      const gsapNavMan1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man1_container',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
           onEnter: navLima,
          onEnterBack: navLima,
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--lima)';
          },
         
        },
      });
      const gsapNavMan2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man2_container',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
          onEnter: navLima,
          onEnterBack: navLima,
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--lima)';
          },
          
        },
      });
      const gsapNavMan3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man3_container',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
           onEnter: navVerde,
          onEnterBack: navVerde,
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--verde)';
          },
         
        },
      });
       const gsapNavMan4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man4_container',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
           onEnter: navVerde,
          onEnterBack: navVerde,
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            navegadorId.style.opacity = '1';
            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--verde)';
          },
         
        },
      });

       const gsapNavMan5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man5_container',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            navegadorId.style.opacity = '0';
            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--lima)';
          },
        },
      });

       const gsapNavMan52 = gsap.timeline({
        scrollTrigger: {
          trigger: '.aux_man5_6',  
          start: 'top bottom',
          end: 'top bottom',
          markers: false, 
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            navegadorId.style.opacity = '0';
            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--lima)';
          },
        },
      });

      const gsapNavMan6 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man6_container',  
          start: 'top bottom',
          end: 'top bottom',
          onEnter: navVerde,
          onEnterBack: navVerde,
          markers: false, 
           onUpdate: function(){
            contenidoNavegador = 'manufactura';
          navTextoId.textContent=contenidoNavegador;

            navegadorId.style.opacity = '1';
            elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador5.style.backgroundColor='var(--verde)';
          },
          
        },
      });
       
  // Logística
    const gsapNavLog1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log1_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--lima)';
        },

      },
    });

    const gsapNavLog2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log2_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navAzul,
        onEnterBack: navAzul,
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--azul)';
        },
       
      },
    });

    const gsapNavLog3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log3_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false,
         onEnter: navAzul,
        onEnterBack: navAzul, 
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--azul)';
        },
       
      },
    });

    const gsapNavLog4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log4_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navAzul,
        onEnterBack: navAzul,
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--azul)';
        },
        
      },
    });

    const gsapNavLog5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log5_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navAzul,
        onEnterBack: navAzul,
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--azul)';
        },
        
      },
    });

    const gsapNavLog6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log6_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navAzul,
        onEnterBack: navAzul,
         onUpdate: function(){
          contenidoNavegador = 'logística';
          navTextoId.textContent=contenidoNavegador;

           elements.forEach(element => {
                element.style.backgroundColor='transparent';
            });
            navegador6.style.backgroundColor='var(--azul)';
        },
        
      },
    });


  // Uso
    const gsapNavUso1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman1_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'uso y mantenimiento';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador7.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavUso2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman2_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'uso y mantenimiento';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador7.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavUso5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman5_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'uso y mantenimiento';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador7.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavUso6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman6_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'uso y mantenimiento';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador7.style.backgroundColor='var(--lima)';
        },
       
      },
    });


  // Fin de vida
    const gsapNavFin1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_1',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
        
      },
    });
    const gsapNavFin2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida2_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavFin3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_3',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavFin4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_4_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavFin5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_5_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
       
      },
    });
    const gsapNavFin6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_6_container',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onEnter: navLima,
        onEnterBack: navLima,
         onUpdate: function(){
          contenidoNavegador = 'fin de vida';
          navTextoId.textContent=contenidoNavegador;

          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
          navegador8.style.backgroundColor='var(--lima)';
        },
       
      },
    });


  // Embajadores
     const gsapNavEmb1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_embajadores',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
         onUpdate: function(){
          navegadorId.style.opacity=1;
          contenidoNavegador = '';
          navTextoId.textContent=contenidoNavegador;
          elements.forEach(element => {
              element.style.backgroundColor='transparent';
          });
        },
      },
    });

  // Footer
     const gsapNavFooter1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_footer',  
        start: 'top bottom',
        end: 'top bottom',
        markers: false, 
        onUpdate: function(){
          navegadorId.style.opacity=0;
        },
      },
    });