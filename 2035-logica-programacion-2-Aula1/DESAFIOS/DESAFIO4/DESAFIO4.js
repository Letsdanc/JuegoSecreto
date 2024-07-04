// Lista vacía
let listaGenerica = [];

// Lista de lenguajes de programación
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Lista de números para pruebas
let promedio = [12, 12, 12];
let numeros1 = [234, 312, 13231, 33, 4, 5];
let numeros2 = [12, 12, 5, 3432, 6];
let lista1 = [34, 5, 78];
let lista2 = [90, 87, 56];
let lista3 = [23, 45, 67];

// Función para mostrar los lenguajes de programación
function mostrarLenguajes() {
    console.log('Lenguajes de programación:', lenguajesDeProgramacion);
}

// Función para mostrar los lenguajes en orden inverso
function mostrarLenguajesInverso() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

// Función para calcular el promedio de una lista
function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

// Función para encontrar el número mayor y menor en una lista
function encontrarMayorMenor(lista) {
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

// Función para calcular la suma de todos los elementos en una lista
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

// Función para sumar dos listas elemento por elemento
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error('Las listas deben tener el mismo tamaño');
    }
    let nuevaLista = [];
    for (let i = 0; i < lista1.length; i++) {
        nuevaLista.push(lista1[i] + lista2[i]);
    }
    return nuevaLista;
}

// Función para devolver una lista con el cuadrado de cada número
function cuadradoDeElementos(lista) {
    return lista.map(num => num * num);
}

// Pruebas
mostrarLenguajes();
mostrarLenguajesInverso();

let media = calcularPromedio(promedio);
console.log('Promedio:', media);

encontrarMayorMenor(numeros1);

let suma = calcularSuma(numeros2);
console.log('Suma:', suma);

let sumaListas = sumarListas(lista1, lista2);
console.log('Suma de listas:', sumaListas);

let cuadrados = cuadradoDeElementos(lista3);
console.log('Cuadrado de los elementos:', cuadrados);
