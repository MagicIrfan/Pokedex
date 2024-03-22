import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faVenus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface PokemonCharacteristicProps{
    name:string,
    abilities:string[]
    className?:string;
    icons?:IconDefinition[];
}
export const PokemonCharacteristic : React.FC<PokemonCharacteristicProps> = ({name,abilities, className="", icons = []}) => {
    return (
        <div className={"poke-characteristic"}>
            <p className={"poke-characteristic-name"}>{name}</p>
            {abilities.map((ability : string, index : number) =>
                <p key={index} className={className}>{icons && icons[index]? <FontAwesomeIcon icon={icons[index]}/> : <></>} {ability}</p>
            )}
        </div>
    )
};