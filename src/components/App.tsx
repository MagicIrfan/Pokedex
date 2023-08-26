import React, {useState} from 'react';
import '../assets/stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PokemonList from "./pokemonlist";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Types from "./types";

const App : React.FC = () => {

    const [name, setName] = useState<string>("");
    const [typeName, setTypeName] = useState<string>("");
    const onPokemonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value); // Utilisation de event.target.value pour obtenir la valeur de l'input
    };
    return (
        <div className="App">
            <h1>Pokemons</h1>
            <div className={"search"}>
                <FontAwesomeIcon className={"search-icon"} icon={faSearch} /> {/* Utilisation de faSearch au lieu de icon({name: 'magnifying-glass', style:'solid'}) */}
                <input
                    onInput={onPokemonInput}
                    className={"search-poke"}
                    type={"text"}
                    placeholder={"Search a pokémon !"}
                />
            </div>
            <Types setTypeName={setTypeName}/> {/* Affichage des composants Types et PokemonList */}
            <PokemonList name={name} />
        </div>
    );
}

export default App;
