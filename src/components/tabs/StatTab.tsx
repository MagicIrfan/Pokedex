import React from "react";

export const StatTab : React.FC = () => {
    return (
        <div className={"poke-stats"}>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>HP</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>45</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>Attack</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>49</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>Defense</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>49</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>Special Attack</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>65</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>Special Defense</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>65</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"poke-stat"}>
                <p className={"stat-name"}>Speed</p>
                <div className={"stat"}>
                    <p className={"stat-value"}>45</p>
                    <div className={"stat-bar"}>
                        <div className={"stat-bar-filled"}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}