import React from "react";
import {AboutTab} from "./AboutTab";
import {StatTab} from "./StatTab";
import {EvolutionTab} from "./EvolutionTab";
import {PokemonMovesTab} from "./PokemonMovesTab";
import {PokemonLocationsTab} from "./PokemonLocationsTab";
import DetailedPokemon from "../../models/DetailledPokemon";

interface ActiveTabProps{
    activeTab:string;
    pokemon:DetailedPokemon;
}

export const ActiveTab : React.FC<ActiveTabProps> = ({activeTab, pokemon}) => {
    const tabList: string[] = ['about', 'stats', 'evolution', 'moves', 'location'];

    const tabIsActive = (tabName: string): boolean => {
        return tabList.includes(tabName) && activeTab === tabName;
    }

    return (
        <>
            {tabIsActive("about") && <AboutTab pokemon={pokemon}/>}
            {tabIsActive("stats") && <StatTab pokemon={pokemon}/>}
            {tabIsActive("evolution") && <EvolutionTab evolutions={pokemon.evolutions}/>}
            {tabIsActive("moves") && <PokemonMovesTab moves={pokemon.moves}/>}
            {tabIsActive("location") && <PokemonLocationsTab/>}
        </>
    );
}