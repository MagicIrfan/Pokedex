import React from 'react';
import '../assets/stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import PokemonList from "./pokemonlist";

const App : React.FC = () => {
  return (
    <div className="App">
      <h1>Pokemons</h1>
      <div className={"search"}>
        <FontAwesomeIcon className={"search-icon"} icon={icon({name: 'magnifying-glass', style:'solid'})} />
        <input className={"search-poke"} type={"text"} placeholder={"Search a pokémon !"}/>
      </div>
      <PokemonList></PokemonList>
    </div>
  );
}

export default App;
