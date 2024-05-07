const uym1_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym1_1',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym1_1.to('.uym1_texto', {
   top:'0'
}, '<');

const uym2_01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_01',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_01.to('.uym2_lavadora_img', {
   bottom:'-5%'
}, '<');

const uym2_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_1',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_1.to('.uym2_texto1', {
   top:'25%'
}, '<');

const uym2_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_2',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_2.to('.uym2_ropasucia1', {
  visibility:'visible',
  left:'50%'
}, '<');
uym2_2.to('.uym2_ropasucia2', {
  visibility:'visible',
  right:'50%'
}, '<');

const uym2_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_3',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_3.to('.uym2_texto2', {
   top:'45%'
}, '<');

const uym2_4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_4',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_4.to('.uym2_lavadora_abierta_img', {
   opacity:1
}, '<');
uym2_4.to('.uym2_ropasucia_adentro', {
   opacity:1
}, '<');

const uym2_5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym2_5',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym2_5.to('.uym2_particulas1', {
  opacity:'1',
  width:'35%',
  top:'15%',
  left:'10%',
  transform:'rotate(5deg)'
}, '<');
uym2_5.to('.uym2_particulas2', {
  opacity:'1',
  width:'35%',
  top:'0%',
  left:'20%',
  transform:'rotate(85deg)'
}, '<');
uym2_5.to('.uym2_particulas3', {
  opacity:'1',
  width:'35%',
  top:'0%',
  left:'45%',
  transform:'rotate(145deg)'
}, '<');
uym2_5.to('.uym2_particulas4', {
  opacity:'1',
  width:'35%',
  top:'25%',
  left:'55%',
  transform:'rotate(-170deg)'
}, '<');
uym2_5.to('.uym2_particulas5', {
  opacity:'1',
  width:'35%',
  top:'0%',
  left:'35%',
  transform:'rotate(-90deg)'
}, '<');


const uym4_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym4_1',  
    start: 'top 5%', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym4_1.to('.uym2_lavadora_div', {
  opacity:0
}, '<');


const uym4_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym4_2',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym4_2.to('.uym2_particulas', {
  transform:'translateY(50vh)'
}, '<');
uym4_2.to('.usoyman2_container', {
  visibility:'hidden'
});

const uym4_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym4_3',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym4_3.to('.uym4_texto', {
  bottom:'25%'
}, '<');

const uym4_4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym4_4',  
    start: 'top bottom', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
// Define an array of class names for the botellas
const botellaClasses = [
  '.uym4_botella1', '.uym4_botella2', '.uym4_botella3', '.uym4_botella4', '.uym4_botella5',
  '.uym4_botella6', '.uym4_botella7', '.uym4_botella8', '.uym4_botella9', '.uym4_botella10',
  '.uym4_botella11', '.uym4_botella12', '.uym4_botella13', '.uym4_botella14', '.uym4_botella15',
  '.uym4_botella16', '.uym4_botella17', '.uym4_botella18', '.uym4_botella19', '.uym4_botella20',
  '.uym4_botella21'
];

// Loop through the array of class names and create tweens for each botella
botellaClasses.forEach(className => {
  uym4_4.to('.uym4_botellas_horizontal1 ' + className, {
    opacity: 1
  });
});
botellaClasses.forEach(className => {
  uym4_4.to('.uym4_botellas_horizontal2 ' + className, {
    opacity: 1
  });
});
botellaClasses.forEach(className => {
  uym4_4.to('.uym4_botellas_horizontal3 ' + className, {
    opacity: 1
  });
});
botellaClasses.forEach(className => {
  uym4_4.to('.uym4_botellas_horizontal4 ' + className, {
    opacity: 1
  });
});
botellaClasses.forEach(className => {
  uym4_4.to('.uym4_botellas_horizontal5 ' + className, {
    opacity: 1
  });
});

const uym5_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym5_1',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym5_1.to('.uym5_plancha', {
  right:'-5px'
}, '<');


const uym5_2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym5_2',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym5_2.to('.uym5_texto', {
  top:'25%'
}, '<');


const uym5_3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym5_3',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym5_3.to('.uym5_texto', {
  top:'-75%'
}, '<');


const uym5_4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_uym5_4',  
    start: 'top center', 
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
uym5_4.to('.uym5_verde', {
  right:'45%'
}, '<');



