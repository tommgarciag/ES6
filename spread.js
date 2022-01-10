// utiliza el operador de propagación (spread operator) para evaluar los arreglos en el lugar

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// spread operator nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos

// el siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:

/* var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

console.log(maximus); // 89 */

// tuvimos que usar Math.max.apply(null, arr) porque Math.max(arr) devuelve NaN. Math.max() espera argumentos separados por comas, pero no un arreglo

// el operador spread hace que esta sintaxis sea más fácil de leer y mantener

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

console.log(maximus); // 89

// el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:

// const spreaded = ...arr;

// Ej. Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']