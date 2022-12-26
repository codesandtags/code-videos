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
console.log(monster.hasOwnProperty('toString'));
console.log('toString' in monster);

// Pregunta superada 👏 👏 👏 🎉 🎊








// The in operator returns true if the specified property is in the specified object or its prototype chain.

