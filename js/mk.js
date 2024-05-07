// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const produccion1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion1',  
    start: 'top top',  
    scrub: 1,    
    markers: false, 
    pin:'.produccion1_container',
    pinSpacing:true,
  },
});
// Produccion 1
  produccion1.to('.produccion1_texto', {
    top:'0'
  },);
  produccion1.to('.produccion1_fondo', {
    opacity:'1'
  },'<');
  produccion1.to('.produccion-mano', {
    left:'0'
  },);
  produccion1.to('.produccion1_img_vertical', {
    height:'95vh'
  },);
  produccion1.to('.produccion1_texto', {
    top:'-100%'
  },);
  produccion1.to('.produccion1_img_vertical', {
    height:'0'
  },'<');
  produccion1.to('.produccion-mano', {
    left:'-100%'
  },);

const produccion2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion2',  
    start: 'top top', 
    scrub: 1,    
    markers: false, 
    pin:'.produccion2_container',
    pinSpacing:true,
  },
});
produccion2.to('.produccion2_texto', {
  left:'0'
},);
produccion2.to('.toneladas', {
  transform:'translateY(0)'
},);
produccion2.to('.produccion2_texto_h3, #produccion-texto2', {
  opacity:'0'
},'<');
produccion2.to('#produccion-texto3', {
  opacity:'1', 
  left:'0'
},);
produccion2.to('.artificial', {
  opacity:'1'
},'<');
produccion2.to('#produccion-texto3', {
  opacity:'0'
},);
produccion2.to('#produccion-texto4', {
  opacity:'1',
  left:'0'
},);
produccion2.to('.natural', {
  opacity:'1'
},);


// const produccion21 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.aux_fibra1_2',  
//     start: 'top bottom',
//     end: 'top center', 
//     scrub: 1,    
//     markers: false, 
//   },
// });
// produccion21.to('.produccion2_texto', {
//   left:'0'
// },);


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
//   produccionArtT.to('.produccion2_texto_h3, #produccion-texto2', {
//     opacity:'0'
//   },);
//   produccionArtT.to('#produccion-texto3', {
//     opacity:'1', 
//     left:'0'
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

// const produccion3 = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.produccion3',  
//     start: 'top bottom',  
//     scrub: 1,    
//     markers: false, 
//     pinSpacing:true
//   },
// });
// produccion3.to('.produccion2_container', {
//   top:'-50%'
// },);

// ARTIFICIAL

  let hasReachedTopHalf = false;
  let hasReachedBottomHalf = false;

  function checkElementPosition() {
    const element = document.querySelector('.aux_fibra2'); 
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

// const produccion3P = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.produccion3',  
//     start: 'top top', 
//     scrub: 1,    
//     markers: false, 
//     pinSpacing:false,
//     pin:'.produccion3_container',
//   },
// });
// produccion3P.to('.produccion_grafica', {
//   opacity:'1', 
// },);

const produccion3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.produccion4',  
    start: 'top bottom',  
    scrub: 1,    
    markers: false, 
    pinSpacing:true
  },
});
produccion3.to('.produccion2_container', {
  top:'-50%'
},);