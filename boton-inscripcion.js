// Seleccionar elementos
const input = document.querySelector('.input');
const button = document.querySelector('.Subscribe-btn');

// Escuchar el evento de entrada en el input
input.addEventListener('input', () => {
    if (input.value.trim() !== "") {
        // Cambiar el color del botón y del texto cuando el input tiene texto
        button.style.backgroundColor = '#029EDC';
        button.style.color = '#fff';
    } else {
        // Restablecer los colores si el input está vacío
        button.style.backgroundColor = '';
        button.style.color = ''; // Regresa al color por defecto
    }
});