// Seleccionamos los elementos HTML que necesitamos
const secciones = document.querySelectorAll('.seccion');
const botones = document.querySelectorAll('.seccion-botones');

// Agregamos un event listener a cada sección para que al hacer clic se muestre o recoja la sección correspondiente
secciones.forEach((seccion, index) => {
  seccion.addEventListener('click', () => {
    const contenido = seccion.querySelector('.seccion-contenido');
    if (contenido.style.display === 'none') {
      // Escondemos todo el contenido de las secciones
      secciones.forEach((s) => {
        s.querySelector('.seccion-contenido').style.display = 'none';
      });
      // Mostramos el contenido de la sección correspondiente
      contenido.style.display = 'block';
    } else {
      // Si se hace clic en una sección ya abierta, la recojemos
      contenido.style.display = 'none';
    }
  });
});