import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faRuler, faVenus, faWeightHanging} from "@fortawesome/free-solid-svg-icons";

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
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Abilities</p>
                <p className={"poke-ability"}>Overgrow</p>
                <p className={"poke-ability"}>Overgrow</p>
            </div>
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Growth rate</p>
                <p>Slow</p>
            </div>
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Capture rate</p>
                <p>35</p>
            </div>
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Base happiness</p>
                <p>50%</p>
            </div>
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Egg groups</p>
                <p className={"poke-ability"}>Monster</p>
                <p className={"poke-ability"}>Plant</p>
            </div>
            <div className={"poke-characteristic"}>
                <p className={"poke-characteristic-name"}>Gender rate</p>
                <p><FontAwesomeIcon icon={faMars}/> 87,5%</p>
                <p><FontAwesomeIcon icon={faVenus}/> 12,5%</p>
            </div>
        </div>
    );
}