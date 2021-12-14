/**
 * Получает картинку покемона
 * @param pokemonId id покемона
 */
export function getPokemonImage(pokemonId){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
}

/**
 * Получает информацию о покемоне по его id
 * @param pokemonId id покемона
 */
export function getPokemonById(pokemonId){
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then(function (response) {
      return response.json();
    });
}

/**
 * Получает всех покемонов
 * @param currentOffset сколько покемонов нужно пропустить
 * @param pokemonsOnPage сколько покемонов нужно получить
 */
export function getAllPokemons(currentOffset, pokemonsOnPage){
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=${pokemonsOnPage}`
  )
    .then(function (response) {
      return response.json();
    });
}