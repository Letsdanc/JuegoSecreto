

let peso = prompt('Introduzca el peso en kilogramos');
let altura = prompt('Introduzca la altura');

var Num = 6;
var dolar1 = 7;
var altura1 = 3;
var anchura = 4;
var PI = 3.14;
var Radio = 4;


function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);



function dolar(dolar1 = 4){
  let ValorenReal = dolar1 * 4.80;
  console.log(`El valor de ${dolar1} en reales brasileños, es de ${ValorenReal}.`);
}

function Rectangulo(altura1, anchura){
    let = Area = altura * anchura;
    let = Perimetro = 2 * (altura + anchura);
    console.log(`El area del rectangulo sera igual a ${Area}, y el perimetro sera ${Perimetro}.`);
}

function radiodeNums(PI, Radio){
    let = Area1 = PI * (Radio * Radio);
    let = diametro = Radio * 2;
    let = Perimetro2 = PI * diametro;

    console.log(`El area del circulo sera igual a ${Area1}, mientras que el perimetro sera equivalente a ${Perimetro2}.`);
}

function mostrarTablaDeMultiplicar(num) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }

let num = 7;
mostrarTablaDeMultiplicar(numero);