const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); 
const predios1 = document.querySelector('.predios1');
const predios2 = document.querySelector('.predios2');
const predios3 = document.querySelector('.predios3');
const clouds = document.querySelector('.clouds');
const estadio = document.querySelector('.estadio');
const aviao = document.querySelector('.aviao');
var gameOverId = document.querySelector('.gameOverId');
var btnClick = document.querySelector('#btn-action')
var fundoGameOver = document.querySelector('.game-board') 

const jump = () => {
  mario.classList.add('jump');

  setTimeout(()=> {
    mario.classList.remove('jump');
  },500);
}

const loop = setInterval(()=>{

  const pipePosition = pipe.offsetLeft;
  const predios1Position = predios1.offsetLeft;
  const predios2Position = predios2.offsetLeft;
  const predios3Position = predios3.offsetLeft;
  const estadioPosition = estadio.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


  if(pipePosition<=100 && pipePosition>0 &&marioPosition<65){

    pipe.style.animation ='none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation ='none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width ='60px';
    mario.style.marginLeft = '50px'; 

    predios1.style.animation= 'none'
    predios1.style.left=`${predios1Position}px`
    
    predios2.style.animation= 'none'
    predios2.style.left=`${predios2Position}px`
    
    predios3.style.animation= 'none'
    predios3.style.left=`${predios3Position}px`
    
    estadio.style.animation = 'none'
    estadio.style.left=`${estadioPosition}px`

    gameOverId.classList.add('gameOverClass')

    fundoGameOver.style ='background: linear-gradient(#ff6701, #fdaaaa);'

    btnClick.addEventListener('click', ()=>{
      location.reload()
    })

    clearInterval(loop);
    
  }
}, 10);
 
document.addEventListener('click', jump);
document.addEventListener('keydown', jump);

