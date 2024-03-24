import React, {ReactElement, useContext, useEffect, useState} from "react";
import {PokemonMove} from "../../models/PokemonMove";
import {PokemonMove as PokemonMoveElement} from "../PokemonMove";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../pages/PokemonPage";

export const PokemonMovesTab : React.FC = () => {
    const pokemon : DetailedPokemon = useContext(PokemonContext);
    const moves : PokemonMove[] = pokemon.moves;
    const [moveElements, setMovesElements] = useState<ReactElement[]>([]);
    useEffect(() : void => {
        const elements = moves.map((move : PokemonMove) => <PokemonMoveElement move={move}/>);
        setMovesElements(elements);
    }, [moves]);
    return (
        <div className={"pokemon-moves"}>
            {moveElements}
        </div>
    );
}