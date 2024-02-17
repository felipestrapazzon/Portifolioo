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

window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById('background-music');
  audio.volume = 0.04;
  audio.play();
});



//CODIGO TROCAR IMAGEM E MUTAR MUSICA

let imgAtual = "img/SOUND/MUTED.jpg"
let imgDps = "img/SOUND/ONSOUND.jpg"
let musicaMuda = true;

function trocarImagem() {

  document.getElementById("penis").src = imgAtual;
  let aux = imgAtual
  imgAtual = imgDps
  imgDps = aux

  var audio = document.getElementById('background-music');
  if (musicaMuda) {
    audio.volume = 0;
  } else {
    audio.volume = 0.04;
  }

  musicaMuda = !musicaMuda

};


