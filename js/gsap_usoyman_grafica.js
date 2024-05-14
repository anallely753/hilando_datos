const uym6_grafica = gsap.timeline({
  scrollTrigger: {
    trigger: '.usoyman6_container',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
    onEnter: updateUYM,
  },
});