/*CÓDIGO SOBRE ANIMAÇÃO*/

const letterContainers = document.querySelectorAll('.letter-container');

setInterval(() => {
  letterContainers.forEach(container => {
    container.classList.add('spin');
    setTimeout(() => {
      container.classList.remove('spin');
    }, 5000)
  });
}, 10000);

//CODIGO MUSICA DE FUNDO

// window.addEventListener('DOMContentLoaded', (event) => {
//   var audio = document.getElementById('background-music');
//   audio.volume = 0.04;
//   audio.play();
// });



// //CODIGO TROCAR IMAGEM E MUTAR MUSICA

// let imgAtual = "img/SOUND/ONSOUND.jpg"
// let imgDps = "img/SOUND/MUTED.jpg"
// let musicaMuda = true;

// function trocarImagem() {

//   document.getElementById("penis").src = imgAtual;
//   let aux = imgAtual
//   imgAtual = imgDps
//   imgDps = aux

//   var audio = document.getElementById('background-music');
//   if (musicaMuda) {
//     audio.volume = 0;
//   } else {
//     audio.volume = 0.04;
//   }

//   musicaMuda = !musicaMuda

// };


window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('background-music');
  audio.volume = 0.04;
  audio.play();
});

let imgMuted = "img/SOUND/MUTED.jpg";
let imgOnSound = "img/SOUND/ONSOUND.jpg";
let isMuted = false;

function trocarImagem() {
  var audio = document.getElementById('background-music');
  isMuted = !isMuted;
  
  if (isMuted) {
      audio.volume = 0;
      document.getElementById("penis").src = imgMuted;
  } else {
      audio.volume = 0.04;
      document.getElementById("penis").src = imgOnSound;
  }
};
