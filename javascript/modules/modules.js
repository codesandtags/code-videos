import { Person } from './Person.js';
const edwin = new Person('Edwin');

edwin.sayHello();

const showMessages = true;

if (showMessages) {
  const { giveMeLove, tellMeSomething } = await import('./helper.js') ;
  giveMeLove();
  tellMeSomething();
}

(() => {
  console.log('Soy una Immediatly Invoke Function Expression = IIFE')
})();