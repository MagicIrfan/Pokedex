import React from "react";
import {capitalize} from "../utils/string";

interface PokemonTypeProps {
    type:string;
}
export const PokemonTypeComponent : React.FC<PokemonTypeProps> = ({type}) => {
    return (
        <p className={"type " + type}>
            {capitalize(type)}
        </p>
    );
}