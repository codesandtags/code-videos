const monster = {
  name: 'Caremonda',
  life: undefined,
  power: 100,
  fly: function(){ return '🚀'}
}

console.log(monster.toString());
console.log(monster.valueOf());

console.log(monster + 1);
monster.valueOf = () => {
  return 99;
}
console.log(monster + 1);