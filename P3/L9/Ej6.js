console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//audios
const audio = new Audio('juego.mp3');
const gameover = new Audio('gameover.mp3');
const ganar = new Audio('ganar.mp3');

//TAMAÑO CANVAS
canvas.width = 650
canvas.height = 900;

//Tamaño bola
let bolita = 8;

//Coordenadas de la bola
let x = canvas.width/2;
let y = canvas.height-30;

//Coordenadas de la raqueta
let w = 100;
let z = 800;


//Velocidad bola
let velx = 1;
let vely = -3;

//Vidas totales
var vidas = 4;

//Puntuacion
var score = 0;

//Tamaño raqueta
let tamañoRaqueta = 15;
let BaseRaqueta = 95;

//Margenes ladrillos respecto escenario
var margTop = 90;
var margIzq = 7;

//Variables mover raqueta
var Derecha = false;
var Izquierda = false;
var draw = false;

//Dibujamos ladrillos
var filas = 6;
var columnas = 9;
var ancho = 60;
var alto = 20;
var huecoLadrillos = 12;

var ladrillos = [];
for(c=0; c<columnas; c++) {
    ladrillos[c] = [];
    for(f=0; f<filas; f++) {
        ladrillos[c][f] = { x: 0, y: 0, estado: 1 };
    }
}

function ladrillo() {
    for(c=0; c<columnas; c++) {
        for(f=0; f<filas; f++) {
            if(ladrillos[c][f].estado == 1) {
                var ladrilloX = (c*(ancho+huecoLadrillos))+margIzq;
                var ladrilloY = (f*(alto+huecoLadrillos))+margTop;
                ladrillos[c][f].x = ladrilloX;
                ladrillos[c][f].y = ladrilloY + 30;
                ctx.beginPath();
                ctx.rect(ladrilloX, ladrilloY + 30, ancho, alto);
                //Color ladrillos
                ctx.fillStyle = "purple";
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2.5;
                ctx.fill();
                ctx.stroke()
                ctx.closePath();
            }
        }
    }
}

//Pintar bola
window.onkeydown = (e) => {
    if (e.key == ' ') {
        draw = true;
    }
}

//Teclas flechas derecha e izquierda
document.addEventListener("keydown", rebote, false);
document.addEventListener("keyup", despuesRebote, false);

function rebote (e) { 
    if (e.keyCode == 39) {
        Derecha = true;
    }
    else if (e.keyCode == 37) {
        Izquierda = true;
    }
}

function despuesRebote (e) { 
    if (e.keyCode == 39) {
        Derecha = false;
    }
    else if (e.keyCode == 37) {
        Izquierda = false;
    }
}

function bola() {
    ctx.beginPath();    
    ctx.arc(x, y, bolita, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke()
    ctx.closePath();
}

function raqueta () {
    ctx.beginPath();
    ctx.rect(w, z, BaseRaqueta, tamañoRaqueta);
    ctx.fillStyle = "black";
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke()
    ctx.closePath();
}


function colision() {
    for(c=0; c<columnas; c++) {
        for(f=0; f<filas; f++) {
            var b = ladrillos[c][f];
            if(b.estado == 1) {
                if(x > b.x && x < b.x+ancho && y > b.y && y < b.y+alto) {
                    vely = -vely;
                    b.estado = 0;
                    score++;
                    if(score == filas*columnas) {
                        ganar.play();
                        alert("¡¡HAS GANADO!!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
function puntos() {
    ctx.font = "30px fuente2";
    ctx.fillStyle = "black";
    ctx.fillText("Puntos: "+score, 40, 70);

}
function vida() {
    ctx.font = "30px fuente2";
    ctx.fillStyle = "black";
    ctx.fillText("Vidas: "+vidas, canvas.width-125, 70);
}


function dibuja (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ladrillo();
    bola();
    raqueta();
    puntos();
    vida();
    colision();


    if (x >= (canvas.width - bolita) || x <= bolita) {
        velx = -velx;
        audio.play();
        audio.volume = 0.2;
    }
    if (y <= bolita) {
         vely = -vely;
    }
    else if (y >= (z - bolita)){
        if(x > w && x < w + BaseRaqueta) {
            if(y= y- tamañoRaqueta){
                vely = -vely;

                
            }
        }
        else {
            vidas--;
            
            draw = false;
            if(!vidas) {
                gameover.play();
                alert("¡¡GAME-OVER!! :(")
                document.location.reload();
                stopAudio();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                velx = 1;
                vely = -3;
                w = (canvas.width-BaseRaqueta)/2;
            }
        }
    }

    if (Derecha && w < canvas.width-BaseRaqueta) {
        w = w + 5;
    }
    else if (Izquierda && w > 0) {
        w = w - 5;
    }

    if (draw == true){
        x = x + velx;
        y = y + vely;
    }
}

setInterval(dibuja, 5)