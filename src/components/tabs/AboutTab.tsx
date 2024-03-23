import React from "react";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {PokemonCharacteristic} from "../PokemonCharacteristic";
import {PokemonMeasurements} from "../PokemonMeasurements";

export const AboutTab : React.FC = () => {
    return (
        <div>
            <p className={"poke-description"}>
                A strange seed was planted on its back at birth. The plant sprouts and grows with this
                POKéMON.
                His main color is green and lives in grassland.
            </p>
            <PokemonMeasurements />
            <PokemonCharacteristic name={"Abilities"} abilities={["Overgrow","Chlorophyll"]} className={"poke-ability"}/>
            <PokemonCharacteristic name={"Growth rate"} abilities={["Slow"]}/>
            <PokemonCharacteristic name={"Capture rate"} abilities={["35"]}/>
            <PokemonCharacteristic name={"Base happiness"} abilities={["50%"]}/>
            <PokemonCharacteristic name={"Egg groups"} abilities={["Monster", "Plant"]} className={"poke-ability"}/>
            <PokemonCharacteristic name={"Gender rate"} abilities={["87,5%", "12,5%"]} icons={[faMars,faVenus]}/>
        </div>
    );
}