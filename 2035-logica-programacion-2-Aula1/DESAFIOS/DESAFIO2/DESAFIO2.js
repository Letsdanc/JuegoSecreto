

let Nombre = prompt('ingrese su nombre');
let Saludo1 = Saludo();
let Saludo3 = Saludo2();
let resultado1 = numero1();
let resultado2 = numero2();
let resultado4 = numero4();

let d = prompt('Ingrese un valor');
let e = prompt('Ingrese el valor 2');

function Saludo(){
  console.log('Hola mundo!');
}

function Saludo2(){
  console.log(`Hola ${Nombre}`);
}

function numero1(numero1 = 1){
    if (numero1 < 1){
        numero1++;
        console.log(numero1);
        return;
    }
}

function numero2(a = 112, b = 32, c = 4){
    resultado = a + b + c / 3;
    console.log(resultado);

}

function numero3(){
       if(d > e){
        console.log(d);
       } else {
        console.log(e);
       }
}


function numero4(h = 4){
    hh = h * h;
    console.log(hh);
}