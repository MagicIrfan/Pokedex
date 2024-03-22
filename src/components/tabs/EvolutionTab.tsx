import React from "react";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const EvolutionTab : React.FC = () => {
    return (
        <div className={"evolution-tab"}>
            <div className={"evolution-specie"}>
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}
                    alt={""} width={100} height={100}/>
                <div className={"evolution-method"}>
                    <FontAwesomeIcon style={{fontSize: '30px'}} icon={faArrowRight}/>
                    <p>Level 16</p>
                </div>
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"}
                    alt={""} width={100} height={100}/>
            </div>
            <div className={"evolution-specie"}>
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"}
                    alt={""} width={100} height={100}/>
                <div className={"evolution-method"}>
                    <FontAwesomeIcon style={{fontSize: '30px'}} icon={faArrowRight}/>
                    <p>Level 32</p>
                </div>
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"}
                    alt={""} width={100} height={100}/>
            </div>
        </div>
    );
}