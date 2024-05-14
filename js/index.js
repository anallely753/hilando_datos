let contenidoNavegador = ''

window.addEventListener('load', function() {
    document.querySelector("#loader").style.visibility = "hidden";
    document.querySelector(".not_loader").style.visibility = "visible";
    document.querySelector(".navegador").style.opacity = "0";
    contenidoNavegador = ''
});

//  document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.visibility = "hidden";
//         alert('loading')

//         // document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         // document.querySelector("#loader").style.display = "none";
//         alert('complete')
//         document.querySelector("body").style.visibility = "visible";
//     }
// };
// // Efecto para que la gota se vea que caiga un poco antes de hacerse grande
// function handleScroll() {
//   const portada_pregunta = document.getElementById('portada_pregunta_sticky');
//   const portada_preguntaBounding = portada_pregunta.getBoundingClientRect();


//   const windowHeight = window.innerHeight;

//   // Calculate the bottom position of the element
//   const portada_preguntaBottomPosition = portada_preguntaBounding.bottom;

//   // // Check if the bottom position is within the bottom 10% of the viewport
//   // if (portada_preguntaBottomPosition <= windowHeight * 0.7) {
//   //   // Move the element to the fixed position at the bottom
//   //   document.querySelector('.portada_pregunta-botones').style.opacity = "1";
//   // } else {
//   //   // Restore the absolute position
//   //   document.querySelector('.portada_pregunta-botones').style.opacity = "0";
//   // }

 
// }

// // Attach the handleScroll function to the scroll event
// window.addEventListener('scroll', handleScroll);

// // Initial check when the page loads
// handleScroll();

// document.addEventListener('DOMContentLoaded', function () {
//   const imgElement = document.querySelector('.portada_btn-hilando img');
//   // const btnElement = document.querySelector('.btn-main');
//   const hilandoElement = document.querySelector('.portada_btn_hilando');
//   const contactoElement = document.querySelector('.portada_btn_contacto');

//   // Store the initial filter value and text color
//   const initialFilter = imgElement.style.filter;
//   const initialColor = contactoElement.style.color;

//   // Add event listener to .portada_btn-hilando
//   hilandoElement.addEventListener('mouseenter', function () {
//     // Check if the initial filter is invert(80%)
//     if (initialFilter === 'invert(80%)') {
//       // Apply style change only if the initial filter is invert(80%)
//       imgElement.style.filter = 'invert(0%)';
//     }
//   });



// });

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("overlay_content").style.opacity = "1";
  document.getElementById("botones-intro").style.display = "none";
  disableScroll()
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("overlay_content").style.opacity = "0";
  document.getElementById("botones-intro").style.display = "block";
 enableScroll();

}

function openNavTroquer() {
  document.getElementById("myNavTroquer").style.height = "100%";
}

/* Close */
function closeNavTroquer() {
  document.getElementById("myNavTroquer").style.height = "0%";
}
function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}


//  lines growing
function initializeLineStates() {
  const paths = document.querySelectorAll('#line01 path, #line02 path'); // Update with your specific IDs or classes

  paths.forEach(function(path) {
    // Calculate the length of each path
    const length = path.getTotalLength();

    // Initialize the line to be "invisible" by matching the stroke-dasharray and stroke-dashoffset
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Remove any existing transition to prevent animation during initialization
    path.style.transition = 'none';
  });
}

window.onload = function() {
  initializeLineStates();
  // Any other initialization code can go here
};

