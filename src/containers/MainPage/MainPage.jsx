import React from 'react';

import picachu from '../picachu.png';

import CardConmponent from '../../components/Card/CardComponent';

function MainPage() {
  let [pokemons, setPokemons] = React.useState([
    { name: 'pikachy', img: picachu, id: 1, caught: false },
    { name: 'wjnwk', img: picachu, id: 2, caught: false },
    { name: 'kjnwq', img: picachu, id: 3, caught: false },
  ]);
  function onClickPokemon(id, event) {
    event.preventDefault();
    event.stopPropagation();
    // event.nativeEvent.stopImmediatePropagation();
    let newPokemons = pokemons.map((pokemon) => {
      if (pokemon.id === id) {
        pokemon.caught = true;
      }
      return pokemon;
    });
    setPokemons(newPokemons);
  }
  return (
    <div className="container">
      <h1 className="main-header">Pokédex</h1>
      <div className="pokemon-container">
        <CardConmponent pokemons={pokemons} onClickPokemon={onClickPokemon} />
      </div>
    </div>
  );
}

export default MainPage;
