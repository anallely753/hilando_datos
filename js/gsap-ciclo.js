const gsapCiclo1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.ciclo1_aux1',  
    start: 'top center',
    end: 'top top',
    scrub: 1,    
    markers: false, 
  },
});
gsapCiclo1.to('.ciclo_texto_intro_div', {
   top:'0',
},);