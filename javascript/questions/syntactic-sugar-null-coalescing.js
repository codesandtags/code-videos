// Null Coalescing
const value = 'Codesandtags';

// Before
let defaultValue = value != null ? value : 'Goku';
console.log(`👋 Hello  ${defaultValue}`);

// After
defaultValue = value ?? 'Goku';
console.log(`👋 Hello  ${defaultValue}`);


// Optional Chaining
const monster = {
  name: 'Cocoman',
  company: {
    website: 'codesandtags.io'
  }
}

console.log(monster?.company?.website ?? 'monsters.io');