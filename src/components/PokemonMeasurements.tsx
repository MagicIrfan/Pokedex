import React from "react";
import {faRuler, faWeightHanging} from "@fortawesome/free-solid-svg-icons";
import {PokemonMeasurement} from "./PokemonMeasurement";
import DetailedPokemon from "../models/DetailledPokemon";

interface PokemonMeasurementsProps{
    pokemon:DetailedPokemon;
}

export const PokemonMeasurements : React.FC<PokemonMeasurementsProps> = ({pokemon}) => {
    return (
        <div className={"poke-measurements"}>
            <PokemonMeasurement icon={faRuler} className={"poke-height"} measurementName={"Height"} measurementValue={pokemon.height/10} measure={"meter(s)"}/>
            <PokemonMeasurement icon={faWeightHanging} className={"poke-weight"} measurementName={"Weight"} measurementValue={pokemon.weight/10} measure={"kg"}/>
        </div>
    );
}