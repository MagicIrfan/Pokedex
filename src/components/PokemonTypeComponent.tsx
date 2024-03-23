import React from "react";
import {capitalize} from "../utils/string";
import PokemonType from "../models/pokemonType";

interface PokemonTypeProps {
    type:PokemonType;
}
export const PokemonTypeComponent : React.FC<PokemonTypeProps> = ({type}) => {
    return (
        <p className={"type " + type.name}>
            {capitalize(type.name)}
        </p>
    );
}