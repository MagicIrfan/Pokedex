import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface PokemonMeasurementProps{
    icon:IconDefinition;
    className:string,
    measurementName:string,
    measurementValue:number,
    measure:string,
}
export const PokemonMeasurement : React.FC<PokemonMeasurementProps> = ({icon,className,measurementName,measurementValue,measure}) => {
    return (
        <div className={className}>
            <p className={"poke-measurements-title"}><FontAwesomeIcon
                icon={icon}/> {measurementName}
            </p>
            <p>{measurementValue} {measure}</p>
        </div>
    );
}