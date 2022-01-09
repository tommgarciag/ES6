// muta un array declarado con const

// es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando const siguen siendo mutables. Usar la declaración const solo previene la reasignación del identificador de una variable.

/* const s = [5, 6, 7];
// s = [1, 2, 3]; // error
s[2] = 45;
console.log(s); // [5,6,45]
 */
// como en todos los arreglos, los elementos del arreglo en s son mutables, pero debido a que se utilizó const, no puedes utilizar el identificador de la variable s para apuntar a un arreglo diferente usando el operador de asignación.

// Ej. Un arreglo es declarado como const s = [5, 7, 2]. Cambia el arreglo a [2, 5, 7] utilizando varias asignaciones de elementos.

const s = [5, 7, 2];
function editInPlace() {
  // Usar s = [2, 5, 7] sería inválido
  s[0]=2;
  s[1]=5;
  s[2]=7;
  
}
editInPlace();
console.log(s);