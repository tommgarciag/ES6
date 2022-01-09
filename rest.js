// utiliza el parámetro rest con parámetros de función

// con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
};

console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments. 

// el parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.

// extra https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters

// Ej. Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma

const sum = (...args) => args.reduce((a, b) => a + b, 0);

console.log(sum(2,4,4,10,10));

