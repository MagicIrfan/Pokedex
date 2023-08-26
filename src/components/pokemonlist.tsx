import React, {useEffect, useState} from 'react';
import PokemonComponent from "./pokemon";
import {getPokemon, getPokemons} from "../services/pokemonservice"

const PokemonList : React.FC = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const init = async () =>  {
            const fetchPokemons = await getPokemons()
            if(fetchPokemons.status === 200){
                const pokeNumber = fetchPokemons.data.count;
                let data = [];
                for(let index = 1; index<152; index++){
                    const fetchPokemon = await getPokemon(index)
                    data.push(fetchPokemon.data)
                }
                // @ts-ignore
                setPokemons(data)
            }
        }
        init();
    }, []);

    const listItems = pokemons.map(pokemon => <PokemonComponent pokemon={pokemon}></PokemonComponent>);
    return (
        <div className="pokemons">
            {listItems}
        </div>
    );
}

export default PokemonList;
