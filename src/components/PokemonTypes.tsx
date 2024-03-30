import React from "react";
import {PokemonTypeComponent} from "./PokemonTypeComponent"

interface PokemonTypesProps {
    types:string[];
    style?:any;
    colored?:boolean;
}
export const PokemonTypes : React.FC<PokemonTypesProps> = ({types, style = {}, colored = false}) => {
    return (
        <div className={"poke-types"}>
            {types.map((type: string) => {
                return (
                    <PokemonTypeComponent style={style} key={type} type={type} colored={colored}/>
                );
            })}
        </div>
    );
}