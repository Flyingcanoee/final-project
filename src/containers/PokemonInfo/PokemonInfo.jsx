import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCaughtPokemons } from '../../api/localStorage';
import { getPokemonById } from '../../api/pokeApi';
import Spinner from 'react-bootstrap/Spinner';
import PokemonInfoCard from '../../components/PokemonInfoCard/PokemonInfoCard.jsx';

function PokemonInfo() {
  const params = useParams();
  const pokemonId = params.id;

  let [pokemonInfo, setPokemonInfo] = useState(null);

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
        } else {
          newPokemonInfo.status = 'free';
        }
        setPokemonInfo(newPokemonInfo);
        return newPokemonInfo;
      })
      .catch(function (error) {
        alert("Couldn't load pokemons.");
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon-info">
      {pokemonInfo ? (
        <PokemonInfoCard
          id={pokemonId}
          status={pokemonInfo.status}
          name={pokemonInfo.name}
          abilities={pokemonInfo.abilities}
          weight={pokemonInfo.weight}
          dayDate={pokemonInfo.dayDate}
          timeDate={pokemonInfo.timeDate}
          types={pokemonInfo.types}
        />
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
export default PokemonInfo;
