import React, {useEffect, useRef, useState} from "react";
import {PokemonMoveCharacteristic} from "./PokemonMoveCharacteristic";
import {PokemonMoveTypeSVG} from "./PokemonMoveTypeSVG";
import {PokemonMove as PokemonMoveModel} from "../models/PokemonMove";
import {prettier} from "../utils/string";
import physical from "../assets/images/physical.webp";
import special from "../assets/images/special.webp";
import status from "../assets/images/status.webp";

interface PokemonMoveProps{
    move:PokemonMoveModel;
}

export const PokemonMove : React.FC<PokemonMoveProps> = ({move}) => {
    const moveType = {
        physical:physical,
        special:special,
        status:status
    }
    return (
        <div
             className={`pokemon-move ${move.pokemonType}`}>
            <h2 className={"pokemon-move-name"}>{prettier(move.name)}</h2>
            <p style={
                {
                    fontSize:1.2 + 'em'
                }
            }>{prettier(move.description)}</p>
            <div className={"pokemon-move-bottom"}>
                <div className={"pokemon-move-characteristics"}>
                    {move.power && <PokemonMoveCharacteristic name={"Power"} value={move.power}/>}
                    {move.accuracy && <PokemonMoveCharacteristic name={"Accuracy"} value={move.accuracy}/>}
                    <PokemonMoveCharacteristic name={"PP"} value={move.pp}/>
                    {move.priority !== 0 && <PokemonMoveCharacteristic name={"Priority"} value={move.priority}/>}
                    <PokemonMoveCharacteristic image={moveType[move.moveType as keyof typeof moveType]}/>
                    <PokemonMoveCharacteristic name={"Target"} value={prettier(move.target)}/>
                </div>
                <PokemonMoveTypeSVG type={move.pokemonType}/>
            </div>
        </div>
    );
}