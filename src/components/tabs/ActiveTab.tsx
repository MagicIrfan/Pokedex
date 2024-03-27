import React from "react";
import {AboutTab} from "./AboutTab";
import {PokemonStatsTab} from "./PokemonStatsTab";
import {PokemonEvolutionsTab} from "./PokemonEvolutionsTab";
import {PokemonMovesTab} from "./PokemonMovesTab";
import {PokemonLocationsTab} from "./PokemonLocationsTab";

interface ActiveTabProps{
    activeTab:string;
}

export const ActiveTab : React.FC<ActiveTabProps> = ({activeTab}) => {
    const tabList: string[] = ['about', 'stats', 'evolution', 'moves', 'location'];

    const tabIsActive = (tabName: string): boolean => {
        return tabList.includes(tabName) && activeTab === tabName;
    }

    return (
        <>
            {tabIsActive("about") && <AboutTab/>}
            {tabIsActive("stats") && <PokemonStatsTab/>}
            {tabIsActive("evolution") && <PokemonEvolutionsTab/>}
            {tabIsActive("moves") && <PokemonMovesTab/>}
            {tabIsActive("location") && <PokemonLocationsTab/>}
        </>
    );
}