import React, {useState} from 'react';
import '../assets/stylesheets/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PokemonList from "./pokemonlist";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Types from "./types";

const App : React.FC = () => {

    const [name, setName] = useState<string>("");
    const [typeName, setTypeName] = useState<string>("all");
    const onPokemonInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return (
        <div className="App">
            <h1>Pokémons</h1>
            <div className={"search"}>
                <FontAwesomeIcon className={"search-icon"} icon={faSearch} />
                <input
                    onInput={onPokemonInput}
                    className={"search-poke"}
                    type={"text"}
                    placeholder={"Search a pokémon !"}
                />
            </div>
            <Types setTypeName={setTypeName}/>
            <PokemonList typeName={typeName} name={name} />
        </div>
    );
}

export default App;
