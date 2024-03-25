import React, {useState} from 'react';
import '../assets/stylesheets/pokemonApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PokemonList from "../components/PokemonList";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {PokemonTypeList} from "../components/PokemonTypeList";

const PokemonApp : React.FC = () => {

    const [name, setName] = useState<string>("");
    const [typeName, setTypeName] = useState<string>("all");
    const onPokemonInput = (event: React.ChangeEvent<HTMLInputElement>) : void => {
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
            <PokemonTypeList setTypeName={setTypeName}/>
            <PokemonList typeName={typeName} name={name} />
        </div>
    );
}

export default PokemonApp;
