import React from "react";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {PokemonCharacteristic} from "../PokemonCharacteristic";
import {PokemonMeasurements} from "../PokemonMeasurements";
import DetailedPokemon from "../../models/DetailledPokemon";
import {prettier} from "../../utils/string";
import PokemonAbility from "../../models/PokemonAbility";

interface AboutTabProps{
    pokemon:DetailedPokemon;
}
export const AboutTab : React.FC<AboutTabProps> = ({pokemon}) => {
    return (
        <>
            <p className={"poke-description"}>
                {prettier(pokemon.description)}
            </p>
            <div style={{
                fontSize:1.2 + 'em'
            }}>
                <PokemonMeasurements pokemon={pokemon} />
                <PokemonCharacteristic name={"Abilities"} abilities={pokemon.abilities.map((ability : PokemonAbility )=>ability.name)} className={"poke-ability"}/>
                <PokemonCharacteristic name={"Growth rate"} abilities={[pokemon.growthRate]}/>
                <PokemonCharacteristic name={"Capture rate"} abilities={[`${pokemon.captureRate}`]}/>
                <PokemonCharacteristic name={"Base happiness"} abilities={[`${pokemon.baseHappiness}%`]}/>
                <PokemonCharacteristic name={"Egg groups"} abilities={pokemon.eggGroups} className={"poke-ability"}/>
                <PokemonCharacteristic name={"Gender rate"} abilities={[`${pokemon.genderRate.male}%`,`${pokemon.genderRate.female}%`]} icons={[faMars,faVenus]}/>
            </div>
        </>
    );
}