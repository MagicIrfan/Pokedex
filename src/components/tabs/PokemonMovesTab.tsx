import React from "react";
import {PokemonMove} from "./PokemonMove";

export const PokemonMovesTab : React.FC = () => {
    return (
        <div className={"pokemon-moves"}>
            <PokemonMove/>
        </div>
    );
}