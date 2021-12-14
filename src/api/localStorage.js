/**
 * Возвращает массив пойманных покемонов
 */
export function getCaughtPokemons() { //
  let caughtPokemonsStorage = JSON.parse(localStorage.getItem('myKey'));
  if(!caughtPokemonsStorage){
    caughtPokemonsStorage = [];
  }
  return caughtPokemonsStorage;
}

/**
 * Ловит покемона
 * @param pokemonId id покемона
 * @param dayDate дата поимки покемона(день)
 * @param timeDate дата поимки покемона(время)
 * @param name имя покемона
 */
export function catchPokemon(pokemonId, dayDate, timeDate, name) {
  let pokemons = getCaughtPokemons(); 
  let foundPokemon = pokemons.find(pokemon => pokemon.id === pokemonId)
  if(!foundPokemon){
    let caughtPokemon = {id: pokemonId, dayDate: dayDate, timeDate: timeDate, name: name}
    pokemons.push(caughtPokemon); 
    let serialObj = JSON.stringify(pokemons);
    localStorage.setItem('myKey', serialObj);
  }
} 

/**
 * Освобождает покемона
 * @param pokemonId id покемона
 */
export function releasePokemon(pokemonId) {
  let pokemons = getCaughtPokemons(); 
  let foundPokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
  if(foundPokemon){
    let newPokemons = pokemons.filter((pokemon => pokemon.id !== pokemonId)); 
    let serialObj = JSON.stringify(newPokemons);
    localStorage.setItem('myKey', serialObj);
  }
}