const showName = document.getElementById("nombreMostrado");
const selectedName = sessionStorage.getItem("nombreUsuario")
showName.innerText = selectedName

// Crear un contexto de audio
let audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Crear un nodo de audio para cargar y reproducir el archivo
let audioSource = audioContext.createBufferSource();

// Cargar el archivo de audio
fetch('../audio/billy_saw.mp3')
  .then(response => response.arrayBuffer())
  .then(data => audioContext.decodeAudioData(data))
  .then(buffer => {
    // Asignar el buffer al nodo de audio
    audioSource.buffer = buffer;
    audioSource.loop = true;

    // Conectar el nodo de audio al contexto y reproducir
    audioSource.connect(audioContext.destination);
    audioSource.start();

    // Manejar errores
    audioSource.onended = function() {
      console.log('El audio ha terminado de reproducirse.');
    };
  })
  .catch(error => {
    console.error('Error al cargar el archivo de audio:', error);
  });
