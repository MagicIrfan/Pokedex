import React, {ReactElement, useEffect, useState} from "react";
import {PokemonMove} from "../../models/PokemonMove";
import {PokemonMove as PokemonMoveElement} from "../PokemonMove";

interface PokemonMovesTabProps{
    moves : PokemonMove[]
}

export const PokemonMovesTab : React.FC<PokemonMovesTabProps> = ({moves}) => {
    const [moveElements, setMovesElements] = useState<ReactElement[]>([]);
    useEffect(() : void => {
        const elements = moves.map((move : PokemonMove) => <PokemonMoveElement move={move}/>);
        setMovesElements(elements);
    });
    return (
        <div className={"pokemon-moves"}>
            {moveElements}
        </div>
    );
}