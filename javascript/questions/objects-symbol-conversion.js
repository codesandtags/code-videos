const monster = {
  name: 'Caremonda',
  life: undefined,
  power: 100,
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 50;
    } else if (hint === 'string') {
      return 'Hola k hace'
    }
    return 10; // default
  }
}
monster.valueOf = () => {
  return 20
}

console.log(monster);
console.log(Number(monster));
console.log(String(monster));
console.log(10 + monster);
console.log(10 - monster);

