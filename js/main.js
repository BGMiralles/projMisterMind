let filaActual = 1;
const maxFilas = 10;

let colores = JSON.parse(sessionStorage.getItem("colores123456"));
let combinacionSecreta = [];

for (let i = 0; i < colores.length; i++) {
  let randomIndex = Math.floor(Math.random() * colores.length);
  combinacionSecreta.push(colores[randomIndex]);
}

let coloresSecretosHTMLElements = document.querySelectorAll('.combsecreta .color-secreto');
let coloresSecretosHTMLElementsArray = Array.from(coloresSecretosHTMLElements);
coloresSecretosHTMLElementsArray.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = combinacionSecreta[index];
});

const coloresSeleccionados = document.querySelectorAll(".color-seleccionado");
coloresSeleccionados.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = colores[index];
});