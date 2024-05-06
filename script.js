
const sasuke = document.querySelector('.sasuke')
const sharingan = document.querySelector('.sharingan')

const jump = () => {
    sasuke.classList.add('jump')

    setTimeout(() => {  
        sasuke.classList.remove('jump')

    }, 500)
}

const loop = setInterval(() => {
    const sharinganPosition = sharingan.offsetLeft
    const sasukePosition = +window.getComputedStyle(sasuke).bottom.replace('px', '')

    if (sharinganPosition <= 110 && sharinganPosition > 0 && sasukePosition < 80) {

        console.log('loop')

        sharingan.style.animation = 'none'
        sharingan.style.left = `${sharinganPosition}px`

        sasuke.style.animation = 'none'
        sasuke.style.left = `${sasukePosition}px`

        sasuke.src = ('madara400.png')
        sasuke.style.width = '400px'
        sasuke.style.marginLeft = '50%'

        clearInterval('loop')
    }

}, 10) 

document.addEventListener('keydown', jump)

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var audio = document.getElementById("meuaudio");
      audio.play();
    }, 1000); // Tempo em milissegundos antes de começar a reprodução do áudio (1000ms = 1 segundo)
  });


