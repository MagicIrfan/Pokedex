import React from "react";
import {PokemonTypeComponent} from "./PokemonTypeComponent"

interface PokemonTypesProps {
    types:string[];
    style?:any;
}
export const PokemonTypes : React.FC<PokemonTypesProps> = ({types, style = {}}) => {
    return (
        <div className={"poke-types"}>
            {types.map((type: string, index: number) => {
                return (
                    <PokemonTypeComponent style={style} key={index} type={type}/>
                );
            })}
        </div>
    );
}