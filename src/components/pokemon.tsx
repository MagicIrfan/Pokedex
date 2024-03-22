import React from 'react';
import pokeball from "../assets/images/pokeball.png"
import {capitalize, pokenumber} from "../utils/string";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {PokemonProps} from "../models/pokemonProps";
import PokemonType from "../models/pokemonType";

const PokemonComponent: React.FC<PokemonProps> = ({ pokemon }) => {
    const { types, id, name } = pokemon;
    const navigate : NavigateFunction = useNavigate();
    const onClickPokemon = (id : number) : void => {
        navigate(`/${id}`);
    }

    return (
        <div className={"pokemon " + (types[0].name)} onClick={() => onClickPokemon(id)}>
            <p className="poke-number">{pokenumber(id)}</p>
            <h2>{capitalize(name)}</h2>
            <div className="poke-body">
                <div className={"poke-types"}>
                    {types.map((type : PokemonType, index : number) => {
                        return (
                            <p key={index} className={"type " + type.name}>
                                {capitalize(type.name)}
                            </p>
                        );
                    })}
                </div>
                <div className="poke-image">
                    <img className={"image-poke"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} width={160} height={160} alt="pokemon" />
                    <img className={"pokeball-img"} src={pokeball} width={200} height={200} alt="pokeball" />
                </div>
            </div>
        </div>
    );
};

export default PokemonComponent;