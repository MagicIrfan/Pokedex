import React from "react";
import {faRuler, faWeightHanging} from "@fortawesome/free-solid-svg-icons";
import {PokemonMeasurement} from "./PokemonMeasurement";

export const PokemonMeasurements : React.FC = () => {
    return (
        <div className={"poke-measurements"}>
            <PokemonMeasurement icon={faRuler} className={"poke-height"} measurementName={"Height"} measurementValue={"26"} measure={"kg"}/>
            <PokemonMeasurement icon={faWeightHanging} className={"poke-weight"} measurementName={"Weight"} measurementValue={"0.6"} measure={"m"}/>
        </div>
    );
}