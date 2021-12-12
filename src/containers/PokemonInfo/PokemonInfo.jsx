import React, { useState, useEffect } from 'react';
import './PokemonInfo.scss';
import { useParams } from 'react-router-dom';
import { getCaughtPokemons } from '../../api/localStorage';
import { getPokemonById, getPokemonImage } from '../../api/pokeApi';

function PokemonInfo() {
  let [pokemonInfo, setPokemonInfo] = useState(null);

  const params = useParams();
  const pokemonId = params.id;

  useEffect(() => {
    getPokemonById(pokemonId)
      .then(function (pokemonInformation) {
        let abilitiesArr = pokemonInformation.abilities;
        let pokemonAbilities = '';
        for (let i = 0; i < abilitiesArr.length; i++) {
          pokemonAbilities += abilitiesArr[i].ability.name + ' ';
        }
        let typesArr = pokemonInformation.types;
        let pokemonTypes = '';
        for (let i = 0; i < typesArr.length; i++) {
          pokemonTypes += typesArr[i].type.name + ' ';
        }

        let newPokemonInfo = {
          name: pokemonInformation.name,
          types: pokemonTypes,
          weight: pokemonInformation.weight,
          abilities: pokemonAbilities,
        };

        let caughtPokemons = getCaughtPokemons();
        let foundPokemon = caughtPokemons.find((pokemon) => pokemon.id === pokemonId);
        if (foundPokemon) {
          newPokemonInfo.status = 'caught';
          newPokemonInfo.dayDate = foundPokemon.dayDate;
          newPokemonInfo.timeDate = foundPokemon.timeDate;
          console.log(newPokemonInfo.timeDate);
        } else {
          newPokemonInfo.status = 'free';
        }
        setPokemonInfo(newPokemonInfo);
        console.log(newPokemonInfo);
        return newPokemonInfo;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon-info">
      {pokemonInfo ? (
        <>
          <h1 className="pokemon-info__name">{pokemonInfo.name}</h1>
          <div className="pokemon-info__data">
            <img
              className="pokemon-info__image"
              src={getPokemonImage(pokemonId)}
              alt="picachu"
            />
            <div className="pokemon-info__resume">
              <p>Abilities: {pokemonInfo.abilities}</p>
              <p>Types: {pokemonInfo.types}</p>
              <p>Weight: {pokemonInfo.weight}</p>
              <p>Status: {pokemonInfo.status}</p>
              <p>
                Date: {pokemonInfo.dayDate} <br /> {pokemonInfo.timeDate}
              </p>
              <p>Id: {pokemonId}</p>
            </div>
          </div>
        </>
      ) : (
        'Loading'
      )}
    </div>
  );
}
export default PokemonInfo;
