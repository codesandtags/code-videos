const monster = {
  name: 'Caremonda',
  life: undefined,
  power: 100,
  fly: function(){ return '🚀'}
}

Object.freeze(monster);
Object.isFrozen(monster);

monster.name = 'Churrito';
monster.age = 99;

console.log(monster);

const monsterBrother = Object.assign({}, monster);
Object.seal(monsterBrother);
monsterBrother.name = 'Churrito';
monsterBrother.age = 99;

console.log(monsterBrother);
