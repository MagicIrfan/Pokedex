import React from "react";
import {EvolutionSpecie} from "../EvolutionSpecie";
import {PokemonEvolutionChain} from "../../models/PokemonEvolutionChain";

interface EvolutionTabProps{
    evolutions:PokemonEvolutionChain;
}
export const EvolutionTab : React.FC<EvolutionTabProps> = ({evolutions}) => {
    const canEvolve : boolean = evolutions && evolutions.evolvesTo.length !== 0;
    return (
        <div className={"evolution-tab"}>
            { canEvolve ?
                <EvolutionSpecie evolutions={evolutions}/>
                :
                <div style={{
                    textAlign:"center",
                    padding:'5em'
                }}>
                    <h1>This pokémon can't evolve !</h1>
                </div>
            }
        </div>
    );
}