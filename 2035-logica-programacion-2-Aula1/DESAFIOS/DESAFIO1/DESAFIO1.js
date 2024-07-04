

let brasilero;


let titulo1 = document.querySelector('h1');
titulo1.innerHTML = 'Hora del desafio';

function Botoncli1() {
    alert('El boton fue clickeado');
}

function Brasil(){
    brasilero = prompt('Nombre una ciudad de brasil');   
    alert(`Estuve en ${brasilero} y me acorde de ti`);
}

function Love(){
    alert('Yo amo JS');
}


function sum(){
    num1 = prompt('Ingrese el numero');
    num2 = prompt('Ingrese el segundo numero');

    resultado = num1 - num2;

    alert(`El resultado es ${resultado}`);

}