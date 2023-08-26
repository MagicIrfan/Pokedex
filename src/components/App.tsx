import React from 'react';
import '../assets/stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import PokemonList from "./pokemonlist";
import Types from "./types";

const App : React.FC = () => {
    const onPokemonInput = () => {
     console.log("pedale")
    }
  return (
    <div className="App">
      <h1>Pokemons</h1>
      <div className={"search"}>
        <FontAwesomeIcon className={"search-icon"} icon={icon({name: 'magnifying-glass', style:'solid'})} />
        <input onInput={onPokemonInput} className={"search-poke"} type={"text"} placeholder={"Search a pokémon !"}/>
      </div>
        <Types></Types>
        <PokemonList></PokemonList>
    </div>
  );
}

export default App;
