import React, { useEffect, useState, useMemo, Suspense } from 'react';
import {getAllPokemons, getDetailedPokemon, getPokemon, getPokemonCount} from "../services/pokemon.service";
import Pokemon from "../models/Pokemon";

const PokemonComponent = React.lazy(() => import('./Pokemon'));

interface PokemonListProps {
    name: string;
    typeName:string;
}

const PokemonList: React.FC<PokemonListProps> = ({ name, typeName }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect((): void => {

        (async () => {
            const results : Pokemon[] = await getAllPokemons();
            setPokemons(results as Pokemon[]);
        })();
    }, []);

    const filteredPokemons : Pokemon[] = useMemo(() => {
        return pokemons.filter((pokemon : Pokemon) =>
            pokemon.name.includes(name) &&
            (typeName !== "all"
                ? pokemon.types.some((typeInfo : string) : boolean => typeInfo.toLowerCase() === typeName.toLowerCase())
                : true))
    }, [typeName, name, pokemons]);

    const listItems : JSX.Element[] = filteredPokemons.map((pokemon : Pokemon, index : number) => (
        <Suspense key={pokemon.id} fallback={<></>}>
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