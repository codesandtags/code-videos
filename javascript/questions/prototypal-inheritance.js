// ¿Qué es herencia prototipada en JavaScript?

const person = {
  isHuman: true,
}

const child = Object.create(person);

console.log(person);
console.log(person.isHuman);

console.log(child);
console.log(child.isHuman);
