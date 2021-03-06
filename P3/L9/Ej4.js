console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
//const start = document.getElementById("start");
const raqueta = document.getElementById("raqueta");
izquierda = document.getElementById("izquierda");
derecha = document.getElementById("derecha");

canvas.width = 400;
canvas.height = 600;
const ctx = canvas.getContext("2d");

const ESTADO = {
    INIT: 0,
    SAQUE: 1,
    FINISH: 2,
}


const MIN_VIDAS = 0;
//Vidas
let vidas = 3;

let estado = ESTADO.INIT;

//Coordenadas de la bola
let x = 205;
let y = 455;

//-- Velocidades de la bola
let velx = 3;
let vely = -1;

//-- Coordenadas de la raqueta
let w = 170;
let z = 465;


function update() 
{
  
  if (x < 10 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  if (y <= 10) {
    vely = -vely;
  }

  if (y > (canvas.height) ) {
    estado = ESTADO.INIT;
    x = w + 40;
    y = z - 10;
    vely = -vely;
  }

  if (w > 10 || w <= (canvas.width - 10) ) {

    window.onkeydown = (e) => {
      switch (e.key) {
        case " ":
        if (vidas == MIN_VIDAS){
            estado = ESTADO.FINISH;
            console.log("Fin");
        }else{
            vidas -= 1;
            estado = ESTADO.SAQUE;
            console.log("Saque");
        }
        break;
        case "a":
        case "A":
          console.log("Moviendo a la izquierda la raqueta");
          w = w - 30;
          break;
        case "d":
        case "D":
          console.log("Moviendo a la derecha la raqueta");
          w = w + 30;
          break;
        }
    }
  }
  if(w < 10) {
    w = 0;
  }
  if(w >= (canvas.width - 90)) {
    w = 680;
  }

  if ((x + 10) >= w && x <=(w + 100) &&
      (y + 5) >= z && y <=(z + 10)) {
        vely = -vely;
  }

  if (estado == ESTADO.SAQUE) {
    x = x + velx;
    y = y + vely;
  }

 
    
  //Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Dibujar los elementos visibles
  ctx.beginPath();
        // Bola
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'white';

        //trazo
        ctx.stroke()

        //relleno
        ctx.fill()     
  ctx.closePath()

  //TEXTO
  ctx.font = "20px Arial Black";
  ctx.fillStyle = 'white'
  ctx.fillText(vidas, 370, 40);
  ctx.fillText("LIFES", 300, 40);

  ctx.font = "20px Arial Black";
  ctx.fillStyle = 'white'
  ctx.fillText("33", 25, 40);

  //TEXTO
  if (estado == ESTADO.FINISH) {
    if (vidas == MIN_VIDAS){
        ctx.font = "50px Arial Black";
        ctx.fillStyle = 'red'
        ctx.fillText("????GAME OVER!!", 175, 600);
    }
  }

  ctx.beginPath();
      ctx.rect(w,z, 80, 10);
      ctx.fillStyle = 'purple';

      ctx.stroke()

      ctx.fill()
      
  ctx.closePath()

  ctx.beginPath();
  
  ctx.rect(20,70, 40, 20);
  ctx.rect(65,70, 40, 20);
  ctx.rect(110,70, 40, 20);
  ctx.rect(155,70, 40, 20);
  ctx.rect(200,70, 40, 20);
  ctx.rect(245,70, 40, 20);
  ctx.rect(290,70, 40, 20);
  ctx.rect(335,70, 40, 20);
    
  ctx.rect(20,95, 40, 20);
  ctx.rect(65,95, 40, 20);
  ctx.rect(110,95, 40, 20);
  ctx.rect(155,95, 40, 20);
  ctx.rect(200,95, 40, 20);
  ctx.rect(245,95, 40, 20);
  ctx.rect(290,95, 40, 20);
  ctx.rect(335,95, 40, 20);
      
  ctx.rect(20,120, 40, 20);
  ctx.rect(65,120, 40, 20);
  ctx.rect(110,120, 40, 20);
  ctx.rect(155,120, 40, 20);
  ctx.rect(200,120, 40, 20);
  ctx.rect(245,120, 40, 20);
  ctx.rect(290,120, 40, 20);
  ctx.rect(335,120, 40, 20);

  ctx.rect(20,145, 40, 20);
  ctx.rect(65,145, 40, 20);
  ctx.rect(110,145, 40, 20);
  ctx.rect(155,145, 40, 20);
  ctx.rect(200,145, 40, 20);
  ctx.rect(245,145, 40, 20);
  ctx.rect(290,145, 40, 20);
  ctx.rect(335,145, 40, 20);

  ctx.rect(20,170, 40, 20);
  ctx.rect(65,170, 40, 20);
  ctx.rect(110,170, 40, 20);
  ctx.rect(155,170, 40, 20);
  ctx.rect(200,170, 40, 20);
  ctx.rect(245,170, 40, 20);
  ctx.rect(290,170, 40, 20);
  ctx.rect(335,170, 40, 20);

  ctx.fillStyle = 'pink'
  ctx.fill();
  ctx.stroke();

ctx.closePath();


  requestAnimationFrame(update);
}

update();