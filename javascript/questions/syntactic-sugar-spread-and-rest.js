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