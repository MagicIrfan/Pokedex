import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faRuler, faVenus, faWeightHanging} from "@fortawesome/free-solid-svg-icons";
import {PokemonCharacteristic} from "../PokemonCharacteristic";

export const AboutTab : React.FC = () => {
    return (
        <div>
            <p className={"poke-description"}>
                A strange seed was planted on its back at birth. The plant sprouts and grows with this
                POKéMON.
                His main color is green and lives in grassland.
            </p>
            <div className={"poke-measurements"}>
                <div className={"poke-height"}>
                    <p className={"poke-measurements-title"}><FontAwesomeIcon icon={faRuler}/> Height</p>
                    <p>26 kg</p>
                </div>
                <div className={"poke-weight"}>
                    <p className={"poke-measurements-title"}><FontAwesomeIcon
                        icon={faWeightHanging}/> Weight
                    </p>
                    <p>0.6 m</p>
                </div>
            </div>
            <PokemonCharacteristic name={"Abilities"} abilities={["Overgrow","Chlorophyll"]} className={"poke-ability"}/>
            <PokemonCharacteristic name={"Growth rate"} abilities={["Slow"]}/>
            <PokemonCharacteristic name={"Capture rate"} abilities={["35"]}/>
            <PokemonCharacteristic name={"Base happiness"} abilities={["50%"]}/>
            <PokemonCharacteristic name={"Egg groups"} abilities={["Monster", "Plant"]}/>
            <PokemonCharacteristic name={"Gender rate"} abilities={["87,5%", "12,5%"]} icons={[faMars,faVenus]}/>
        </div>
    );
}