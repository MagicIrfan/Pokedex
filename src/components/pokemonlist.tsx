import React from 'react';
import Pokemon from "./pokemon";

const PokemonList : React.FC = () => {
    const numberOfTimes = 10;

    const renderMyComponentMultipleTimes = () => {
        const components = [];

        for (let i = 0; i < numberOfTimes; i++) {
            components.push(<Pokemon key={i} />);
        }

        return components;
    };
    return (
        <div className="pokemons">
            {renderMyComponentMultipleTimes()}
        </div>
    );
}

export default PokemonList;
