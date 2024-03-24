import React from "react";
import {PokemonMoveTypeSVGPath} from "./PokemonMoveTypeSVGPath";

interface PokemonMoveTypeSVGProps{
    type:string;
}

export const PokemonMoveTypeSVG : React.FC<PokemonMoveTypeSVGProps> = ({type}) => {

    return (
        <div className={`pokemon-move-icon ${type}`}>
            <svg width="150" height="150" viewBox="0 0 512 512"
                 xmlns="http://www.w3.org/2000/svg">
                {<PokemonMoveTypeSVGPath type={type}/>}
            </svg>
        </div>
    );
};