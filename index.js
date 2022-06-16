// Leer y mostrar un texto
// prompt('Ingrese su edad: '); // con HTML

// Leer datos con Node
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingrese su edad: ', function (age) {
  // age = parseInt(age);
  // age = parseFloat(age);
  // age = Boolean(age);

  age = Number(age);

  if (!age) {
    console.log('El valor ingresado es incorrecto');
    rl.close();
    return;
  }

  console.log(`Su edad es: ${age}`);

  if (age >= 18) {
    console.log('Eres mayor de edad');
  } else {
    console.log('Eres menor de edad');
  }

  console.log('Hola mundo');

  rl.close();
});
