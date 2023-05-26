// Seleccionamos los elementos HTML que necesitamos
const secciones = document.querySelectorAll('.seccion');
const botones = document.querySelectorAll('.seccion-botones');

secciones.forEach((seccion, index) => {
  seccion.addEventListener('click', () => {
    const contenido = seccion.querySelector('.seccion-contenido');
    if (contenido.style.display === 'none') {
      secciones.forEach((s) => {
        s.querySelector('.seccion-contenido').style.display = 'none';
      });
      contenido.style.display = 'block';
    } else {
      contenido.style.display = 'none';
    }
  });
});

