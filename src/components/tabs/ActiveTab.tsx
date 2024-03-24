import React from "react";
import {AboutTab} from "./AboutTab";
import {StatTab} from "./StatTab";
import {EvolutionTab} from "./EvolutionTab";
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
            {tabIsActive("stats") && <StatTab/>}
            {tabIsActive("evolution") && <EvolutionTab/>}
            {tabIsActive("moves") && <PokemonMovesTab/>}
            {tabIsActive("location") && <PokemonLocationsTab/>}
        </>
    );
}