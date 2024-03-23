import React, {ReactElement, useEffect, useState} from "react";
import {PokemonStatistic} from "../PokemonStatistic";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonStatistics} from "../../models/PokemonStatistics";

interface StatTabProps{
    pokemon:DetailedPokemon;
}
export const StatTab : React.FC<StatTabProps> = ({pokemon}) => {
    const [statisticsComponents, setStatisticsComponents] = useState<ReactElement[]>([]);
    useEffect(() : void => {
        const statistics : PokemonStatistics = pokemon.statistics;
        const newStatisticsComponents: ReactElement[] = Object.values(statistics).map((stat) => (
            <PokemonStatistic key={stat.name} statisticName={stat.name} statisticValue={stat.value} />
        ));
        setStatisticsComponents(newStatisticsComponents);
    }, [pokemon.statistics]);
    return (
        <div className={"poke-stats"}>
            {statisticsComponents}
        </div>
    );
}