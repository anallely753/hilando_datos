const emb1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro1',  
    start: 'top top', 
    scrub: 2,    
    markers: false, 
    pin:true,
    pinSpacing:false,
  },
});
// intro1
emb1.to('.btn-main img, .portada_btn-xdata img', {
    filter: 'invert(80%)',
}, );