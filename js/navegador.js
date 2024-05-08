const navTexto = document.getElementById('nav_texto');
const navIntro = document.getElementById('nav_intro');
const navCiclo = document.getElementById('nav_ciclo');
const navProduccion = document.getElementById('nav_produccion');
const navDiseno = document.getElementById('nav_diseno');
const navManufactura = document.getElementById('nav_manufactura');
const navLogistica = document.getElementById('nav_logistica');
const navNuevavida = document.getElementById('nav_nuevavida');
const navUsoyman = document.getElementById('nav_usoyman');

let contenidoNavegadorNumero = '1'

//  Intro
navIntro.addEventListener('mouseenter', function() {
  navTexto.textContent = 'intro';
});

navIntro.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador; 
});

// Ciclo de vida
navCiclo.addEventListener('mouseenter', function() {
  navTexto.textContent = 'ciclo de vida';
});

navCiclo.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});


navProduccion.addEventListener('mouseenter', function() {
  navTexto.textContent = 'Producción';
});

navProduccion.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});


navDiseno.addEventListener('mouseenter', function() {
  navTexto.textContent = 'diseño';
});

navDiseno.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});


navManufactura.addEventListener('mouseenter', function() {
  navTexto.textContent = 'manufactura';
});

navManufactura.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});


navLogistica.addEventListener('mouseenter', function() {
  navTexto.textContent = 'logística';
});

navLogistica.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});

navNuevavida.addEventListener('mouseenter', function() {
  navTexto.textContent = 'fin de vida';
});

navNuevavida.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});

navUsoyman.addEventListener('mouseenter', function() {
  navTexto.textContent = 'Uso y Mantenimiento';
});

navUsoyman.addEventListener('mouseleave', function() {
  navTexto.textContent = contenidoNavegador;
});

