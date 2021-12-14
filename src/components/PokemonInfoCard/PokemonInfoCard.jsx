import React from 'react';
import './PokemonInfoCard.scss';
import PropTypes from 'prop-types';
import { getPokemonImage } from '../../api/pokeApi';

export default function PokemonInfoCard(props) {
  return (
    <div className="pokemon-info-card">
      <div className="pokemon-info-card__white-stripe"></div>
      <div className="pokemon-info-card__data">
        <img
          className="pokemon-info-card__image"
          src={getPokemonImage(props.id)}
          alt="pokemon"
        />
        <div className="pokemon-info-card__resume">
          <h1 className="pokemon-info-card__name">
            {props.name} <span className="pokemon-info-card__id">#{props.id}</span>
          </h1>

          <div className="pokemon-info-card__characteristics">
            <div className="pokemon-info-card__keys">
              <p className="pokemon-info-card__info-name">Abilities:</p>
              <p className="pokemon-info-card__info-name">Types: </p>
              <p className="pokemon-info-card__info-name">Weight:</p>
              <p className="pokemon-info-card__info-name">Status:</p>
              {props.status === 'caught' ? (
                <p className="pokemon-info-card__info-name">Date:</p>
              ) : (
                ''
              )}
            </div>
            <div className="pokemon-info-card__values">
              <p>{props.abilities}</p>
              <p>{props.types}</p>
              <p>{props.weight}</p>
              <p>{props.status} </p>
              {props.status === 'caught' ? (
                <>
                  {props.dayDate} <br /> <br />
                  {props.timeDate}
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PokemonInfoCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  name: PropTypes.string,
  abilities: PropTypes.array,
  weight: PropTypes.number,
  dayDate: PropTypes.string,
  timeDate: PropTypes.string,
  types: PropTypes.array,
};
