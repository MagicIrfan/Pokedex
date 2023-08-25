import React, {useEffect, useState} from 'react';
import Pokemon from "./pokemon";
import {getPokemon, getPokemons} from "../services/pokemonservice"

const PokemonList : React.FC = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const init = async () =>  {
            const fetchPokemons = await getPokemons()
            if(fetchPokemons.status === 200){
                const pokeNumber = fetchPokemons.data.count;
                let data = [];
                for(let index = 1; index<pokeNumber; index++){
                    const fetchPokemon = await getPokemon(index)
                    console.log(fetchPokemon.data)
                }
            }
        }
        //init();
    }, []);

    const numberOfTimes = 10;

    const renderMyComponentMultipleTimes = () => {
        const components = [];

        for (let i = 0; i < numberOfTimes; i++) {
            components.push(<Pokemon key={i} />);
        }

        return components;
    };
    return (
        <div className="pokemons">
            {renderMyComponentMultipleTimes()}
        </div>
    );
}

export default PokemonList;
