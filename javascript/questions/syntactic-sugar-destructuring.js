// Destructuring: Arrays
const [first, second, others] = [1,2,3,4,5,6];
console.log({
  first,
  second,
  others
});

// Destructuring: Objects
const monster = {
  nickname: 'Caremonda',
  age: 34,
  power: 100
}
const {nickname, power: elPoder, life='50', ...andRest} = monster;
console.log({
  nickname, 
  elPoder,
  life,
  andRest
});

function printNickname({nickname: alias}) {
  console.log(`You are [${alias}]`)
}
printNickname(monster);