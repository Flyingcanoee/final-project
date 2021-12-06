import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage.jsx';
import CaughtPokemons from './containers/CaughtPokemonsPage/CaughtPokemons.jsx';
import PokemonInfo from './containers/PokemonInfo/PokemonInfo.jsx';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Switch>
          <Route path="/caught-pokemons">
            <CaughtPokemons />
          </Route>
          <Route path="/pokemon-info/:id">
            <PokemonInfo />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
