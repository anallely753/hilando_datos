// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const portada = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_pregunta',  
    start: 'top 40%',  
    end: 'bottom top',      
    scrub: 1,    
    markers: false, 
    pinSpacing:false,
    pinSpacer: false,
    // snap: {
    //     // duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     // delay: 0.8, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     1
    // },
  },
});
portada.to('.portada_ropa', {
  overflow:'visible'
},);
portada.to('.portada_escondida_tenis1', {
  y:500,
  x:-100,
  rotate:44, 
},'<');
portada.to('.portada_escondida_chamarra1', {
  y:500,
  x:-5,
  rotate:5,
},'<');
portada.to('.portada_escondida_lentes1', {
  y:350,
  x:-5,
  rotate:120,
},'<');
portada.to('.portada_escondida_tenis2', {
  y:350,
  x:5,
  rotate:40,
},'<');
portada.to('.portada_escondida_jeans2', {
  y:480,
  x:-60,
  rotate:-150,
},'<');
portada.to('.portada_escondida_chamarra2', {
  y:350,
  x:-60,
  rotate:170,
},'<');
portada.to('.portada_escondida_lentes2', {
  y:400,
  x:-60,
  rotate:60,
},'<');
portada.to('.portada_escondida_jeans21', {
  y:300,
  x:-60,
  rotate:160,
},'<');
portada.to('.portada_escondida_ropa1', {
  y:350,
  x:-230,
  rotate:60,
},'<');
portada.to('.portada_escondida_tenis11', {
  y:400,
  x:-70,
  rotate:-30,
},'<');
portada.to('.portada_escondida_chamarra3', {
  y:420,
  x:-30,
  rotate:170,
},'<');
portada.to('.portada_escondida_chamarra11', {
  y:300,
  x:-30,
  rotate:50,
},'<');
portada.to('.portada_escondida_pulsera', {
  y:300,
  x:600,
  rotate:50,
},'<');
portada.to('.portada_escondida_pulsera2', {
  y:450,
  x:300,
  rotate:80,
},'<');

portada.to('.portada_pregunta_sticky', {
  opacity:1, 
  duration:.01
}, );

portada.to('.portada_escondida_tenis1', {
  y:2500,
  x:-280,
  rotate:210,
}, );
portada.to('.portada_escondida_chamarra1', {
  y:2500,
  x:-150,
  rotate:200,
},'<');
portada.to('.portada_escondida_lentes1', {
  y:2500,
  x:-220,
  rotate:120,
},'<');
portada.to('.portada_escondida_tenis2', {
  y:2500,
  x:-185,
  rotate:40,
},'<');
portada.to('.portada_escondida_jeans2', {
  y:2500,
  x:-260,
  rotate:-150,
},'<');
portada.to('.portada_escondida_chamarra2', {
  y:2500,
  x:360,
  rotate:170,
},'<');
portada.to('.portada_escondida_lentes2', {
  y:2500,
  x:-560,
  rotate:60,
},'<');
portada.to('.portada_escondida_jeans21', {
  y:2500,
  x:-160,
  rotate:160,
},'<');
portada.to('.portada_escondida_ropa1', {
  y:2500,
  x:-330,
  rotate:60,
},'<');
portada.to('.portada_escondida_tenis11', {
  y:2500,
  x:-170,
  rotate:-30,
},'<');
portada.to('.portada_escondida_chamarra3', {
  y:2500,
  x:-230,
  rotate:170,
},'<');
portada.to('.portada_escondida_chamarra11', {
  y:2500,
  x:-330,
  rotate:50,
},'<');
portada.to('.portada_escondida_pulsera', {
  y:2500,
  x:600,
  rotate:50,
},'<');
portada.to('.portada_escondida_pulsera2', {
  y:2500,
  x:300,
  rotate:80,
},'<');





portada.to('.portada_escondida', {
  opacity:0
});
portada.to('.gota1', {
  top:'115%',
  scale:.2
},'<');
portada.to('.gota1', {
  top:'125%',
  scale:40,
  transformOrigin:'center',

});
portada.to('.portada_pregunta', {
  backgroundImage:'none',
  backgroundColor:'var(--lima)',
});
portada.to('.gota1, .portada_pregunta_sticky', {
  display:'none'
});



// const sale = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_sale',  
//     start: 'top center',  
//     end: 'top top',      
//     scrub: true,    
//     markers: false, 
//   },
// });
// sale.to('.portada_escondida_tenis1', {
//   bottom:'-250%',
//   left:'-40%',
//   transform: 'rotate(-150deg)',
// });



// // create
// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 768px)", () => {

//  const gota = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.aux_gota',  
//       start: 'bottom center',  
//       end: 'top top',  
//       scrub: true,    
//       markers: false, 
//     },
//   });
//   gota.to('.gota1', {
//     transform:'scale(100)'  
//   });

//   const gotaSale = gsap.timeline({
//     scrollTrigger: {
//       trigger: '.aux_gota',  
//       start: 'top top',  
//       end: 'bottom top',  
//       scrub: true,    
//       markers: false, 
//     },
//   });
//   gotaSale.to('.portada_pregunta', {
//     backgroundImage:'none',
//     backgroundColor:'var(--lima)'  
//   });
//   gotaSale.to('.gota1, .portada_pregunta_sticky', {
//     visibility:'hidden'  
//   });

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
// });
