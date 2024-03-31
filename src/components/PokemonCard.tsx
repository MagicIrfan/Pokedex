import React from 'react';
import pokeball from "../assets/images/pokeball.png"
import {capitalize, pokeNumber} from "../utils/string";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {PokemonTypes} from "./PokemonTypes";
import {Image} from "./Image";
import Pokemon from "../models/Pokemon";

export interface PokemonProps {
    pokemon:Pokemon;
}

export const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
    const { types, id, name } = pokemon;
    const navigate: NavigateFunction = useNavigate();

    const onClickPokemon = (id: number): void => {
        navigate(`/${id}`);
    };

    const onKeyPress = (event: React.KeyboardEvent, id: number): void => {
        if (event.key === 'Enter' || event.key === ' ') {
            onClickPokemon(id);
        }
    };

    return (
        <div
            className={"pokemon " + (types[0])}
            onClick={() => onClickPokemon(id)}
            onKeyPress={(event) => onKeyPress(event, id)}
            tabIndex={0}
            role="button"
            style={{ cursor: 'pointer' }}
        >
            <p className="poke-number">{pokeNumber(id)}</p>
            <h2>{capitalize(name)}</h2>
            <div className="poke-body">
                <PokemonTypes types={types}/>
                <div className="poke-image">
                    <Image className={"image-poke"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} width={160} height={160} alt={`pokemon ${name}`} />
                    <Image className={"pokeball-img"} src={pokeball} width={200} height={200} alt="pokeball" />
                </div>
            </div>
        </div>
    );
};