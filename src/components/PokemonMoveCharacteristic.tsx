import React from "react";

interface PokemonMoveCharacteristicProps{
    name:string,
    value:string | number
}
export const PokemonMoveCharacteristic : React.FC<PokemonMoveCharacteristicProps> = ({name,value}) => {
    return (
        <div className={"pokemon-move-characteristic"}>
            <p>
                <strong>{name}</strong>
                <span style={{marginLeft: '10px'}}>{value}</span>
            </p>
        </div>
    );
};