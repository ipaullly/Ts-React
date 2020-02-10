import React, { Component } from 'react';
import User from '../interfaces/user.interfaces';

export class PokemonSearch extends Component<User> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: User){
    super(props);
    this.pokemonRef = React.createRef();
    this.state = {
      
    };
  }

  render() {
    const { name, numberOfPokemons } = this.props;
    return(
      <div>
        <p>
          User {name} has {numberOfPokemons} pokemons
        </p>
        <input type="text" ref={this.pokemonRef}/>
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
      </div>
    );
  }
}

export default PokemonSearch;