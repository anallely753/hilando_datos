// Portada pregunta
const navBotonHilando = document.querySelector('.portada_btn_hilando');
const navBotonNosotros = document.querySelector('.portada_btn_contacto');
const navBotonXdata = document.querySelector('.portada_btn-xdata');

function navBotonClaro(){
    navBotonHilando.classList.remove('btn_hilando_blanco');
    navBotonHilando.classList.add('btn_hilando_negro');

    navBotonNosotros.classList.remove('btn_contacto_blanco');
    navBotonNosotros.classList.add('btn_contacto_negro');

    navBotonXdata.classList.remove('btn_xdata_blanco');
    navBotonXdata.classList.add('btn_xdata_negro');
    // alert('claro')
}

function navBotonOscuro(){
    navBotonHilando.classList.remove('btn_hilando_negro');
    navBotonHilando.classList.add('btn_hilando_blanco');

    navBotonNosotros.classList.remove('btn_contacto_negro');
    navBotonNosotros.classList.add('btn_contacto_blanco');

    navBotonXdata.classList.remove('btn_xdata_negro');
    navBotonXdata.classList.add('btn_xdata_blanco');
    // alert('oscuro')

}

  const gsapBotonesIntro = gsap.timeline({
    scrollTrigger: {
      trigger: '.aux_pregunta1',  
      start: 'top bottom',
      end: 'top top',
      scrub: 1,    
      markers: false, 
      onEnter: navBotonOscuro,
      onEnterBack: navBotonOscuro,
    },
  });
  gsapBotonesIntro.to('.portada_pregunta-botones', {
    opacity:1,
  },);


  // Intro

    const gsapBotonesIntro2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro1',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapBotonesIntro2.to('.portada_btn-xdata img', {
      opacity:1,
    },);


    const gsapBotonesIntro3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapBotonesIntro3.to('.portada_btn-xdata img', {
      opacity:1,
    },);

    const gsapBotonesIntro4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro2',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapBotonesIntro4.to('.portada_btn-xdata img', {
      opacity:1,
    },);

    const gsapBotonesIntro5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro3',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapBotonesIntro5.to('.portada_btn-xdata img', {
      opacity:1,
    },);



    const gsapBotonesIntro6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro4',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapBotonesIntro6.to('.portada_btn-xdata img', {
      opacity:1,
    },);

    const gsapBotonesIntro7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aux_nav_intro5',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
     gsapBotonesIntro7.to('.portada_btn-xdata img', {
      opacity:0,
    },);


  // // Ciclo de vida

    const gsapNavBotonesCicloInicio = gsap.timeline({
      scrollTrigger: {
        trigger: '#nave_ciclo1',  
        start: 'top top',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
       
      },
    });
    gsapNavBotonesCicloInicio.to('.portada_btn-xdata img', {
      opacity:0,
    },);

    const gsapNavBotonesCicloFibra = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_fibra',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      
      },
    });
    gsapNavBotonesCicloFibra.to('.portada_btn-xdata img', {
      opacity:0,
    },);
   

    const gsapNavBotonesCicloDis = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_dis',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
       
      },
    });
     gsapNavBotonesCicloDis.to('.portada_btn-xdata img', {
      opacity:0,
    },);



    const gsapNavBotonesCicloManufactura = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_manufactura',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
       
      },
    });
     gsapNavBotonesCicloManufactura.to('.portada_btn-xdata img', {
      opacity:0,
    },);


    const gsapNavBotonesCicloUyM = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_uso',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
        
      },
    });
     gsapNavBotonesCicloUyM.to('.portada_btn-xdata img', {
      opacity:0,
    },);

      const gsapNavBotonesCicloLog = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_logistica',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
        
      },
    });
       gsapNavBotonesCicloLog.to('.portada_btn-xdata img', {
      opacity:0,
    },);


     const gsapNavBotonesCicloNV = gsap.timeline({
      scrollTrigger: {
        trigger: '#ciclo_aux_nuevavida',  
        start: 'top bottom',
        end: 'top top',
        scrub: 1,    
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
        
      },
    });
      gsapNavBotonesCicloNV.to('.portada_btn-xdata img', {
      opacity:0,
    },);



  // Producción de Fibra
    const gsapNavBotonesProduccion1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_produccion',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesProduccion1.to('.portada_btn-xdata img', {
      opacity:1
    },);

    const gsapNavBotonesProduccion3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion3',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
       
      },
    });
     gsapNavBotonesProduccion3.to('.portada_btn-xdata img', {
      opacity:1
    },);

    const gsapNavBotonesProduccion2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.produccion4',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
        
      },
    });
     gsapNavBotonesProduccion2.to('.portada_btn-xdata img', {
      opacity:1
    },);



  // // Diseño
    const gsapNaBotonesvDis1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_diseno',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
      gsapNaBotonesvDis1.to('.portada_btn-xdata img', {
      opacity:1
    },);

    const gsapNavBotonesDis2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.dis_aux5',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
      gsapNavBotonesDis2.to('.portada_btn-xdata img', {
      opacity:1
    },);


  // // Manufactura
      const gsapNavBotonesMan1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man1_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
          onEnter: navBotonOscuro,
          onEnterBack: navBotonOscuro,
        },
      });
       gsapNavBotonesMan1.to('.portada_btn-xdata img', {
      opacity:1,
    },);

      const gsapNavBotonesMan2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man2_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
          onEnter: navBotonOscuro,
          onEnterBack: navBotonOscuro,
        },
      });
       gsapNavBotonesMan2.to('.portada_btn-xdata img', {
      opacity:1,
    },);
       
      const gsapNavBotonesMan3 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man3_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
          onEnter: navBotonClaro,
          onEnterBack: navBotonClaro,
        },
      });
       gsapNavBotonesMan3.to('.portada_btn-xdata img', {
      opacity:1,
    },);
       const gsapNavBotonesMan4 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man4_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
          onEnter: navBotonClaro,
          onEnterBack: navBotonClaro,
        },
      });
        gsapNavBotonesMan4.to('.portada_btn-xdata img', {
      opacity:1,
    },);

       const gsapNavBotonesMan5 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man5_container',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
           onEnter: navBotonClaro,
          onEnterBack: navBotonClaro,
        },
      });
        gsapNavBotonesMan5.to('.portada_btn-xdata img', {
      opacity:1,
    },);

       const gsapNavBotonesMan52 = gsap.timeline({
        scrollTrigger: {
          trigger: '.aux_man5_6',  
          start: 'top bottom',
          end: 'top top',
          markers: false, 
          onEnter: navBotonClaro,
          onEnterBack: navBotonClaro,
        },
      });
        gsapNavBotonesMan52.to('.portada_btn-xdata img', {
      opacity:1,
    },);

      const gsapNavBotonesMan6 = gsap.timeline({
        scrollTrigger: {
          trigger: '.man6_container',  
          start: 'top bottom',
          end: 'top top',
          onEnter: navBotonClaro,
          onEnterBack: navBotonClaro,
          markers: false, 
        },
      });
       gsapNavBotonesMan6.to('.portada_btn-xdata img', {
      opacity:1,
    },);
       
  // // Logística
    const gsapNavBotonesLog1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log1_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog1.to('.portada_btn-xdata img', {
         opacity:1,
       },);

    const gsapNavBotonesLog2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog2.to('.portada_btn-xdata img', {
         opacity:1,
       },);

    const gsapNavBotonesLog3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log3_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog3.to('.portada_btn-xdata img', {
         opacity:1,
       },);

    const gsapNavBotonesLog4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log4_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog4.to('.portada_btn-xdata img', {
         opacity:1,
       },);

    const gsapNavBotonesLog5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog5.to('.portada_btn-xdata img', {
         opacity:1,
       },);

    const gsapNavBotonesLog6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.log6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesLog6.to('.portada_btn-xdata img', {
         opacity:1,
       },);


  // // Uso
    const gsapNavBotonesUso1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman1_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesUso1.to('.portada_btn-xdata img', {
             opacity:1,
           },);

    const gsapNavBotonesUso2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesUso2.to('.portada_btn-xdata img', {
             opacity:1,
           },);

    const gsapNavBotonesUso5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesUso5.to('.portada_btn-xdata img', {
             opacity:1,
           },);

    const gsapNavBotonesUso6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.usoyman6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesUso6.to('.portada_btn-xdata img', {
             opacity:1,
           },);



  // // Fin de vida
    const gsapNavBotonesFin1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_1',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin1.to('.portada_btn-xdata img', {
                 opacity:1,
               },);

    const gsapNavBotonesFin2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida2_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin2.to('.portada_btn-xdata img', {
                 opacity:1,
               },);

    const gsapNavBotonesFin3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_3',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin3.to('.portada_btn-xdata img', {
                 opacity:1,
               },);

    const gsapNavBotonesFin4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_4_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin4.to('.portada_btn-xdata img', {
                 opacity:1,
               },);

    const gsapNavBotonesFin5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_5_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin5.to('.portada_btn-xdata img', {
                 opacity:1,
               },);

    const gsapNavBotonesFin6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.nuevavida_6_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesFin6.to('.portada_btn-xdata img', {
                 opacity:1,
               },);



  // Embajadores
     const gsapNavBotonesEmb1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section_embajadores',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
        onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
     gsapNavBotonesEmb1.to('.portada_btn-xdata img', {
                 opacity:1,
               },);


  // Gracias
     const gsapNavBotonesGracias1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.gracias_container',  
        start: 'top bottom',
        end: 'top top',
        markers: false, 
         onEnter: navBotonOscuro,
        onEnterBack: navBotonOscuro,
      },
    });
    gsapNavBotonesGracias1.to('.portada_btn-xdata img', {
      opacity:1,
    },);

  // Footer
     const gsapNavBotonesFooter1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer1_container',  
        start: 'top center',
        end: 'top top',
        markers: false, 
         onEnter: navBotonClaro,
        onEnterBack: navBotonClaro,
      },
    });
    gsapNavBotonesFooter1.to('.portada_btn-xdata img', {
      opacity:1,
    },);
