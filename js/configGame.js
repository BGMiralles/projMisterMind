const colorPicker = document.getElementById("color-picker");
const colorPreview = document.getElementById("muestraColor");
const selectButton = document.getElementById("select-button");
const selectedColorsContainer = document.getElementById(
  "selected-colors-container"
);
const deleteButton = document.getElementById("delete-button");
const nombreUsuario = document.getElementById("nombreUsuario");
const selectedColors = [];

colorPicker.addEventListener("change", changeColor);
selectButton.addEventListener("click", handleSelect);
deleteButton.addEventListener("click", handleDelete);

nombreUsuario.addEventListener("input", () => {
  sessionStorage.setItem("nombreUsuario", nombreUsuario.value);
});

window.onload = function () {
    var nombreAlmacenado = sessionStorage.getItem("nombreUsuario");
    document.getElementById("nombreMostrado").textContent = nombreAlmacenado;
  };

function changeColor() {
  const selectedColor = colorPicker.value;
  colorPreview.style.backgroundColor = selectedColor;

  const difficulty = sessionStorage.getItem("difficulty");

  if (
    selectedColor &&
    !isSelected(selectedColor) &&
    selectedColors.length < getMaximumColors(difficulty)
  ) {
    selectButton.disabled = false;
  } else {
    selectButton.disabled = true;
  }
}

function getMaximumColors(difficulty) {
  switch (difficulty) {
    case "facil":
      return 4;
    case "intermedio":
      return 5;
    case "dificil":
      return 6;
    default:
      return 4;
  }
}

