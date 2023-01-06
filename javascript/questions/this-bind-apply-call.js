// ¿Cuál es la diferencia de bind, apply y call 
//  en JavaScript?

function sum(a, b) {
  console.log(this);
  return a + b;
}

const nums = {
  a: 4,
  b: 8
}

sum(10, 20);

const anotherSum = sum.bind(nums);