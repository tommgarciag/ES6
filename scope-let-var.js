// compara el alcance de las variables var y let

// var declarada globalmente

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0,1,2]
console.log(i); // 3

/* var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 3 */

// printNumTwo() imprime 3 y no 2. Esto es porque el valor asignado a i fue actualizado y la función printNumTwo() devuelve el global de i y no el valor que tenía i cuando la función fue creada en el bucle for. La palabra clave let no sigue este comportamiento:

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 2

// Ej. Corrige el código para que la variable i, declarada en la sentencia if sea una variable separada de la variable i, declarada en la primera línea de la función. Asegúrate de no utilizar la palabra clave var en ninguna parte de tu código.

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  checkScope();