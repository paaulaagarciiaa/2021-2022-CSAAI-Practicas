var console;
console.log("Ejecutando JS....");

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagen');
const ctx = canvas.getContext('2d');

// Barra para mover los colores
const R = document.getElementById('R');
const V = document.getElementById('V');
const A = document.getElementById('A');

// Valores  de la barra
const range_valueRojo = document.getElementById('range_valueRojo');
const range_valueVerde = document.getElementById('range_valueVerde');
const range_valueAzul = document.getElementById('range_valueAzul');

const img1 = document.getElementById('imagen_1');
const img2 = document.getElementById('imagen_2');
const giro = document.getElementById('botonGirar');
const ruido = document.getElementById('botonGranulado');

img1.onclick = () => {
  img.src="Spiderman.jpg";
};
img2.onclick = () => {
  img.src="venom.jpg";
};

img.onload = function () {
  canvas.width = 1000;
  canvas.height = 600;

  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

    ctx.drawImage(img, 0,0);
    // Funcion de retrollamada deslizadores
    function RGB(){

    R.oninput = () => {
      range_valueRojo.innerHTML = R.value;
      //  Imagen original
      ctx.drawImage(img, 0,0);
      // Imagen en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data;
      umbralRojo = R.value;
      for (let i = 0; i < data.length; i+=4) {
        if (data[i] > umbralRojo)
          data[i] = umbralRojo;
      }
      //Imagen modificada
      ctx.putImageData(imgData, 0, 0);
    };
  
    V.oninput = () => {
        range_valueVerde.innerHTML = V.value;
      ctx.drawImage(img, 0,0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data;
      umbralVerde = V.value;
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+1] > umbralVerde)
          data[i+1] = umbralVerde;
      }
      //Imagen modificada
      ctx.putImageData(imgData, 0, 0);
    };
  
    A.oninput = () => {
        range_valueAzul.innerHTML = A.value;
      ctx.drawImage(img, 0,0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data;
      umbralAzul = A.value;
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+2] > umbralAzul)
          data[i+2] = umbralAzul;
      }
      //Imagen modificada
      ctx.putImageData(imgData, 0, 0);
    };
  }
  

// GRISES
function Grises(){
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;

    for (var i = 0; i < data.length; i+=4) {
      Rojo = data[i];
      Verde = data[i+1];
      Azul = data[i+2];
      Gris = (3 * Rojo + 4 * Verde + Azul)/8;
      data[i] = Gris;
      data[i+1] = Gris;
      data[i+2] = Gris;
    }
    ctx.putImageData(imgData, 0, 0);
}

// NEGATIVO
function negativo(){
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;

  for ( var i = 0; i < data.length; i+=4 ) {
    Rojo = data[i];
    Verde = data[i+1];
    Azul = data[i+2];

      data[i] = 255 - Rojo;
      data[i+1] = 255 - Verde;
      data[i+2] = 255 - Azul;
  }
  ctx.putImageData( imgData, 0, 0 );
}
document.getElementById('RGB').style.display = 'none';

// BOTONES
botonColor.onclick = () => {
  ctx.drawImage(img, 0,0);
  R.value = 255;
  V.value = 255;
  A.value = 255;
  RGB();
  document.getElementById('RGB').style.display = 'block';
};

botonGris.onclick = () => {
  Grises();
  document.getElementById('RGB').style.display = 'none';
};

botonNegativo.onclick = () => {
  negativo();
  document.getElementById('RGB').style.display = 'none';
};

botonGirar.onclick=()=>{
    console.log("girar");
    img.onload();
    ctx.translate(0,canvas.height);
    ctx.scale(1,-1);
    ctx.drawImage(img, 0,0);
  };

botonGranulado.onclick = () => {
    var ruid = 1;
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    for (var i = 0; i < data.length; i+=4) {
        ruid = Math.floor(Math.random() * (100 + 100 + 10) - 150)
        data[i] += ruid;
        data[i+1] += ruid;
        data[i+2] += ruid;
    }
    ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");