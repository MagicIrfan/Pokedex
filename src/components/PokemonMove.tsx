import React from "react";
import {PokemonMoveCharacteristics} from "./PokemonMoveCharacteristics";
import {PokemonMoveTypeSVG} from "./PokemonMoveTypeSVG";

export const PokemonMove : React.FC = () => {
    return (
        <div className={"pokemon-move normal"}>
            <p className={"pokemon-move-name"}>Tackle</p>
            <p>A full body charge attack</p>
            <div className={"pokemon-move-bottom"}>
                <PokemonMoveCharacteristics/>
                <PokemonMoveTypeSVG/>
            </div>
        </div>
    );
}