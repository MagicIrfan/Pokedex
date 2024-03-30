import React, {useContext} from "react";
import {PokemonLocation} from "../PokemonLocation";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../../pages/PokemonPage";
import {NoDataContent} from "../NoDataContent";

export const PokemonLocationsTab: React.FC = () => {
    const pokemon: DetailedPokemon = useContext(PokemonContext);
    const { locations } = pokemon;

    return (
        locations.length > 0 ? (
            <div style={{
                overflowY: 'scroll',
                maxHeight: '500px'
            }}>
                {locations.map((locationName: string, index: number) => (
                    <PokemonLocation key={locationName} locationName={locationName} />
                ))}
            </div>
        ) : (
            <NoDataContent text={"This pokémon cannot be found in the wild!"} />
        )
    );
};