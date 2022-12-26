const objA = {};
const objB = new Object();

console.log({} === {});
console.log(objA === objB);
console.log(objA.prototype === objB.prototype);

function Person(name) {
  this.name = name;
}

const personA = new Person('Edwin');
const personB = Person('Nala');

console.log(personA.name);
console.log(personB);
