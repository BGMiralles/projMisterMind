const showName = document.getElementById("nombreMostrado");
const selectedName = sessionStorage.getItem("nombreUsuario")
showName.innerText = selectedName