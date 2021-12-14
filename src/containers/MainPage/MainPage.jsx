import React from 'react';
import PokemonList from '../../components/PokemonList/PokemonList.jsx';
import Header from '../../components/Header/Header.jsx';

function MainPage() {
  return (
    <div className="container">
      <Header>Pokédex</Header>
      <PokemonList />
    </div>
  );
}

export default MainPage;
