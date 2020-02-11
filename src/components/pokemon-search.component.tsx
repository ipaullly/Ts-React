import React, { Component } from 'react';
import User from '../interfaces/user.interfaces';

interface SearchState {
  error: boolean,
  name: string,
  numberOfAbilities: number,
  baseExperience: number,
  imageUrl: string
}

export class PokemonSearch extends Component<User, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: User){
    super(props);
    this.pokemonRef = React.createRef();
    this.state = {
      error: false,
      name: '',
      numberOfAbilities: 0,
      baseExperience: 0,
      imageUrl: '',
    };
  }

  onSearchClick = async () => {
    try {
      const inputValue = this.pokemonRef.current.value;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }
      const data = await res.json();
      console.log(data);
      this.setState({
        error: false,
        name: data.name,
        numberOfAbilities: data.abilities.length,
        baseExperience: data.base_experience,
        imageUrl: data.sprites.front_default,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { name: userName, numberOfPokemons } = this.props;
    const { error, name, numberOfAbilities, baseExperience, imageUrl } = this.state;
    return(
      <div>
        <p>
          User {userName} has {numberOfPokemons} pokemons
        </p>
        <input type="text" ref={this.pokemonRef}/>
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
        {error? (
          <p>Pokemon not found, please try again</p>
        ) : (
          <div>
            <img src={imageUrl} alt="" className="pokemon-image"/>
            <p>
              {name} has {numberOfAbilities} abilities and {baseExperience} base experience points
            </p>
          </div>
        )
        }
      </div>
    );
  }
}

export default PokemonSearch;