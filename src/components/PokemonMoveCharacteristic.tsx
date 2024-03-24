import React from "react";
import {Image} from "./Image";

interface PokemonMoveCharacteristicProps{
    name?:string,
    value?:string | number
    image?:string
}
export const PokemonMoveCharacteristic : React.FC<PokemonMoveCharacteristicProps> = ({name = "",value = "", image=""}) => {
    return (
        <div className={"pokemon-move-characteristic"}>
            <p>
                {name.length !== 0 && <strong>{name}</strong>}
                {image.length !== 0 && <Image src={image} width={45}/> }
                {value && <span style={{marginLeft: '10px'}}>{value}</span>}
            </p>
        </div>
    );
};