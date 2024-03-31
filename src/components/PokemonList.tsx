import React, { useMemo, Suspense } from 'react';
import {getAllPokemons} from "../services/pokemon.service";
import Pokemon from "../models/Pokemon";
import {useQuery} from "react-query";

const PokemonCard = React.lazy(() => import('./PokemonCard'));

interface PokemonListProps {
    name: string;
    typeName:string;
}

const PokemonList: React.FC<PokemonListProps> = ({ name, typeName }) => {
    const { data: pokemons} = useQuery<Pokemon[]>('pokemons', getAllPokemons, {
        initialData: [],
    });

    // Filtre les pokemons. Si pokemons est undefined, utilise defaultValue pour éviter les erreurs
    const filteredPokemons : Pokemon[] = useMemo(() => {
        return (pokemons || []).filter((pokemon : Pokemon) =>
            pokemon.name.includes(name) &&
            (typeName !== "all" ? pokemon.types.some((typeInfo : string) : boolean => typeInfo.toLowerCase() === typeName.toLowerCase()) : true)
        );
    }, [name, typeName]);

    const listItems = filteredPokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ));

    return (
        <div className="pokemons">
            {listItems}
        </div>
    );
};

export default PokemonList;