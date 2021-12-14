import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage.jsx';
import CaughtPokemons from './containers/CaughtPokemonsPage/CaughtPokemons.jsx';
import PokemonInfo from './containers/PokemonInfo/PokemonInfo.jsx';
// import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory({
//   basename: process.env.PUBLIC_URL
// });

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
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
