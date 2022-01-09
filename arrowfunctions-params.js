// funciones flecha con parametros

/* const doubler = (item) => item * 2;
doubler(4); // 8 */

// si un funcion flecha tiene un solo parametro, los parentesis que lo encierran pueden ser omitidos

const doubler = item => item * 2;
doubler(4); // 8

// es posible pasar más de un argumento a una función flecha.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // 8

// Ej. Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.

const myConcat = (arr1, arr2) =>  arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]

