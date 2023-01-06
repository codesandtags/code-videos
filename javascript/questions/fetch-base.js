// ¿Cómo podrías reescribir el siguiente request
// usando la forma async/await?

function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  fetch(url)
    .then(response => response.json())
    .then(pokemones => console.log('👾 Pokemones:', pokemones))
    .catch(error => console.error('🔥 Uppsss: ' + error))
    .finally(() => console.log(' Al fin 🧑‍💻 '));
}
getPokemon();


async function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  try {
    const response = await fetch(url);
    const pokemones = await response.json();
    console.log('👾 Pokemones:', pokemones);
  } catch (error) {
    console.error('Uppsss ' + error);
  } finally {
    console.log(' Done 💻 ')
  }
}
await getPokemon();



// ¿Cómo podrías reescribir el siguiente request
// usando la forma async/await?

function getPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
    
  fetch(url)
  .then(response => response.json())
  .then(poke => console.log('👾 Pokemones:', poke))
  .catch(err => console.error('🔥 Uppsss:' + err))
  .finally(() => console.log('Al fin 🧑‍💻'));
}
getPokemon();