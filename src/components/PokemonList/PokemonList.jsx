import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import {
  catchPokemon,
  getCaughtPokemons,
  releasePokemon,
} from '../../api/localStorage.js';
import { getAllPokemons } from '../../api/pokeApi';
import './PokemonList.scss';
import Spinner from 'react-bootstrap/Spinner';

export default function PokemonList() {
  let [pokemons, setPokemons] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);

  function onClickLoadMore() {
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    const caughtPokemons = getCaughtPokemons();
    const pokemonsOnPage = 20;
    const currentOffset = pokemonsOnPage * pageNumber;

    getAllPokemons(currentOffset, pokemonsOnPage)
      .then(function (pokemonInfo) {
        for (let i = 0; i < pokemonInfo.results.length; i++) {
          let pokemon = pokemonInfo.results[i];
          let pokemonUrl = pokemon.url;
          let pokemonId = pokemonUrl.slice(34, -1);
          pokemon.id = pokemonId;
          let foundPokemon = caughtPokemons.find((pokemon) => pokemon.id === pokemonId);
          pokemon.caught = Boolean(foundPokemon);
        }
        setPokemons(pokemons.concat(pokemonInfo.results));
        return pokemonInfo;
      })
      .catch(function (error) {
        alert("Couldn't load pokemons.");
        console.log(error);
      });
  }, [pageNumber]);

  function onClickPokemon(id, event) {
    event.preventDefault();
    event.stopPropagation();

    const caughtPokemons = getCaughtPokemons();
    let foundPokemon = caughtPokemons.find((pokemon) => pokemon.id === id);
    let newPokemons = pokemons.map((pokemon) => {
      if (!foundPokemon) {
        if (pokemon.id === id) {
          let dayDate = new Date().toLocaleDateString();
          let timeDate = new Date().toLocaleTimeString();
          pokemon.caught = true;
          catchPokemon(id, dayDate, timeDate, pokemon.name);
        }
      } else {
        if (pokemon.id === id) {
          pokemon.caught = false;
          releasePokemon(id);
        }
      }
      return pokemon;
    });
    setPokemons(newPokemons);
  }

  return (
    <div className="pokemon-list">
      {pokemons.length > 0 ? (
        <>
          <div className="pokemon-list__container">
            {pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  pokemon={pokemon}
                  onClickPokemon={onClickPokemon}
                  key={pokemon.id}
                />
              );
            })}
          </div>
          <div className="pokemon-list__btn-container">
            <Button onClick={onClickLoadMore} className="pokemon-list__loading">
              LOAD MORE
            </Button>
          </div>
        </>
      ) : (
        <div className="pokemon-list__spinner-container">
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
}
