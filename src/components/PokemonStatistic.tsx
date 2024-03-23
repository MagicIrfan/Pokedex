import React from "react";

interface PokemonStatisticProps{
    statisticName:"HP" | "Attack" | "Defense" | "Special Attack" | "Special Defense" | "Speed";
    statisticValue:number;
}
export const PokemonStatistic : React.FC<PokemonStatisticProps> = ({statisticName, statisticValue}) => {
    return(
        <div className={"poke-stat"}>
            <p className={"stat-name"}>{statisticName}</p>
            <div className={"stat"}>
                <p className={"stat-value"}>{statisticValue}</p>
                <div className={"stat-bar"}>
                    <div className={"stat-bar-filled"}>
                    </div>
                </div>
            </div>
        </div>
    );
};