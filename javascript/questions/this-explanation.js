// ¿Cómo funciona "this" en JavaScript?
// Realmente es uno de los temas más confusos

// ALERT: RUNTIME = Tiempo ejecución

// 1. Top-Level se refiere al "global scope" = window
 console.log('1.', this);

// 2. En una función standard se refiere al 
// "global scope" = window
function hello() {
  console.log('2.', this);
}
hello();

// 3. En una función standard con strict mode
// Su valor es undefined
function bye() {
  'use strict';
  console.log('3.', this);
}
bye();

// 4. En el método de un objeto se refiere 
// al propio objeto
const monster = {
  name: 'CareMonda',
  run() {
    console.log('4.', this);
  }
}
monster.run();

// 5. En el constructor de un objeto, se refiere
// al objeto que se está construyendo
class Pokemon {
  constructor(name) {
    this.name = name;
    console.log('5. ', this);
  }
}
new Pokemon('Charmander');

// 6. En un Event Listener se refiere al elemento
// que dispara el evento
const button = document.querySelector('button');
button.addEventListener('click', function () {
  console.log('6.', this);
});

// 7. En un arrow function no tiene un scope, sino
// que hace referencia al contexto donde está
// siendo llamado
button.addEventListener('click', () => {
  console.log('7.', this);
});