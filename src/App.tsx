import React from 'react';
import PokemonSearch from './components/pokemon-search.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <PokemonSearch
        name='agree'
        numberOfPokemons={6}
      />
    </div>
  );
}

export default App;
