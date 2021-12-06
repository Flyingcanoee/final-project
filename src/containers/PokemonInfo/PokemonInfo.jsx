import React from 'react';
import './PokemonInfo.scss';
import picachu from '../picachu.png';
import { useParams } from 'react-router-dom';

function PokemonInfo(pokemon) {
  const params = useParams();
  const pokemonId = params.id;
  console.log(pokemonId);
  return (
    <div className="pokemon-page-container">
      <h1 className="pokemon-name">Picachu{pokemon.name}</h1>
      <div className="pokemon-data">
        <img className="pokemon-image" src={picachu} alt="picachu" />
        <div className="pokemon-info">
          <p>Abilities: eat</p>
          <p>Types: eat</p>
          <p>Weight: eat</p>
          <p>Status: caught</p>
          <p>Date: eat</p>
          <p>Id: caught</p>
        </div>
      </div>
    </div>
  );
}
export default PokemonInfo;
