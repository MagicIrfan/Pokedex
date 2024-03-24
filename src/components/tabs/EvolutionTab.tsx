import React from "react";
import {EvolutionSpecie} from "../EvolutionSpecie";
import {PokemonEvolutionChain} from "../../models/PokemonEvolutionChain";

interface EvolutionTabProps{
    evolutions:PokemonEvolutionChain;
}
export const EvolutionTab : React.FC<EvolutionTabProps> = ({evolutions}) => {

    return (
        <div className={"evolution-tab"}>
            <EvolutionSpecie evolutions={evolutions}/>
        </div>
    );
}