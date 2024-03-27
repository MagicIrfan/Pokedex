import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {prettier} from "../utils/string";

interface PokemonCharacteristicProps{
    name:string,
    abilities:string[]
    className?:string;
    icons?:IconDefinition[];
}
export const PokemonCharacteristic : React.FC<PokemonCharacteristicProps> = ({name,abilities, className="", icons = []}) => {
    const getStyleForIcon = (icon : IconDefinition) => {
        switch (icon.iconName) {
            case 'mars':
                return { color: "#0767FF" };
            case 'venus':
                return { color: "#DD65BA" };
            default:
                return {};
        }
    }

    return (
        <div className={"poke-characteristic"}>
            <p className={"poke-characteristic-name"}>{name}</p>
            {abilities.map((ability : string, index : number) =>
                <p key={index} className={className}>{icons && icons[index]? <FontAwesomeIcon icon={icons[index]} style={getStyleForIcon(icons[index])}/> : <></>} {prettier(ability)}</p>
            )}
        </div>
    )
};