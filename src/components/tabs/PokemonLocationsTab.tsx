import React from "react";
import {PokemonLocation} from "../PokemonLocation";

export const PokemonLocationsTab : React.FC = () => {
    return (
        <>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
            <PokemonLocation regionName={"Kanto"} locationName={"Pallet Town"} className={"poke-ability"}/>
        </>
    );
}