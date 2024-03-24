import React, {useContext} from "react";
import {EvolutionSpecie} from "../EvolutionSpecie";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../../pages/PokemonPage";
import {NoDataContent} from "../NoDataContent";

export const EvolutionTab : React.FC = () => {
    const pokemon : DetailedPokemon = useContext(PokemonContext);
    const evolutions = pokemon.evolutions
    const canEvolve : boolean = evolutions && evolutions.evolvesTo.length !== 0;
    return (
        <div className={"evolution-tab"}>
            { canEvolve ?
                <EvolutionSpecie evolutions={evolutions}/>
                :
                <NoDataContent text={"This pokémon has no evolutionary lineage !"} />
            }
        </div>
    );
}