import React from 'react';
import '../assets/stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const App : React.FC = () => {
  return (
    <div className="App">
      <h1>Pokemons</h1>
        <div className={"search"}>
          <FontAwesomeIcon icon={icon({name: 'magnifying-glass', style:'solid'})} />
          <input className={"search-poke"} type={"text"} placeholder={"Search a pokémon !"}/>
        </div>
    </div>
  );
}

export default App;
