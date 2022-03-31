
var console;

console.log("Ejecutando JS...");

const gui ={
  display:document.getElementById("display"),
  clear:document.getElementById("clear"),
  delet:document.getElementById("delete"),
  equal:document.getElementById("equal"),
};



let digitos = document.getElementsByClassName("numero");
console.log (digitos);
let operacion = document.getElementsByClassName("simbolos");

const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
};

let op = ESTADO.INIT;

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev) => {
    number(ev.target.value);
  };
}

for (i=0; i<operacion.length; i++){
  operacion[i].onclick = (ev) => {
    if(op == ESTADO.OP1){
           display.innerHTML += ev.target.value;
           op = ESTADO.OPERATION;
         }
      };
}

function number(num)
{
  if (op == ESTADO.INIT) {
    display.innerHTML = num;
    op = ESTADO.OP1;
  }else if (op == ESTADO.OP1){
    display.innerHTML += num;
  }else if (op == ESTADO.OPERATION) {
    display.innerHTML += num;
    op = ESTADO.OP2;
  }else if (op == ESTADO.OP2){
    display.innerHTML += num;
  }
}

//Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
    console.log("clear");
    op = ESTADO.INIT;
};

//Borrar último digito
delet.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
};

equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
 };



