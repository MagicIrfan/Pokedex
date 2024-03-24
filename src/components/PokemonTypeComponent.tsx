import React from "react";
import {capitalize} from "../utils/string";

interface PokemonTypeProps {
    type:string;
    style?:any;
}
export const PokemonTypeComponent : React.FC<PokemonTypeProps> = ({type, style = {}}) => {
    return (
        <p className={"type " + type} style={style}>
            {capitalize(type)}
        </p>
    );
}