let character = '';
let defaultCharacter = 'Goku';
let winner;
// ¿Cómo puedes simplificar la siguiente operación?
if (character != null || character != undefined) {
  winner = character;
} else {
  winner = defaultCharacter;
}
console.log(`👋 Hello 0: [${winner}]`);

// Opción 1 : Ternary Operator
winner = character != null || character != undefined 
  ? character 
  : 'Goku';
console.log(`👋 Hello 1: [${winner}]`);

// Opcion 2 : OR Operator
winner = character || defaultCharacter;
console.log(`👋 Hello 2: [${winner}]`);

// Opción 3: Nullish Coalescing Operator
winner = character ?? 'Goku';
console.log(`👋 Hello 3: [${winner}]`);
