import React, {useContext} from "react";
import {PokemonLocation} from "../PokemonLocation";
import DetailedPokemon from "../../models/DetailledPokemon";
import {PokemonContext} from "../pages/PokemonPage";

export const PokemonLocationsTab : React.FC = () => {
    const pokemon : DetailedPokemon = useContext(PokemonContext);
    const locations : string[] = pokemon.locations;
    return (
        <>
            {locations.length !== 0 ? locations.map((locationName) => (
                <PokemonLocation key={locationName} locationName={locationName}/>
            )) : <div style={{
                textAlign: "center",
                padding: '5em'
            }}>
                <h1>This pokémon cannot be found in the wild !</h1>
            </div>}
        </>
    );
}