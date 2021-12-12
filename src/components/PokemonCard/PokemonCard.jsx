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
      <Card.Img variant="top" src={getPokemonImage(pokemon.id)} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </Card.Text>
        <Button
          className={pokemon.caught ? 'pokemon-card__caught' : ''}
          variant="primary"
          onClick={(event) => props.onClickPokemon(pokemon.id, event)}
          key={pokemon.id}
        >
          {pokemon.caught ? 'Release' : 'Catch'}
        </Button>
      </Card.Body>
    </Card>
  );
}
