export function getPokemonImage(pokemonId){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
}

export function getPokemonById(pokemonId){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(function (response) {
      return response.json();
    });
}

export function getAllPokemons(currentOffset, pokemonsOnPage){
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${pokemonsOnPage}`
  )
    .then(function (response) {
      return response.json();
    });
}