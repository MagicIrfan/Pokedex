import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Image} from "./Image";

export const EvolutionSpecie : React.FC = () => {
    return (
        <div className={"evolution-specie"}>
            <Image
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}
                width={100} height={100}/>
            <div className={"evolution-method"}>
                <FontAwesomeIcon style={{fontSize: '30px'}} icon={faArrowRight}/>
                <p>Level 16</p>
            </div>
            <Image
                src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"}
                width={100} height={100}/>
        </div>
    );
}