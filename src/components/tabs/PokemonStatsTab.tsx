import React, { useContext } from 'react';
import { PokemonStatistics } from '../../models/PokemonStatistics';
import DetailedPokemon from '../../models/DetailledPokemon';
import {PokemonContext} from "../../pages/PokemonPage";
import {PokemonStatistic} from "../PokemonStatistic";

export const PokemonStatsTab: React.FC = () => {
    const pokemon: DetailedPokemon = useContext(PokemonContext);
    const statistics: PokemonStatistics = pokemon.statistics;

    return (
        <div className={"poke-stats"}>
            {Object.values(statistics).map((stat) => (
                <PokemonStatistic key={stat.name} statisticName={stat.name} statisticValue={stat.value} />
            ))}
        </div>
    );
};