import React, { useEffect, useState, useMemo } from 'react';
import PokemonComponent from "./pokemon";
import { getPokemon, getPokemons } from "../services/pokemonservice";
import Pokemon from "../models/pokemon";

interface PokemonListProps {
    name: string;
    typeName:string;
}

const PokemonList: React.FC<PokemonListProps> = ({ name, typeName }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const init = async () =>  {
            const fetchPokemons = await getPokemons();
            if (fetchPokemons.status === 200) {
                const pokeNumber = fetchPokemons.data.count;
                let data = [];
                for (let index = 1; index < 152; index++) {
                    const fetchPokemon = await getPokemon(index);
                    data.push(fetchPokemon.data);
                }
                setPokemons(data);
            }
        };
        init();
    }, []);

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) =>
            pokemon.name.includes(name) &&
            (typeName !== "all"
                ? pokemon.types.some(typeInfo => typeInfo.name === typeName)
                : true))
    }, [typeName, name, pokemons]);

    const listItems = filteredPokemons.map(pokemon => (
        <PokemonComponent pokemon={pokemon} key={pokemon.id} />
    ));

    return (
        <div className="pokemons">
            {listItems}
        </div>
    );
};

export default PokemonList;