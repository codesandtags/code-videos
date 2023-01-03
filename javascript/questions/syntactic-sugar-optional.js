// Optional Chaining
const monster = {
  name: 'Cocoman',
  company: {
    website: 'codesandtags.io'
  }
}

console.log(monster?.company?.website ?? 'monsters.io');