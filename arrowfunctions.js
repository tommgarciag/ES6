// uso de funciones flecha para escribir funciones anónimas de manera breve

// nn JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

// Para lograr esto, por lo general se usa la siguiente sintaxis:

/* const myFunc = function() {
  const myVar = "value";
  return myVar;
} */

// ES6 nos proporciona el suger sintax, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha:

/* const myFunc = () => {
  const myVar = "value";
  return myVar;
} */

// Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave return, así como los corchetes que rodean el código. Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:

const myFunc = () => "value"; // "value"

// Ej. Reescribe la función asignada a la variable magic, la cual devuelve una new Date(), utilizando la sintaxis de función flecha

const magic = () => new Date();

console.log(magic());