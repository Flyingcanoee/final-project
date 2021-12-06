import React from 'react';

import picachu from '../picachu.png';

import CardConmponent from '../../components/Card/CardComponent';

function CaughtPokemons() {
  let [pokemons, setPokemons] = React.useState([
    { name: 'pikachy', img: picachu, id: 1, catched: false },
    { name: 'wjnwk', img: picachu, id: 2, catched: false },
    { name: 'kjnwq', img: picachu, id: 3, catched: false },
  ]);
  return (
    <div className="container">
      <h1 className="main-header">Caught Pokemons</h1>
      <div className="pokemon-container">
        <CardConmponent pokemons={pokemons} />
      </div>
    </div>
  );
}

export default CaughtPokemons;
