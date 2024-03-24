import React, {useContext, useEffect} from "react";
import {EvolutionSpecie} from "../EvolutionSpecie";
import {PokemonEvolutionChain} from "../../models/PokemonEvolutionChain";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../pages/PokemonPage";

export const EvolutionTab : React.FC = () => {
    const pokemon : DetailedPokemon = useContext(PokemonContext);
    const evolutions = pokemon.evolutions
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
                    <h1>This pokémon has no evolutionary lineage !</h1>
                </div>
            }
        </div>
    );
}