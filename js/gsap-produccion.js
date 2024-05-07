const produccion1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra1',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
// Produccion 1
produccion1.to('.produccion1_texto_div', {
  top:'20%'
},);

const produccion11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra11',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
// Produccion 1
produccion11.to('.produccion1_texto_div', {
  top:'-80%'
},);
produccion11.to('.produccion1_hilos', {
  opacity:0
},);

const produccion112 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra112',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
produccion112.to('.produccion12_texto_div', {
   top:'30%'
},);

const produccion113 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra113',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
produccion113.to('.produccion12_texto_div', {
   top:'-30%'
},'<');
produccion113.to('.produccion1_texto_div1', {
   top:'8%'
},'<');
produccion113.to('.produccion_grafica', {
   top:'0%'
},'<');

const produccion114 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra114',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
produccion114.to('.produccion1_texto_div1', {
   top:'-30%'
},'<');
produccion114.to('.produccion1_texto_artificiales', {
   top:'8%'
},'<');
produccion114.to('.artificial', {
  opacity:'1'
},'<');

// document.querySelectorAll('#line02 .point').forEach(function(point) {
//   point.style.opacity = '1';
// });
let hasReachedTopHalf = false;
  let hasReachedBottomHalf = false;

  function checkElementPosition() {
    const element = document.querySelector('.aux_fibra115'); 
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
      document.querySelectorAll('#line01 .point2').forEach(function(point) {
        point.style.display = 'block';
      });
    }
    // When the element goes back to the bottom half of the screen
    else if (elementPosition > windowHeight / 2 && !hasReachedBottomHalf) {
      document.querySelectorAll('#line01 .point').forEach(function(point) {
        point.style.opacity = '0';
      });
      document.querySelectorAll('#line01 .point2').forEach(function(point) {
        point.style.display = 'none';
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


const produccion116 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_fibra116',  
    start: 'top center',  
    end: 'top top',  
    scrub: true,    
    markers: false, 
  },
});
produccion116.to('.produccion1_texto_artificiales', {
   top:'-30%'
},'<');
produccion116.to('.produccion1_texto_naturales', {
   top:'8%'
},'<');
produccion116.to('.natural', {
  opacity:'1'
},'<');

let hasReachedTopHalfN = false;
let hasReachedBottomHalfN = false;

function checkElementPositionN() {
  const element = document.querySelector('.aux_fibra117');
  const elementPosition = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (elementPosition <= windowHeight / 2 && !hasReachedTopHalfN) {
    ArtN(); 
    hasReachedTopHalfN = true; 
    hasReachedBottomHalfN = false; 


    document.querySelectorAll('#line02 .point').forEach(function(point) {
      point.style.opacity = '1';
    });
    document.querySelectorAll('#line02 .point2').forEach(function(point) {
        point.style.display = 'block';
    });
  }

  else if (elementPosition > windowHeight / 2 && !hasReachedBottomHalfN) {
    ReverseArtN(); 
    hasReachedBottomHalfN = true; 
    hasReachedTopHalfN = false; 
    document.querySelectorAll('#line02 .point').forEach(function(point) {
      point.style.opacity = '0';
    });
     document.querySelectorAll('#line02 .point2').forEach(function(point) {
        point.style.display = 'none';
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


// Manos

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


const produccionHilos2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_2',  
    start: 'top center',
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
produccionHilos2.to('.produccion3_texto_div', {
  top:'30%',
},);
// produccionHilos2.to('.produccion3_art,.produccion3_lineas_art', {
//   opacity:'1'
// },);
// produccionHilos2.to('.lateral_fibra', {
//   opacity:'1'
// },);


const produccionHilos3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_3',  
    start: 'top center',
    end:'top top',
    scrub: true,    
    markers: false, 
  },
});
produccionHilos3.to('.produccion3_texto_div', {
  top:'-60%',
},);


const produccionHilos4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_4',  
    start: 'top center',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos4.to('.produccion3_art,.produccion3_lineas_art,.produccion3_nat,.produccion3_lineas_nat', {
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
produccionHilos5.to('.lateral_fibra', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_poliester', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_algodon_nat', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_celulosas', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_poliamida', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_lana', {
  opacity:'1'
},'<');
produccionHilos5.to('#tipos_canamo', {
  opacity:'1'
},'<');




const produccionHilos6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_6',  
    start: 'top center',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos6.to('.lateral_ambiental', {
  opacity:'1'
},'<');
produccionHilos6.to('.impacto_rayo', {
  opacity:'1'
},'<');
produccionHilos6.to('.produccion3_cotas_div#cota_energia', {
  opacity:'1'
},'<');
produccionHilos6.to('#cota_energia', {
  opacity:'1'
},'<');
produccionHilos6.to('#oval108', {
  opacity:1
},'<');
produccionHilos6.to('#oval48', {
  opacity:1
},'<');
produccionHilos6.to('#oval85', {
  opacity:1
},'<');
produccionHilos6.to('#oval160', {
  opacity:1
},'<');
produccionHilos6.to('#oval120', {
  opacity:1
},'<');
produccionHilos6.to('#oval22', {
  opacity:1
},'<');
produccionHilos6.to('#oval48A', {
  opacity:1
},'<');

const produccionHilos7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_7',  
    start: 'top center',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos7.to('.impacto_gota', {
  opacity:'1'
},'<');
produccionHilos7.to('.produccion3_cotas_div#cota_agua', {
  opacity:'1'
},'<');
produccionHilos7.to('#oval21, #oval92, #oval40P,#oval530, #oval89, #oval1559', {
  opacity:1
},'<');

const produccionHilos8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod3_8',  
    start: 'top center',
    end:'top top',
    scrub: 1,    
    markers: false, 
  },
});
produccionHilos8.to('.impacto_nube', {
  opacity:'1'
},'<');
produccionHilos8.to('.produccion3_cotas_div#cota_co2', {
  opacity:'1'
},'<');
produccionHilos8.to('#oval33, #oval332, #oval83P,#oval17, #oval31, #oval222', {
  opacity:1
},'<');


const produccionHilosFlores = gsap.timeline({
  scrollTrigger: {
    trigger: '.aux_prod4_1',  
    start: 'top center',
    end: 'top top',
    scrub: 1,   
    markers: false, 
  },
});
produccionHilosFlores.to('.produccion4_texto', {
  top:'20%'
},);


