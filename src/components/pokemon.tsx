import React, {useEffect, useState} from 'react';
import Pokemon from "../models/pokemon";
import pokeball from "../assets/images/pokeball.png"
import {capitalize, pokenumber} from "../utils/string";
interface PokemonProps {
    pokemon:Pokemon;
}

const PokemonComponent: React.FC<PokemonProps> = ({ pokemon }) => {
    useEffect(() => {
        // Any additional logic you might want to add
    }, []);

    return (
        <div className={"pokemon " + (pokemon.types[0].type.name)}>
            <p className="poke-number">{pokenumber(pokemon.id)}</p>
            <h2>{capitalize(pokemon.name)}</h2>
            <div className="poke-body">
                <div className="poke-types">
                    {pokemon.types.map((type, index) => (
                        <p key={index} className={"type " + (type.type.name)}>
                            {capitalize(type.type.name)}
                        </p>
                    ))}
                </div>
                <div className="poke-image">
                    <img className={"image-poke"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} width={160} height={160} alt="pokemon" />
                    <img className={"pokeball-img"} src={pokeball} width={200} height={200} alt="pokeball" />
                </div>
            </div>
        </div>
    );
};

export default PokemonComponent;