// ¿Qué es un callback en JavaScript?

// Literales
function sum(a, b) {
  console.log(a + b);
}

sum(3, 2);

// ¿Qué es un callback en JavaScript?

// Objetos - Referencia
const person = {
  name: 'Cocoman',
  age: 34
};

function sayHello(person) {
  console.log(`👋 Hola ${person.name}!`);
  person.name = 'Caremonda';
  person.age = 34 + 65;
}

sayHello(person);

console.log(person);

// ¿Qué es un callback en JavaScript?

// Funciones - Callbacks
function openTheSecret(secret) {
  console.log('Let us open a secret...');

  // ⬇️ This is a callback
  secret();
}

function secret() {
  console.log('😏 I am a callback');
}

openTheSecret(secret);
