import React from "react";
import {prettier} from "../utils/string";

interface PokemonLocationProps{
    className?:string;
    locationName:string;
}
export const PokemonLocation : React.FC<PokemonLocationProps> = ({className = "", locationName}) => {
    return (
        <div className={"pokemon-location"}>
            <p>{prettier(locationName)}</p>
        </div>
    );
}