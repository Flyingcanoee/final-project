import React, { useState, useEffect } from 'react';
import './PokemonInfo.scss';
import { useParams } from 'react-router-dom';
import { getCaughtPokemons } from '../../api/localStorage';
import { getPokemonById, getPokemonImage } from '../../api/pokeApi';
import Spinner from 'react-bootstrap/Spinner';

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
          <div className="pokemon-info__white-stripe"></div>
          <div className="pokemon-info__data">
            <img
              className="pokemon-info__image"
              src={getPokemonImage(pokemonId)}
              alt="picachu"
            />
            <div className="pokemon-info__resume">
              <h1 className="pokemon-info__name">
                {pokemonInfo.name} <span className="pokemon-info__id">#{pokemonId}</span>
              </h1>

              <div className="pokemon-info__characteristics">
                <div className="pokemon-info__keys">
                  <p className="pokemon-info__info-name">Abilities:</p>
                  <p className="pokemon-info__info-name">Types: </p>
                  <p className="pokemon-info__info-name">Weight:</p>
                  <p className="pokemon-info__info-name">Status:</p>
                  {pokemonInfo.status === 'caught' ? (
                    <p className="pokemon-info__info-name">Date:</p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="pokemon-info__values">
                  <p>{pokemonInfo.abilities}</p>
                  <p>{pokemonInfo.types}</p>
                  <p>{pokemonInfo.weight}</p>
                  <p>{pokemonInfo.status} </p>
                  {pokemonInfo.status === 'caught' ? (
                    <>
                      {pokemonInfo.dayDate} <br /> <br />
                      {pokemonInfo.timeDate}
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-container">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
export default PokemonInfo;
