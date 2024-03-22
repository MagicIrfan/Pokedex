import React from "react";
import {PokemonMoveCharacteristic} from "./PokemonMoveCharacteristic";

export const PokemonMoveCharacteristics : React.FC = () => {
    return (
        <div className={"pokemon-move-characteristics"}>
            <PokemonMoveCharacteristic name={"Power"} value={"35"}/>
            <PokemonMoveCharacteristic name={"Accuracy"} value={"100"}/>
            <PokemonMoveCharacteristic name={"PP"} value={"35"}/>
            <PokemonMoveCharacteristic name={"Priority"} value={"0"}/>
            <PokemonMoveCharacteristic name={"Type"} value={"Physical"}/>
            <PokemonMoveCharacteristic name={"Target"} value={"Selected Pokemon"}/>
        </div>
    );
};