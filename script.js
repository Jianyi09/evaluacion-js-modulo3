const inputNombre = document.getElementById("nombre"); //campo de texto donde el usuario escribe su nombre
const saludoParrafo = document.getElementById("saludo"); //el <p> donde se mostrará el saludo
const caracteresSeccion = document.getElementById("caracteres"); //donde mostrará la cantidad de caracteres   
const botonSaludar = document.getElementById("saludarBtn"); //el botón que el usuario puede presionar para activar el saludo

// Función que se ejecuta al hacer clic en el botón
function saludar() {
  const nombre = inputNombre.value;
  if (nombre) {
    saludoParrafo.textContent = `Hola, ${nombre}`; // Muestra el saludo con nombre del usuario
    caracteresSeccion.textContent = `Tu nombre tiene ${nombre.length} caracteres.`; // Muestra la cantidad de caracteres del nombre
  } else {
    saludoParrafo.textContent = ""; //limpia el saludo si es borrado
    caracteresSeccion.textContent = "Por favor, escribe un nombre."; // Muestra un mensaje si no se ha ingresado un nombre
  }
}

const formulario = document.getElementById("formulario"); // Obtiene el formulario para manejar el evento de envío

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que se recargue la página
  saludar(); // Llama a tu función de saludo
});

// Asignar evento al botón
botonSaludar.addEventListener("click", saludar);
