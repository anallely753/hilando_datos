const emb1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.auxemb1',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
emb1.to('.embajadores_texto', {
    top:0
}, );

const emb2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.auxemb2',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
emb2.to('.embajadores_influencers', {
    top:0
}, );


const emb3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.auxemb3',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
emb3.to('.embajadores_influencers', {
    left:'-66%'
}, );

const gracias1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_gracias1',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
gracias1.to('.gracias_texto', {
    top:'0%'
}, );


const gracias2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_gracias2',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
gracias2.to('.gracias_hilo1', {
    top:'-18%'
}, );

gracias2.to('.gracias_hilo2', {
    right:'10%'
}, '<');


const footer1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_footer1',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
footer1.to('.footer1_col1', {
    top:'0'
}, );


const footer2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_footer2',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
footer2.to('.footer1_col2', {
    top:'0'
}, );

const footer3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_footer3',  
    start: 'top center', 
    end: 'top top', 
    scrub: 1,    
    markers: false, 
  },
});
// intro1
footer3.to('.footer2', {
    top:'0'
}, );