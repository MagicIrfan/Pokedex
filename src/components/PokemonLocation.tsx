import React from "react";
import {prettier} from "../utils/string";

interface PokemonLocationProps{
    locationName:string;
}
export const PokemonLocation : React.FC<PokemonLocationProps> = ({locationName}) => {
    return (
        <div className={"pokemon-location"}>
            <p>{prettier(locationName)}</p>
        </div>
    );
}