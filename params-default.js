// establece parámetros por defecto para tus funciones

// para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.


const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

// el parámetro por defecto entra en juego cuando el argumento no es especificado (es indefinido)

// se puede agregar valores por defecto para tantos parámetros como desees

// Ej. Modifica la función increment agregando parámetros por defecto para que sume 1 a number si value no se especifica.

const increment = (number, value = 1) => number + value;

console.log(increment(2,2));
console.log(increment(2));