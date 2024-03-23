import React from "react";
import PokemonType from "../models/pokemonType";
import {PokemonTypeComponent} from "./PokemonTypeComponent"

interface PokemonTypesProps {
    types:PokemonType[];
}
export const PokemonTypes : React.FC<PokemonTypesProps> = ({types}) => {
    return (
        <div className={"poke-types"}>
            {types.map((type: PokemonType, index: number) => {
                return (
                    <PokemonTypeComponent key={index} type={type}/>
                );
            })}
        </div>
    );
}