let filaActual = 1;
const maxFilas = 10;

let colores = JSON.parse(sessionStorage.getItem("colores123456"));
let combinacionSecreta = [];

for (let i = 0; i < colores.length; i++) {
  let randomIndex = Math.floor(Math.random() * colores.length);
  combinacionSecreta.push(colores[randomIndex]);
}
