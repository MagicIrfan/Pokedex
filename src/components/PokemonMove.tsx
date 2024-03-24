import React from "react";
import {PokemonMoveCharacteristic} from "./PokemonMoveCharacteristic";
import {PokemonMoveTypeSVG} from "./PokemonMoveTypeSVG";
import {PokemonMove as PokemonMoveModel} from "../models/PokemonMove";
import {prettier} from "../utils/string";

interface PokemonMoveProps{
    move:PokemonMoveModel;
}

export const PokemonMove : React.FC<PokemonMoveProps> = ({move}) => {
    return (
        <div className={`pokemon-move ${move.pokemonType}`}>
            <p className={"pokemon-move-name"}>{prettier(move.name)}</p>
            <p>{prettier(move.description)}</p>
            <div className={"pokemon-move-bottom"}>
                <div className={"pokemon-move-characteristics"}>
                    <PokemonMoveCharacteristic name={"Power"} value={move.power}/>
                    <PokemonMoveCharacteristic name={"Accuracy"} value={move.accuracy}/>
                    <PokemonMoveCharacteristic name={"PP"} value={move.pp}/>
                    <PokemonMoveCharacteristic name={"Priority"} value={move.priority}/>
                    <PokemonMoveCharacteristic name={"Type"} value={prettier(move.moveType)}/>
                    <PokemonMoveCharacteristic name={"Target"} value={prettier(move.target)}/>
                </div>
                <PokemonMoveTypeSVG type={move.pokemonType}/>
            </div>
        </div>
    );
}