const svg1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.nv4_aux1',  
    start: 'top top', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
svg1.to('.bote_denim', {
   opacity:'1'
}, '<');
