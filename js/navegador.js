const navTexto = document.getElementById('nav_texto');
const navIntro = document.getElementById('nav_intro');
const navCiclo = document.getElementById('nav_ciclo');
const navProduccion = document.getElementById('nav_produccion');
const navDiseno = document.getElementById('nav_diseno');
const navManufactura = document.getElementById('nav_manufactura');
const navLogistica = document.getElementById('nav_logistica');
const navNuevavida = document.getElementById('nav_nuevavida');
const navUsoyman = document.getElementById('nav_usoyman');

//  Intro
navIntro.addEventListener('mouseenter', function() {
  navTexto.textContent = 'intro';
});

navIntro.addEventListener('mouseleave', function() {
  navTexto.textContent = ''; 
});

// Ciclo de vida
navCiclo.addEventListener('mouseenter', function() {
  navTexto.textContent = 'ciclo de vida';
});

navCiclo.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});


navProduccion.addEventListener('mouseenter', function() {
  navTexto.textContent = 'Produccion';
});

navProduccion.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});


navDiseno.addEventListener('mouseenter', function() {
  navTexto.textContent = 'diseño';
});

navDiseno.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});


navManufactura.addEventListener('mouseenter', function() {
  navTexto.textContent = 'manufactura';
});

navManufactura.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});


navLogistica.addEventListener('mouseenter', function() {
  navTexto.textContent = 'logística';
});

navLogistica.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});

navNuevavida.addEventListener('mouseenter', function() {
  navTexto.textContent = 'fin de vida';
});

navNuevavida.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});

navUsoyman.addEventListener('mouseenter', function() {
  navTexto.textContent = 'Uso y Mantenimiento';
});

navUsoyman.addEventListener('mouseleave', function() {
  navTexto.textContent = '';
});


// nav

// Function to handle the intersection changes
function handleIntersection(entries) {
  entries.forEach(entry => {
    // If .portada_pregunta is visible on screen
    if (entry.target.classList.contains('portada_pregunta') && entry.isIntersecting) {
      document.getElementById('nav_texto').textContent = 'intro';
    }
    // If .section_ciclo is visible on screen
    else if (entry.target.classList.contains('section_ciclo') && entry.isIntersecting) {
      document.getElementById('nav_texto').textContent = 'ciclo de vida';
    }
  });
}

// Create a new intersection observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.5 // Trigger when 50% of the target is visible
});

// Observe the target elements
const portadaPregunta = document.querySelector('.portada_pregunta');
const sectionCiclo = document.querySelector('.section_ciclo');

if (portadaPregunta) {
  observer.observe(portadaPregunta);
}

if (sectionCiclo) {
  observer.observe(sectionCiclo);
}
