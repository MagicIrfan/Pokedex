import React from "react";

interface PokemonStatisticProps{
    statisticName:"HP" | "Attack" | "Defense" | "Special Attack" | "Special Defense" | "Speed";
    statisticValue:number;
}
export const PokemonStatistic : React.FC<PokemonStatisticProps> = ({statisticName, statisticValue}) => {
    const getBackgroundColorStatBar = () : string => {
        if (statisticValue <= 50) return "#C70039";
        if (statisticValue <= 75) return "#FF5733";
        if (statisticValue <= 100) return "#FFC300";
        if (statisticValue <= 125) return "#2bc697";
        if (statisticValue <= 150) return "#1ccae5";
        return "#2d92ea";
    }
    return(
        <div className={"poke-stat"}>
            <p className={"stat-name"}>{statisticName}</p>
            <div className={"stat"}>
                <p className={"stat-value"}>{statisticValue}</p>
                <div className={"stat-bar"}>
                    <div className={"stat-bar-filled"} style={{maxWidth:'100%', width:`${statisticValue/255 * 100}%`, backgroundColor:getBackgroundColorStatBar()}}>
                    </div>
                </div>
            </div>
        </div>
    );
};