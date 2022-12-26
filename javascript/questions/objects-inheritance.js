const monster = {
  name: 'Caremonda',
  life: undefined,
  power: 100,
  fly: function(){ return '🚀'}
};

const mob = {
  __proto__: monster,
  fly() {
    return '🪰'
  }
}

console.log(mob.name);
console.log(mob.fly());

let total = 0;
for (let key in mob) {
  console.log(key);
  total++;
}

console.log(total);