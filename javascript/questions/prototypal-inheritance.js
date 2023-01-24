// ¿Qué es herencia prototipada en JavaScript?

const person = {
  isHuman: true,
}

const child = Object.create(person);

console.log(person);
console.log(person.isHuman);

console.log(child);
console.log(child.isHuman);


function Animal(name) {
  this.name = name;
  this.home = 'La tierra 🌎';
}

let misterio = new Animal('misterio');

Object.getPrototypeOf(misterio);

function LandMammal(legs) {
  this.legs = legs;
}


class Animal {
  constructor(name) {
    this.name = name;
    this.home = 'La tierra 🌎';
  }
}

class LandMammal extends Animal {}

class Dog extends LandMammal {
  constructor(name, legs) {
    super(name);

    this.legs = legs;
  }
}

let coco = new Dog('coco', 4);
coco

coco instanceof Dog
coco instanceof Animal
coco instanceof Object
coco instanceof Array 

Animal.prototype.speak = function () {
  console.log(`Hi I am ${this.name}!`);
}

