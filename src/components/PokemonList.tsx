import React, { useEffect, useState, useMemo, Suspense } from 'react';
import {getAllPokemons} from "../services/pokemon.service";
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
            const cachedPokemons = localStorage.getItem('pokemons');
            if (cachedPokemons) {
                const pokemonsAsync : Pokemon[] = await new Promise<Pokemon[]>((resolve) => {
                    resolve(JSON.parse(cachedPokemons));
                });
                setPokemons(pokemonsAsync);
            } else {
                const results: Pokemon[] = await getAllPokemons();
                setPokemons(results);
                localStorage.setItem('pokemons', JSON.stringify(results));
            }
        })();
    }, []);

    const filteredPokemons : Pokemon[] = useMemo(() => {
        return pokemons && pokemons.filter((pokemon : Pokemon) =>
            pokemon.name && pokemon.name.includes(name) &&
            (typeName !== "all"
                ? pokemon.types.some((typeInfo : string) : boolean => typeInfo.toLowerCase() === typeName.toLowerCase())
                : true))
    }, [typeName, name, pokemons]);

    const listItems : JSX.Element[] = filteredPokemons && filteredPokemons.map((pokemon : Pokemon, index : number) => (
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