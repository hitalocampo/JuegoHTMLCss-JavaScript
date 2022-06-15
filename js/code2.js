let nave=document.querySelector('.nave');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
let explosion=document.getElementById('explosion');
let live=document.querySelector('i');
let times=document.getElementById('times');
let lives=5;
let second=40;
let cantidad = 100
var sonidoperdedor = document.getElementById("blender-sound");
var sonidoganador= document.getElementById("blender-button-sound");
let sonidoJuego= document.getElementById("soni-juego");

window.addEventListener("keydown", (e) => {
    let tecla = e.key;
    console.log(e.key);
    switch (tecla) {
      case "ArrowRight":
        cantidad += 100;
        nave.style.transform = `translateX(${cantidad}px) `;
        break;
      case "ArrowLeft":
        cantidad -= 100;
        nave.style.transform = `translateX(${cantidad}px)`;
      default:
        break;
    }
  });

document.addEventListener('keydown', function(event){
    if(event.keyCode == 80) // reinicia el juego
    {
     location.reload();
    }
});

setInterval(() => {
    second--;
    times.textContent=second;
    if (second==0){
        sonidoganador.play()
        sonidoJuego.pause();
        alert('tu Ganas!');
        location.reload();
       
    }
}, 1000);
document.addEventListener('mousemove',(e)=>{
    nave.style.left=(e.clientX-40)+'px';
    
});
//generar disparo
document.addEventListener('click',()=>{
    let bala=document.createElement('div');
    let bala2=document.createElement('div');
    bala.classList.add('bala');
    bala.style.bottom=70+'px';
    bala2.classList.add('bala');
    bala2.style.bottom=70+'px';
    bala.style.left=(nave.getBoundingClientRect().left+60)+'px';
    bala2.style.left=(nave.getBoundingClientRect().left+20)+'px';
    body.append(bala);
    body.append(bala2);
    laser.play();

});

//movimiento de disparo
setInterval(()=>{
    let balas=document.querySelectorAll('.bala');
    balas.forEach(bala => {
        bala.style.top=(bala.getBoundingClientRect().top-20)+'px';
        
        if (bala.getBoundingClientRect().top<=0){
            bala.remove();
        }

        //detectar las colisiones
        let enemigos=document.querySelectorAll('.enemigo');

        enemigos.forEach(enemigo => {
            if (bala.getBoundingClientRect().top<=enemigo.getBoundingClientRect().top+50){
                if (bala.getBoundingClientRect().left>=enemigo.getBoundingClientRect().left && bala.getBoundingClientRect().left<=enemigo.getBoundingClientRect().left+80){
                    enemigo.style.backgroundImage='url("../images/explosion.png")';
                    explosion.play();
                   setTimeout(() => {
                       enemigo.remove();
                       explosion.stop();
                       
                   }, 100);

                }
            }
        });
    });
},100);

//generar meteoritos
let aparecer=0;
setInterval(()=>{
    aparecer++;
    if (aparecer%5==0){
        let enemigo=document.createElement('div');
        enemigo.classList.add('enemigo');
        body.append(enemigo);
        enemigo.style.left=(Math.random()*window.innerWidth-100)+'px';
        sonidoJuego.play()
        
    }
        let enemigos=document.querySelectorAll('.enemigo');
        enemigos.forEach(element => {
            element.style.top=(element.getBoundingClientRect().top+10)+'px';
          if (element.getBoundingClientRect().top>nave.getBoundingClientRect().top){
              lives--;
              live.textContent=lives;
              if (lives==-1){
                sonidoJuego.pause();
                sonidoperdedor.play()
                  alert('Game Over');
                  location.reload();
              }
              element.remove();
          }
        });
    
},100);