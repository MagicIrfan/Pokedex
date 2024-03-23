import React, { useEffect, useState, useMemo } from 'react';
import PokemonComponent from "./Pokemon";
import { getPokemon} from "../services/pokemonservice";
import Pokemon from "../models/pokemon";

interface PokemonListProps {
    name: string;
    typeName:string;
}

const PokemonList: React.FC<PokemonListProps> = ({ name, typeName }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect((): void => {
        const fetchAllPokemons = async () => {
            const promises = Array.from({ length: 151 }, (_, index) => getPokemon(index + 1));
            const results = await Promise.all(promises);
            const pokemons : Pokemon[] = results.filter(pokemon => pokemon !== null) as Pokemon[];
            setPokemons(pokemons);
        };
        fetchAllPokemons();
    }, []);

    const filteredPokemons : Pokemon[] = useMemo(() => {
        return pokemons.filter((pokemon) =>
            pokemon.name.includes(name) &&
            (typeName !== "all"
                ? pokemon.types.some(typeInfo => typeInfo === typeName)
                : true))
    }, [typeName, name, pokemons]);

    const listItems : JSX.Element[] = filteredPokemons.map(pokemon => (
        <PokemonComponent pokemon={pokemon} key={pokemon.id} />
    ));

    return (
        <div className="pokemons">
            {listItems}
        </div>
    );
};

export default PokemonList;