function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var backgroundImage = new Image();
    var naveImage   = new Image(); // nave
    var enemiespic1  = new Image(); // enemigo 1
    var enemiespic2 = new Image(); // enemigo 2
    var enemiespic3 = new Image();

    // backgroundImage y naveImage
    backgroundImage.src = "images/background-pic.jpg"; //Imagen de fondo
    naveImage.src= "images/spaceship-pic.png"; //Imagen de la nave espacial
    enemiespic1.src     = "images/enemigo1.png";// Enemigos fotos
    enemiespic2.src     = "images/enemigo2.png"; //Enemies picture
    enemiespic3.src     = "images/enemigo3.png";
    
    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;

    
    var enemyTemplate = function(options){
        return {
            id: options.id || '',
            x: options.x || '',
            y: options.y || '',
            w: options.w || '',
            h: options.h || '',
            image: options.image || enemiespic1
        }
    }

  
    var enemies = [
        new enemyTemplate({ id: "enemy1", x: 100, y: -20, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy2", x: 225, y: -20, w: 50, h: 30 }),

        new enemyTemplate({ id: "enemy5", x: 225, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy6", x: 350, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy7", x: 475, y: -70, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy8", x: 600, y: -70, w: 80, h: 30 }),
        new enemyTemplate({ id: "enemy9", x: 475, y: -20, w: 50, h: 30 }),
        new enemyTemplate({ id: "enemy10", x: 600, y: -20, w: 50, h: 30 }),

        // Segundo grupo de enemigos
        new enemyTemplate({ id: "enemy11", x: 100, y: -220, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy12", x: 225, y: -220, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy13", x: 350, y: -220, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy14", x: 100, y: -270, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy15", x: 225, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy17", x: 475, y: -270, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy18", x: 600, y: -270, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy19", x: 475, y: -200, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy20", x: 600, y: -200, w: 50, h: 30, image: enemiespic2 }),



        new enemyTemplate({ id: "enemy21", x: 100, y: -420, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy22", x: 225, y: -420, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy23", x: 350, y: -420, w: 80, h: 50, }),
        new enemyTemplate({ id: "enemy24", x: 100, y: -470, w: 80, h: 50, }),
        new enemyTemplate({ id: "enemy25", x: 225, y: -470, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy26", x: 350, y: -470, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy27", x: 475, y: -470, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy28", x: 600, y: -470, w: 80, h: 50, }),
        new enemyTemplate({ id: "enemy29", x: 475, y: -400, w: 50, h: 30, }),
        new enemyTemplate({ id: "enemy30", x: 600, y: -400, w: 50, h: 30, }),

        new enemyTemplate({ id: "enemy11", x: 100, y: -720, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy12", x: 225, y: -520, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy13", x: 350, y: -620, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy14", x: 100, y: -670, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy15", x: 225, y: -570, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -870, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy17", x: 475, y: -770, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy18", x: 600, y: -670, w: 80, h: 50, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy19", x: 475, y: -600, w: 50, h: 30, image: enemiespic2 }),
        new enemyTemplate({ id: "enemy20", x: 600, y: -700, w: 50, h: 30, image: enemiespic2 }),

        new enemyTemplate({ id: "enemy11", x: 100, y: -900, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy12", x: 225, y: -550, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy13", x: 350, y: -950, w: 80, h: 50, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy14", x: 100, y: -870, w: 80, h: 50, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy15", x: 225, y: -710, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy16", x: 350, y: -560, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy17", x: 475, y: -790, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy18", x: 600, y: -840, w: 80, h: 50, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy19", x: 475, y: -590, w: 50, h: 30, image: enemiespic3 }),
        new enemyTemplate({ id: "enemy20", x: 600, y: -970, w: 50, h: 30, image: enemiespic3 })
    ];

    var renderEnemies = function (enemyList) {
        for (var i = 0; i < enemyList.length; i++) {
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            
            launcher.hitDetectLowerLevel(enemyList[i]);
        }
    }

    function Launcher(){        
        this.y = 500, 
        this.x = cW*.5-25, 
        this.w = 100, 
        this.h = 100,   
        this.direccion, 
        this.bg="white", 
        this.misiles = [];

        
         this.gameStatus = {
            over: false, 
            message: "",
            fillStyle: 'red',
            font: 'italic bold 36px Arial, sans-serif',
        }

        this.render = function () {
            if(this.direccion === 'left'){
                this.x-=5;
            } else if(this.direccion === 'right'){
                this.x+=5;
            }else if(this.direccion === "downArrow"){
                this.y+=5;
            }else if(this.direccion === "upArrow"){
                this.y-=5;
            }
            ctx.fillStyle = this.bg;
            ctx.drawImage(backgroundImage, 0, 10); 
            ctx.drawImage(naveImage,this.x,this.y, 100, 90); 

            for(var i=0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y-=5, m.w, m.h);
                this.hitDetect(this.misiles[i],i);
                if(m.y <= 0){ 
                    this.misiles.splice(i,1);
                }
            }
           
            if (enemies.length === 0) {
                clearInterval(animateInterval); 
                ctx.fillStyle = 'yellow';
                ctx.font = this.gameStatus.font;
                ctx.fillText('ganastes cero enenimos!', cW * .5 - 80, 50);
            }
        }
        
        this.hitDetect = function (m, mi) {
            console.log('crush');
            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                if(m.x+m.w >= e.x && 
                   m.x <= e.x+e.w && 
                   m.y >= e.y && 
                   m.y <= e.y+e.h){
                    this.misiles.splice(this.misiles[mi],1); 
                    enemies.splice(i, 1); 
                    document.querySelector('.barra').innerHTML = "Destroyed "+ e.id+ " ";
                }
            }
        }
        
        this.hitDetectLowerLevel = function(enemy){
            
            if(enemy.y > 550){
                this.gameStatus.over = true;
                this.gameStatus.message = 'Enemy(s) have passed!';
            }
           
            if(enemy.id === 'enemy3'){
               
                console.log(this.x);
            }
            
            if ((enemy.y < this.y + 25 && enemy.y > this.y - 25) &&
                (enemy.x < this.x + 45 && enemy.x > this.x - 45)) { 
                    this.gameStatus.over = true;
                    this.gameStatus.message = 'You Died!'
                }

            if(this.gameStatus.over === true){  
                clearInterval(animateInterval);
                ctx.fillStyle = this.gameStatus.fillStyle; 
                ctx.font = this.gameStatus.font;
                
                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50); 
            }
        }
    }

    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }
    var animateInterval = setInterval(animate, 20);
   document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) // flecha izquierda
        {
         launcher.direccion = 'left';  
            if(launcher.x < cW*.2-130){
                launcher.x+=0;
                launcher.direccion = '';
            }
       }    
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 37)
        {
         launcher.x+=0;
         launcher.direccion = '';
        }
    }); 

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 39) // flecha derecha
        {
         launcher.direccion = 'right';
         if(launcher.x > cW-110){
            launcher.x-=0;
            launcher.direccion = '';
         }

        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.keyCode == 39) // flecha derecha
        {
         launcher.x-=0;   
         launcher.direccion = '';
        }
    }); 
    
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 32) {
            launcher.misiles.push({
                x: launcher.x + launcher.w*.2, y: launcher.y + launcher.w*.7 ,
                w: 3,
                h: 10});
         }
         if (event.keyCode == 32) {
            launcher.misiles.push({
                x: launcher.x + launcher.w * .8,
                y: launcher.y + launcher.w * .7,
                w: 3,
                h: 10
            });
        }
    });
}

window.addEventListener('load', function(event) {
    initCanvas();
});



