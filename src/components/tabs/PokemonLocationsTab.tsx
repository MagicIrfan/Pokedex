import React, {useContext} from "react";
import {PokemonLocation} from "../PokemonLocation";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../../pages/PokemonPage";
import {NoDataContent} from "../NoDataContent";

export const PokemonLocationsTab : React.FC = () => {
    const pokemon : DetailedPokemon = useContext(PokemonContext);
    const locations : string[] = pokemon.locations;

    const LocationsList = () => (
        <>
            {locations.map((locationName : string, index : number) => (
                <PokemonLocation key={index} locationName={locationName} />
            ))}
        </>
    );

    return (
        <>
            {locations.length !== 0 ? <LocationsList /> : <NoDataContent text={"This pokémon cannot be found in the wild !"} />}
        </>
    );
}