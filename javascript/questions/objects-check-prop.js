const monster = {
  name: 'Caremonda',
  life: undefined,
  power: 100,
  fly: function(){ return '🚀'}
}

// ¿Cómo puedes saber si una propiedad
// está definida en un objeto?
console.log(monster.name !== undefined);
console.log(monster.life !== undefined);
console.log(monster.hasOwnProperty('life'));
console.log(monster.hasOwnProperty('fly'));

// ¿Cómo verificar alguna propiedad del prototype?
console.log(monster.hasOwnProperty('toString'));
console.log('toString' in monster);







