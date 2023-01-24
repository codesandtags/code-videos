// Spread Operator
const numbers = [1,2,3,4,5];
const hundreds = [100, 200, 300];

function add(a, b, ...c) {
  console.log(a + b);
  console.log(c);
}

add(...numbers);

const combined = [
  0,
  ...numbers,
  8,
  ...hundreds
];
console.log(combined)



//🤔 ¿Qué es "Syntactic Sugar" 🍩 en JavaScript?

// Antes
const numbers = [1,2,3,4,5];

function myNumbers(a, b) {
  console.log(a + b);
  console.log(c);
}

// Despues Syntactic Sugar 🍩
// Operador ...Rest

function myNumbers(a, b, ...others) {
  console.log({
      a,
      b,
      others
  });
}
myNumbers(1,2,3,4,5);




add(...numbers);

const combined = [
  0,
  ...numbers,
  8,
  ...hundreds
];
console.log(combined)