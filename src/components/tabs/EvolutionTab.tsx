import React from "react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {EvolutionSpecie} from "../EvolutionSpecie";

export const EvolutionTab : React.FC = () => {
    return (
        <div className={"evolution-tab"}>
            <EvolutionSpecie/>
            <EvolutionSpecie/>
        </div>
    );
}