import React from "react";

interface PokemonLocationProps{
    className?:string;
    regionName:string;
    locationName:string;
}
export const PokemonLocation : React.FC<PokemonLocationProps> = ({className = "", regionName, locationName}) => {
    return (
        <div className={"pokemon-location"}>
            <p className={className}>{regionName}</p>
            <p>{locationName}</p>
        </div>
    );
}