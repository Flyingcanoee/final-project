import React, { useState, useEffect } from 'react';
import { getCaughtPokemons, releasePokemon } from '../../api/localStorage';
import { getPokemonImage } from '../../api/pokeApi';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../../components/Header/Header.jsx';

function CaughtPokemons() {
  let [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    let caughtPokemons = getCaughtPokemons();
    for (let i = 0; i < caughtPokemons.length; i++) {
      caughtPokemons[i].img = getPokemonImage(caughtPokemons[i].id);
      caughtPokemons[i].caught = true;
      delete caughtPokemons[i].dayDate;
      delete caughtPokemons[i].timeDate;
    }
    setPokemons(caughtPokemons);
  }, []);

  function onClickPokemon(id, event) {
    event.preventDefault();
    event.stopPropagation();

    const newPokemons = pokemons.filter(function (pokemon) {
      return pokemon.id !== id;
    });
    releasePokemon(id);
    setPokemons(newPokemons);
  }

  return (
    <div className="container">
      <Header>Caught Pokemons</Header>
      {pokemons ? (
        <>
          <div className="pokemon-container">
            {pokemons.map((pokemon) => (
              <PokemonCard
                pokemon={pokemon}
                onClickPokemon={onClickPokemon}
                key={pokemon.id}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}

export default CaughtPokemons;
