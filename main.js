import './css/style.css'

/* 1- */

/* let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log('a =', a);
console.log('b =', b); */

/* --------------------------------------------- */

/* 2- */

/* function cualEsElMayor (num1,num2) {
    if (num1 > num2) {
        return (`El primer valor es mayor: ${num1}`)

    }else if (num1 < num2) {
        return (`El segundo valor es mayor: ${num2}`)

    }else {
        return "Ambos números son iguales";
    }
}

const num1 = parseFloat(prompt('Introduzca el primer numero:'));
const num2 = parseFloat(prompt('Introduzca el segundo numero:'));

const resultado = cualEsElMayor(num1,num2);

console.log(resultado); */

 
/* --------------------------------------------- */

/* 3- */

/* function parOimpar(numero) {
    
    if (numero %2 == 0) {
        return `EL numero es par`;
    }else {
        return `El numero es impar`;
    }
}

const numero = parseFloat(prompt(`Introduzca un numero`));

const resultado = parOimpar(numero)

console.log(resultado);
 */

/* --------------------------------------------- */

/* 4- */

/* const dto = 0.20; 

function calcularDescuento(val1) {

    return val1 - (val1 * dto);

}

const val1 = parseFloat(prompt(`Introduzca el precio`));

const precioConDescuento = calcularDescuento(val1);

alert (`El costo con el 20% de descuento aplicado es: ` + precioConDescuento);
 */

/* --------------------------------------------- */

/* 5- */

/* const pi = 3.141592;

function calcularAreaCirculo(radio) {

    return pi * (radio**2);

}

const radio = parseFloat(prompt("Introduzca el radio que desea calcular"));

const area = calcularAreaCirculo(radio);

console.log(`El area del circulo es: ${area}`); */

/* --------------------------------------------- */

/* 6- */

/* function conversion(celsius) {

    return (celsius * 9/5) + 32;

}

const celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

const resultado = conversion(celsius);

alert(`${celsius} grados Celsius son equivalentes a ${resultado} grados fahrenheit`);

 */

/* --------------------------------------------- */

/* 7- */


/* for (let i = 1; i <= 10; i++) {
    console.log(i)
}
 */

/* --------------------------------------------- */

/* 8- */

/* let numero = 0;
let numerosIngresados = [];

while (numero >= 0) {

    numero = parseInt(prompt("Ingresa un número. Cuando quieras terminar, ingresa un número negativo):"));

    if (numero >= 0) {
        numerosIngresados.push(numero);
    }
}

console.log("Los números ingresados son:", numerosIngresados);
 */

/* --------------------------------------------- */

/* 9- */

/* const numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

if (!isNaN(numero)) {

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

} else {
    console.log("No ingresaste un número válido.");
} */

/* --------------------------------------------- */

/* 10- */

/* let sumaPares = 0;

for (let i = 2; i <= 100; i += 2) {
    sumaPares += i;
}

console.log("La suma de los números pares del 1 al 100 es:", sumaPares);
 */

/* --------------------------------------------- */

/* 11- */

/* const Persona = {
    nombre: "Jonathan",
    edad: 39,
    ciudad: "Argentina",
    
    presentarse: function() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`);
    }
  };
  
  Persona.presentarse(); */

/* --------------------------------------------- */

/* 12- */

/* const personas = [
    { nombre: "Jonathan", edad: 39, ocupacion: "Full Stack Engineer" },
    { nombre: "Nadia", edad: 37, ocupacion: "Docente" },
    { nombre: "Mia", edad: 24, ocupacion: "Contadora" },
    { nombre: "Maya", edad: 25, ocupacion: "Abogada" }
];

for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ocupación: ${persona.ocupacion}`);
} */

/* --------------------------------------------- */

/* 13- */

/* const numeros = [5, 10, 15, 20, 25];

function calcularPromedio(numeros) {
    
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    const promedio = suma / numeros.length;
    
    return promedio;
}

const promedio = calcularPromedio(numeros);

console.log(`El promedio es: ${promedio}`);

 */


























