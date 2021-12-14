import React from 'react';
import './PokemonCard.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { getPokemonImage } from '../../api/pokeApi';

export default function PokemonCard(props) {
  const pokemon = props.pokemon;

  return (
    <Card
      className="pokemon-card"
      style={{ width: '18rem' }}
      as={Link}
      to={`/pokemon-info/${pokemon.id}`}
    >
      <div className="pokemon-card__white-stripe"></div>
      <Card.Title>
        {pokemon.name}
        <br />
        <span className="pokemon-id">#{pokemon.id}</span>
      </Card.Title>
      <Card.Img variant="top" src={getPokemonImage(pokemon.id)} />
      <Card.Body>
        <Button
          className={pokemon.caught ? 'pokemon-card__caught' : ''}
          variant="primary"
          onClick={(event) => props.onClickPokemon(pokemon.id, event)}
          key={pokemon.id}
        >
          {pokemon.caught ? 'RELEASE' : 'CATCH'}
        </Button>
      </Card.Body>
    </Card>
  );
}
