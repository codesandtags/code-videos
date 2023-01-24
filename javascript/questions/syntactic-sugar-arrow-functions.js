//🤔 ¿Qué es "Syntactic Sugar" 🍩 en JavaScript?

// Antes
const numbers = [1,2,3,4];
const doubled = numbers.map(function (number) {
  return number * 2;
});
console.log(doubled);


// Después Syntactic Sugar 🍩
// Arrow Function
const doubledWithSugar = numbers
  .map( (number) => number * 2);
console.log(doubledWithSugar);


// Arrow Function: Before
const numbers = [1,2,3,4];
const doubled = numbers.map(function (number) {
  return number * 2;
});

function double (number) {
  return number * 2;
}

// Arrow Function: After
// Replace short Anonymous Functions
const doubledWithSugar = numbers
  .map( (number) => number * 2);


// ⚠️ Arrow Functions do not have access to
// - 'this' binding  
// - Cannot be used as constructors or generators
