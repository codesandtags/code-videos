// ¿Cuál crees que es el resultado de 
// las siguientes instrucciones?

setTimeout(() => console.log('Uno'), 1000);

console.log('Dos');

setTimeout(() => console.log('Tres'), 0);

Promise
  .resolve('Cuatro')
  .then((value) => console.log(value))

console.log('Cinco');


