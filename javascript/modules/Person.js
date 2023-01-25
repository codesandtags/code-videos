export class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log(`Hi I am ${this.name}`);
  }
}