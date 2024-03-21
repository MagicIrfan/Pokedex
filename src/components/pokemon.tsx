import React from 'react';
import pokeball from "../assets/images/pokeball.png"
import {capitalize, pokenumber} from "../utils/string";
import {PokemonProps} from "../models/pokemonProps";
import PokeType from "../models/pokeType";

const PokemonComponent: React.FC<PokemonProps> = ({ pokemon }) => {
    const { types, id, name } = pokemon;
    return (
        <div className={"pokemon " + (types[0].name)}>
            <p className="poke-number">{pokenumber(id)}</p>
            <h2>{capitalize(name)}</h2>
            <div className="poke-body">
                <div className={"poke-types"}>
                    {types.map((type : PokeType, index : number) => {
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