import React from "react";
import {PokemonTypeComponent} from "./PokemonTypeComponent"

interface PokemonTypesProps {
    types:string[];
}
export const PokemonTypes : React.FC<PokemonTypesProps> = ({types}) => {
    return (
        <div className={"poke-types"}>
            {types.map((type: string, index: number) => {
                return (
                    <PokemonTypeComponent key={index} type={type}/>
                );
            })}
        </div>
    );
}