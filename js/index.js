// let audioContext = new (window.AudioContext || window.webkitAudioContext)();
// let audioSource = audioContext.createBufferSource();

// // Esta función manejará la carga y reproducción del audio
// function loadAndPlayAudio() {
//   fetch('./audio/saw-f.mp3')
//     .then(response => response.arrayBuffer())
//     .then(data => audioContext.decodeAudioData(data))
//     .then(buffer => {
//       audioSource.buffer = buffer;
//       audioSource.loop = true;

//       audioSource.connect(audioContext.destination);
//       audioSource.start();

//       // Manejar errores
//       audioSource.onended = function () {
//         console.log('El audio ha terminado de reproducirse.');
//       };
//     })
//     .catch(error => {
//       console.error('Error al cargar el archivo de audio:', error);
//     });
// }

// // Llama a la función para cargar y reproducir audio cuando se carga la página
// window.addEventListener('load', loadAndPlayAudio);

// // También, puedes usar el evento 'canplaythrough' para volver a cargar el audio si el usuario interactúa con la página
// document.addEventListener('click', function () {
//   // Comprueba si el audio ya se ha reproducido
//   if (audioContext.state === 'suspended') {
//     loadAndPlayAudio();
//   }
// });
