// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const produccion1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra1',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
produccion1.to('.produccion1_texto_div', {
  top:'20%'
},);

const produccion12 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra1_2',  
    start: 'top center',  
    end: 'top top',  
    scrub: 1,    
    markers: false, 
  },
});
// Produccion 1
produccion12.to('.produccion12_texto_div', {
  top:'20%'
},);
  

// const produccionArtT = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_fibra2Texto',  
//     start: 'top bottom', 
//     end:'top top',
//     scrub: 1,    
//     markers: false, 
//   },
// });
// // Produccion Artificial Texto
//   produccionArtT.to('.toneladas', {
//     transform:'translateY(0)'
//   },);
 

// const produccionArt = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_fibra2',  
//     start: 'top center', 
//     end:'top center',
//     scrub: 1,    
//     markers: false, 
//   },
// });
// produccionArt.to('.artificial', {
//   opacity:'1'
// },);

// const produccionNatT = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_fibra3Texto',  
//     start: 'top bottom', 
//     end:'top top',
//     scrub: 1,    
//     markers: false, 
//   },
// });
// // Produccion Natural Texto
//   produccionNatT.to('#produccion-texto3', {
//     opacity:'0'
//   },);
//   produccionNatT.to('#produccion-texto4', {
//     opacity:'1',
//     left:'0'
//   },);



// const produccionNat = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_fibra3',  
//     start: 'top center',
//     end:'top center',
//     scrub: 1,    
//     markers: false, 
//   },
// });
// produccionNat.to('.natural', {
//   opacity:'1'
// },);


// ARTIFICIAL

  let hasReachedTopHalf = false;
  let hasReachedBottomHalf = false;

  function checkElementPosition() {
    const element = document.querySelector('.aux_fibra114'); 
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // When the element reaches the top half of the screen
    if (elementPosition <= windowHeight / 2 && !hasReachedTopHalf) {
      Art(); // Element has reached the top half
      hasReachedTopHalf = true; // Set flag to true
      hasReachedBottomHalf = false; // Reset bottom half flag
      document.querySelectorAll('#line01 .point').forEach(function(point) {
        point.style.opacity = '1';
      });
    }
    // When the element goes back to the bottom half of the screen
    else if (elementPosition > windowHeight / 2 && !hasReachedBottomHalf) {
      document.querySelectorAll('#line01 .point').forEach(function(point) {
        point.style.opacity = '0';
      });
      ReverseArt(); // Element has reached the bottom half
      hasReachedBottomHalf = true; // Set flag to true
      hasReachedTopHalf = false; // Reset top half flag
      
    }
  }

  // Attach the function to the scroll event of the window
  window.addEventListener('scroll', checkElementPosition);


  // // Select the button with the class .boton and add a click event listener
  function Art() {

    // Select all path elements you want to animate (e.g., lines in a line chart)
    const paths = document.querySelectorAll('#line01 path'); // Update with your specific IDs or classes
    
    paths.forEach(function(path) {
      // Calculate the length of each path
      const length = path.getTotalLength();

      // Set up the initial styles for the dashed line
      path.style.strokeDasharray = length; // The dash pattern will be as long as the path
      path.style.strokeDashoffset = length; // The dash offset will initially hide the line

      // Clear any previous transition
      path.style.transition = 'none';

      // Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = 'stroke-dashoffset 3s ease-in-out';

      // Go! Animate the dash offset to zero
      path.style.strokeDashoffset = '0';
    });
  };
  function ReverseArt() {

    const paths = document.querySelectorAll('#line01 path'); 

    paths.forEach(function(path) {
      const length = path.getTotalLength();
      path.style.transition = 'stroke-dashoffset 3s ease-in-out';
      path.style.strokeDashoffset = length; 
    });
  };

// // NATURAL

  let hasReachedTopHalfN = false;
  let hasReachedBottomHalfN = false;

  function checkElementPositionN() {
    const element = document.querySelector('.aux_fibra3');
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition <= windowHeight / 2 && !hasReachedTopHalfN) {
      ArtN(); 
      hasReachedTopHalfN = true; 
      hasReachedBottomHalfN = false; 


      document.querySelectorAll('#line02 .point').forEach(function(point) {
        point.style.opacity = '1';
      });
    }
  
    else if (elementPosition > windowHeight / 2 && !hasReachedBottomHalfN) {
      ReverseArtN(); 
      hasReachedBottomHalfN = true; 
      hasReachedTopHalfN = false; 
      document.querySelectorAll('#line02 .point').forEach(function(point) {
        point.style.opacity = '0';
      });
    }
  }

  window.addEventListener('scroll', checkElementPositionN);

  function ArtN() {
    const paths = document.querySelectorAll('#line02 path'); 
    
    paths.forEach(function(path) {
      const length = path.getTotalLength();

      path.style.strokeDasharray = length; 
      path.style.strokeDashoffset = length; 

      // Clear any previous transition
      path.style.transition = 'none';

      // Trigger a layout so styles are calculated & the browser picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = 'stroke-dashoffset 3s ease-in-out';

      // Go! Animate the dash offset to zero
      path.style.strokeDashoffset = '0';
    });
  };
  function ReverseArtN() {
    // Select all path elements you want to animate (e.g., lines in a line chart)
    const paths = document.querySelectorAll('#line02 path'); // Update with your specific IDs or classes
    
    paths.forEach(function(path) {
      // Calculate the length of each path
      const length = path.getTotalLength();

       path.style.transition = 'stroke-dashoffset 3s ease-in-out';
        path.style.strokeDashoffset = length; // Move the dash offset back to full length, "erasing" the line

    });
  };

