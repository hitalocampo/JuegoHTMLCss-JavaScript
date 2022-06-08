let nave=document.querySelector('.nave');
let body=document.querySelector('body');
let laser=document.getElementById('laser');
let explosion=document.getElementById('explosion');
let live=document.querySelector('i');
let times=document.getElementById('times');
let lives=5;
let second=30;
let cantidad = 100

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

setInterval(() => {
    second--;
    times.textContent=second;
    if (second==0){
        alert('has Ganado PASAR AL SIGUIENTE NIVEL!');
        location.reload();
        window.location.replace("./inicio/segunaPantalla/inicio2.html");
       
    }
}, 1000);
document.addEventListener('mousemove',(e)=>{
    nave.style.left=(e.clientX-40)+'px';
    
});
//generar disparo
document.addEventListener('click',()=>{
    let bala=document.createElement('div');
    bala.classList.add('bala');
    bala.style.bottom=70+'px';
    bala.style.left=(nave.getBoundingClientRect().left+40)+'px';
    body.append(bala);
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
    if (aparecer%10==0){
        let enemigo=document.createElement('div');
        enemigo.classList.add('enemigo');
        body.append(enemigo);
        enemigo.style.left=(Math.random()*window.innerWidth-100)+'px';
    }
        let enemigos=document.querySelectorAll('.enemigo');
        enemigos.forEach(element => {
            element.style.top=(element.getBoundingClientRect().top+10)+'px';
          if (element.getBoundingClientRect().top>nave.getBoundingClientRect().top){
              lives--;
              live.textContent=lives;
              if (lives==-1){
                  alert('Game Over');
                  location.reload();
              }
              element.remove();
          }
        });
    
},100);