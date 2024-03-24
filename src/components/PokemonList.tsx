import React, { useEffect, useState, useMemo, Suspense } from 'react';
import {getPokemon, getPokemonCount} from "../services/pokemon.service";
import Pokemon from "../models/Pokemon";

const PokemonComponent = React.lazy(() => import('./Pokemon'));

interface PokemonListProps {
    name: string;
    typeName:string;
}

const PokemonList: React.FC<PokemonListProps> = ({ name, typeName }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect((): void => {
        const fetchAllPokemons = async () => {
            const nbPokemon : number = await getPokemonCount();
            const promises = Array.from({ length: nbPokemon }, (_, index) => getPokemon(index + 1));
            const results = await Promise.all(promises);
            const pokemons : Pokemon[] = results.filter(pokemon => pokemon !== null) as Pokemon[];
            setPokemons(pokemons);
        };
        fetchAllPokemons();
    }, []);

    const filteredPokemons : Pokemon[] = useMemo(() => {
        return pokemons.filter((pokemon : Pokemon) =>
            pokemon.name.includes(name) &&
            (typeName !== "all"
                ? pokemon.types.some((typeInfo : string) : boolean => typeInfo.toLowerCase() === typeName.toLowerCase())
                : true))
    }, [typeName, name, pokemons]);

    const listItems : JSX.Element[] = filteredPokemons.map((pokemon : Pokemon, index : number) => (
        <Suspense key={pokemon.id} fallback={<div key={index}>Chargement...</div>}>
            <PokemonComponent pokemon={pokemon}/>
        </Suspense>
    ));

    return (
        <div className="pokemons">
            {listItems}
        </div>
    );
};

export default PokemonList;