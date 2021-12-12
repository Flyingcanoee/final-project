export function getCaughtPokemons() { //возвращает пойманных покемонов
  let caughtPokemonsStorage = JSON.parse(localStorage.getItem('myKey'));
  if(!caughtPokemonsStorage){
    caughtPokemonsStorage = [];
  }
  return caughtPokemonsStorage;
}



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

export function releasePokemon(pokemonId) {
  let pokemons = getCaughtPokemons(); 
  let foundPokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
  if(foundPokemon){
    let newPokemons = pokemons.filter((pokemon => pokemon.id !== pokemonId)); 
    let serialObj = JSON.stringify(newPokemons);
    localStorage.setItem('myKey', serialObj);
  }
}