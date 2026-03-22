const perimetro = (alto, ancho) => 2 * (alto + ancho);

const pantalla  = document.getElementById("pantalla");
const alto = parseInt(prompt("Ingrese el alto del rectangulo:"));
const ancho = parseInt(prompt("Ingrese el ancho del rectangulo:"));
const resultado = perimetro(alto, ancho);

pantalla.innerHTML += `<p>El perimetro del rectangulo es ${resultado}</p>`