const id1 = Symbol('id');
const id2 = Symbol('id');
const name1 = 'name';
const name2 = 'name';

const dragon = {
  [name1]: 'Dragon',
  [name2]: 'Ball',
  [id1]: '555',
  [id2]: '777'
};

console.log(dragon);