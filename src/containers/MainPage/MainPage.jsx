import React from 'react';
import PokemonList from '../../components/PokemonList/PokemonList.jsx';

function MainPage() {
  return (
    <div className="container">
      <h1 className="main-header">Pokédex</h1>
      <PokemonList />
    </div>
  );
}

export default MainPage;
