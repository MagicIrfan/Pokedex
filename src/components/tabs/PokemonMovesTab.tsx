import React, { useContext } from 'react';
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../../pages/PokemonPage";
import {PokemonMove} from "../../models/PokemonMove";
import {PokemonMove as PokemonMoveElement} from "../PokemonMove";

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