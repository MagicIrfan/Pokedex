import React from "react";
import {PokemonStatistic} from "../PokemonStatistic";

export const StatTab : React.FC = () => {
    return (
        <div className={"poke-stats"}>
            <PokemonStatistic statisticName={"HP"} statisticValue={45}/>
            <PokemonStatistic statisticName={"Attack"} statisticValue={49}/>
            <PokemonStatistic statisticName={"Defense"} statisticValue={49}/>
            <PokemonStatistic statisticName={"Special Attack"} statisticValue={65}/>
            <PokemonStatistic statisticName={"Special Defense"} statisticValue={65}/>
            <PokemonStatistic statisticName={"Speed"} statisticValue={45}/>
        </div>
    );
}