let filaActual = 1;
const maxFilas = 10;
const difficulty = sessionStorage.getItem("difficulty");
let colores = JSON.parse(sessionStorage.getItem("colores123456"));
let combinacionSecreta = [];
const coloresSeleccionados = document.querySelectorAll(".color-seleccionado");
const botones = document.querySelectorAll(".color-seleccionado");
let elementosFilaActual = document.querySelectorAll(`.fila-${filaActual}`);
const elementosPintados = new Set();
let indiceElementoActual = 0;
const botonBorrar = document.querySelector(".borrar");

for (let i = 0; i < colores.length; i++) {
  let randomIndex = Math.floor(Math.random() * colores.length);
  combinacionSecreta.push(colores[randomIndex]);
}

let coloresSecretosHTMLElements = document.querySelectorAll(
  ".combsecreta .color-secreto"
);
let coloresSecretosHTMLElementsArray = Array.from(coloresSecretosHTMLElements);
coloresSecretosHTMLElementsArray.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = combinacionSecreta[index];
});

coloresSeleccionados.forEach((spanColor, index) => {
  spanColor.style.backgroundColor = colores[index];
});

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const colorSeleccionado = boton.style.backgroundColor;

    if (elementosPintados.has(elementosFilaActual[indiceElementoActual])) {
      return;
    }

    elementosFilaActual[indiceElementoActual].style.backgroundColor =
      colorSeleccionado;
    elementosPintados.add(elementosFilaActual[indiceElementoActual]);

    indiceElementoActual++;

    if (indiceElementoActual === elementosFilaActual.length) {
    }
  });
});

botonBorrar.addEventListener("click", () => {
  if (elementosPintados.size > 0) {
    const ultimoElementoPintado = elementosFilaActual[indiceElementoActual - 1];
    ultimoElementoPintado.style.backgroundColor = "";

    elementosPintados.delete(ultimoElementoPintado);
    indiceElementoActual--;
  }
});

function bloquearFilaActual() {
  const elementosFila = document.querySelectorAll(`.fila-${filaActual}`);
  elementosFila.forEach((elemento) => {
    elemento.style.pointerEvents = "none";
  });
}

function pasarSiguienteFila() {
  filaActual++;
  const filasOcultas =
    difficulty === "dificil" ? 4 : difficulty === "intermedio" ? 2 : 0;
  const maxFilasVisible = maxFilas - filasOcultas;
  if (filaActual > maxFilasVisible) {
    window.location.href = "../pages/loser.html";
    return;
  }

  elementosFilaActual = document.querySelectorAll(`.fila-${filaActual}`);
  elementosFilaActual.forEach((elemento) => {
    elemento.style.pointerEvents = "auto";
  });

  indiceElementoActual = 0;
}

function compararCombinacion() {
  const fila = document.querySelectorAll(`.fila-${filaActual}`);
  const coloresFila = Array.from(fila).map(
    (elemento) => elemento.style.backgroundColor
  );
  const coloresSecretos = coloresSecretosHTMLElementsArray.map(
    (elemento) => elemento.style.backgroundColor
  );

  let coincidenColoresPosicion = 0;
  let coincidenColores = 0;

  for (let i = 0; i < coloresFila.length; i++) {
    if (coloresFila[i] === coloresSecretos[i]) {
      coincidenColoresPosicion++;
      document.getElementsByClassName(`dots-fila-${filaActual}`)[
        i
      ].style.backgroundColor = "black";
    } else if (coloresSecretos.includes(coloresFila[i])) {
      coincidenColores++;
      document.getElementsByClassName(`dots-fila-${filaActual}`)[
        i
      ].style.backgroundColor = "white";
    }
  }

  if (coincidenColoresPosicion === coloresFila.length) {
    window.location.href = "winner.html";
  } else {
    console.log("La combinacion no es correcta.");
  }
}

document.querySelector("#aceptar1").addEventListener("click", () => {
  if (indiceElementoActual === elementosFilaActual.length) {
    compararCombinacion();
    bloquearFilaActual();
    pasarSiguienteFila();
  } else {
  }
});

if (difficulty === "facil") {
} else if (difficulty === "intermedio") {
  const filasOcultas = document.querySelectorAll(".fila-9, .fila-10");
  filasOcultas.forEach((fila) => (fila.style.display = "none"));
  const dotsOcultos = document.querySelectorAll(".dots-fila-9, .dots-fila-10");
  dotsOcultos.forEach((dots) => (dots.style.display = "none"));
} else if (difficulty === "dificil") {
  const filasOcultas = document.querySelectorAll(
    ".fila-7, .fila-8, .fila-9, .fila-10"
  );
  filasOcultas.forEach((fila) => (fila.style.display = "none"));
  const dotsOcultos = document.querySelectorAll(
    ".dots-fila-7, .dots-fila-8, .dots-fila-9, .dots-fila-10"
  );
  dotsOcultos.forEach((dots) => (dots.style.display = "none"));
}
