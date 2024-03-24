import React from "react";
import {capitalize} from "../utils/string";

interface PokemonTypeProps {
    type:string;
    style?:any;
    colored?:boolean;
}
export const PokemonTypeComponent : React.FC<PokemonTypeProps> = ({type, style = {}, colored = false}) => {
    return (
        <p className={`${colored ? 'type-colored' : 'type'} ${type}`} style={style}>
            {capitalize(type)}
        </p>
    );
}