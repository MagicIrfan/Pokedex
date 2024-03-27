import React, { useContext } from 'react';
import { PokemonContext } from './path/to/PokemonContext'; // Assurez-vous d'importer correctement PokemonContext
import PokemonMoveElement from './path/to/PokemonMoveElement'; // Assurez-vous d'importer correctement PokemonMoveElement

export const PokemonMovesTab: React.FC = () => {
    const pokemon: DetailedPokemon = useContext(PokemonContext);
    const moves: PokemonMove[] = pokemon.moves;

    return (
        <div className={"pokemon-moves"}>
            {moves.map((move: PokemonMove, index: number) => (
                <PokemonMoveElement move={move} key={index} />
            ))}
        </div>
    );
};