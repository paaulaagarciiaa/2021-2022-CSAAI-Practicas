console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const start = document.getElementById("start");
const raqueta = document.getElementById("raqueta");
izquierda = document.getElementById("izquierda");
derecha = document.getElementById("derecha");

canvas.width = 400;
canvas.height = 600;

const ctx = canvas.getContext("2d");

const ESTADO = {
    INIT: 0,
    SAQUE: 1,
    
}

//Comienza el estado inicial
let estado = ESTADO.INIT;

//Coordenadas de la bola
let x = 205;
let y = 455;

//Velocidades de la bola
let velx = 3;
let vely = -1;

//Coordenadas de la raqueta
let w = 170;
let z = 465;

function bola () {
    //Dibujar los elementos visibles
 ctx.beginPath();
 //Bola
 ctx.arc(x, y, 6, 0, 2 * Math.PI);
 ctx.strokeStyle = 'black';
 ctx.lineWidth = 1;
 ctx.fillStyle = 'black';
 ctx.stroke()

 ctx.fill()
 
ctx.closePath()
}

function pala () {
    //Pala
    ctx.beginPath();
    ctx.beginPath();
    ctx.rect(w, z, 70, 10);
    ctx.fillStyle = 'black';
    ctx.stroke()

    ctx.fill()
 
ctx.closePath()
}

//Funcion update
function update() 
{
  start.onclick = () => {
    estado = ESTADO.SAQUE;
    console.log("Saque");
  }

  //Rebote extremos verticales
  if (x < 10 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

    //Rebote extremos horizontales
  if (y <= 10) {
    vely = -vely;
  }

  //Condición de rebote en extremos horizontales
  if (y > (canvas.height) ) {
    estado = ESTADO.INIT;
    x = w+40;
    y = z-10;
    vely = -vely;
  }

  //Condición de limite de raqueta en extremos horizontales
  if (w > 10 || w <= (canvas.width - 10) ) {
    //Movimiento raqueta a la izquierda
    izquierda.onclick = () => {
        console.log("Moviendo a la izquierda la raqueta");
        w=w-20;
    }
    //Movimiento raqueta a la derecha
    derecha.onclick = () => {
        console.log("Moviendo a la derecha la raqueta");
        w=w+20;
    }
  }
  if(w < 10) {
    w= 0;
  }
  if(w >= (canvas.width - 90)) {
    w= 680;
  }

  //Colision bola con raqueta
  if ((x + 10) >= w && x <=(w + 100) &&
      (y + 10) >= z && y <=(z + 10)) {
        vely = -vely;
  }

  //Actualizar posición
  if (estado == ESTADO.SAQUE) {
    x = x + velx;
    y = y + vely;
  }

  //2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

   //3 
   bola ();
   pala ();

  //Texto
  ctx.font = "20px Arial Black";
  ctx.fillStyle = 'black'
  ctx.fillText("VIDAS: 5", 300, 40);

  ctx.font = "20px Arial Black";
  ctx.fillStyle = 'black'
  ctx.fillText("047", 30, 40);

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