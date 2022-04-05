console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

canvas.width = 400;
canvas.height = 500;

const ctx = canvas.getContext("2d");

//Coordenadas del objeto
let x = 20;
let y = 30;

//Velocidades del objeto
let velx = 7;
let vely = 2;

//Funcion update
function update() 
{
  console.log("test");

   //Rebote extremos verticales
   if (x < 10 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  //Rebote extremos horizontales
  if (y <= 10 || y > (canvas.height - 10) ) {
    vely = -vely;
  }

  //Actualizar posición
  x = x + velx;
  y = y + vely;

  //Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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

   //Pala punto fijo
   ctx.beginPath();
   ctx.beginPath();
   ctx.rect(170,465, 70, 10);
   ctx.fillStyle = 'black';
   ctx.stroke()

    ctx.fill()
    
  ctx.closePath()


  ctx.beginPath();
  ctx.rect(20,20, 40, 20);
  ctx.rect(65,20, 40, 20);
  ctx.rect(110,20, 40, 20);
  ctx.rect(155,20, 40, 20);
  ctx.rect(200,20, 40, 20);
  ctx.rect(245,20, 40, 20);
  ctx.rect(290,20, 40, 20);
  ctx.rect(335,20, 40, 20);

  ctx.rect(20,45, 40, 20);
  ctx.rect(65,45, 40, 20);
  ctx.rect(110,45, 40, 20);
  ctx.rect(155,45, 40, 20);
  ctx.rect(200,45, 40, 20);
  ctx.rect(245,45, 40, 20);
  ctx.rect(290,45, 40, 20);
  ctx.rect(335,45, 40, 20);
  
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

  ctx.fillStyle = 'pink'
  ctx.fill();
  ctx.stroke();

ctx.closePath();

  requestAnimationFrame(update);
}

update();