const produccionHilos = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion3',  
    start: 'top 20%',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos.to('.produccion3_p', {
  top:'0'
},);


const produccionHilos1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_1',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos1.to('.hilar_der', {
  right:'0%'
},);
produccionHilos1.to('.fondo_hilos', {
  transform:'translateX(6.5%) translateY(2%)'
},'<');
produccionHilos1.to('.fondo_lineas', {
  transform:'translateX(0%) translateY(-105%)'
},'<');
// produccionHilos1.to('.produccion3_art,.produccion3_lineas_art', {
//   opacity:'1'
// },);


const produccionHilos2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_2',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos2.to('.produccion3_art,.produccion3_lineas_art', {
  opacity:'1'
},);
produccionHilos2.to('.lateral_fibra', {
  opacity:'1'
},);

const produccionHilos3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_3',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos3.to('#tipos_poliester', {
  opacity:'1'
},);
produccionHilos3.to('#tipos_algodon', {
  opacity:'1'
},);
produccionHilos3.to('#tipos_celulosas', {
  opacity:'1'
},);
produccionHilos3.to('#tipos_poliamida', {
  opacity:'1'
},);


const produccionHilos4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_4',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos4.to('.produccion3_nat,.produccion3_lineas_nat', {
  opacity:'1'
},);
produccionHilos4.to('#tipos_lana', {
  opacity:'1'
},);
produccionHilos4.to('#tipos_canamo', {
  opacity:'1'
},);


const produccionHilos5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_5',  
    start: 'top center',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos5.to('.lateral_ambiental', {
  opacity:'1'
},);
produccionHilos5.to('.impacto_div_img', {
  opacity:'1'
},'<');

const produccionHilos6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_6',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos6.to('#cota_energia', {
  opacity:'1'
},);
produccionHilos6.to('#oval108', {
  opacity:1
},);
produccionHilos6.to('#oval48', {
  opacity:1
},);
produccionHilos6.to('#oval85', {
  opacity:1
},);
produccionHilos6.to('#oval160', {
  opacity:1
},);

const produccionHilos7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_7',  
    start: 'top bottom',
    end:'top center',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos7.to('#oval120', {
  opacity:1
},);
produccionHilos7.to('#oval22', {
  opacity:1
},);

const produccionHilos8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_8',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos8.to('#cota_agua', {
  opacity:'1'
},);
produccionHilos8.to('#oval21', {
  opacity:'1'
},);
produccionHilos8.to('#oval1559', {
  opacity:'1'
},);
produccionHilos8.to('#oval92', {
  opacity:'1'
},);
produccionHilos8.to('#oval40', {
  opacity:'1'
},);

const produccionHilos9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_9',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos9.to('#oval530', {
  opacity:'1'
},);
produccionHilos9.to('#oval89', {
  opacity:'1'
},);

const produccionHilos10 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_10',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos10.to('#cota_co2', {
  opacity:'1'
},);
produccionHilos10.to('#oval33', {
  opacity:'1'
},);
produccionHilos10.to('#oval222', {
  opacity:'1'
},);
produccionHilos10.to('#oval332', {
  opacity:'1'
},);
produccionHilos10.to('#oval83', {
  opacity:'1'
},);

const produccionHilos11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_11',  
    start: 'top bottom',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos11.to('#oval17', {
  opacity:'1'
},);
produccionHilos11.to('#oval31', {
  opacity:'1'
},);

const produccionHilosFlores = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion4',  
    start: 'top top',
    scrub: 1,   
    pin:true, 
    markers: false, 
  },
});
produccionHilosFlores.to('.produccion4_texto', {
  top:0
},);

// produccionHilos6.to('.oval108', {
//   background:'linear-gradient(-135deg, var(--amarillo) 60%, white 60%, white 63%, transparent 61%)'
// },);
// produccionHilos6.to('.oval48', {
//   background:'linear-gradient(-135deg, var(--amarillo) 30%, white 30%, white 33%, transparent 31%)'
// },);
// produccionHilos6.to('.oval85', {
//   background:'linear-gradient(-135deg, var(--amarillo) 58%, white 58%, white 60%, transparent 59%)'
// },);
// produccionHilos6.to('.oval160', {
//   background:'linear-gradient(-135deg, var(--amarillo) 87%, white 87%, white 90%, transparent 88%)'
// },);