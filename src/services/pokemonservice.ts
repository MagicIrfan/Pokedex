import axios from "axios";
import Pokemon from "../models/pokemon";
import PokemonType from "../models/pokemonType";
import DetailedPokemon, {DetailedPokemonBuilder} from "../models/detailledPokemon";
import PokemonAbility from "../models/pokemonAbility";
import {Statistics} from "../models/pokemonStatistics";
import EggGroup from "../models/eggGroup";

export const getPokemon = async (id: number): Promise<Pokemon | null> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.status === 200 && response.data) {
            const data = response.data;
            const {id, name, types} = data;
            const pokeTypes: PokemonType[] = types.map((apiType: { type: { name: string; }; }) => new PokemonType(apiType.type.name));
            return new Pokemon(id, name, pokeTypes);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
};

export const getDetailedPokemon = async (id: number): Promise<DetailedPokemon | null> => {
    try {
        const detailedPokemonBuilder : DetailedPokemonBuilder = new DetailedPokemonBuilder();
        const responsePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (responsePokemon.status === 200 && responsePokemon.data) {
            const data = responsePokemon.data;
            const {id, name, types, abilities, cries, stats, weight, height} = data;
            const pokeTypes: PokemonType[] = types.map((apiType: { type: { name: string; }; }) => new PokemonType(apiType.type.name));
            const pokeAbilities: PokemonAbility[] = abilities.map((ability: { ability: { name: string; }; }) => ability.ability.name);
            const pokeCry: string = cries.latest as string;
            const baseStats : number[] = stats.map((statistic: { base_stat: number; }) => statistic.base_stat as number) as [number, number, number, number, number, number];
            // @ts-ignore
            const pokeStats: Statistics = new Statistics(...baseStats);
            detailedPokemonBuilder
                .withId(id)
                .withName(name)
                .withCry(pokeCry)
                .withWeight(weight)
                .withHeight(height)
                .withTypes(pokeTypes)
                .withAbilities(pokeAbilities)
                .withStatistics(pokeStats);
        }
        const responseDetailedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        if (responseDetailedPokemon.status === 200 && responseDetailedPokemon.data) {
            const data = responseDetailedPokemon.data;
            const {base_happiness, capture_rate, flavor_text_entries, shape,egg_groups} = data;
            const pokeShape : string = shape.name as string;
            const description : string = flavor_text_entries[0].flavor_text as string;
            const pokeEggGroup : EggGroup[] = egg_groups.map((egg_group : any) => new EggGroup(egg_group.name));
            detailedPokemonBuilder
                .withBaseHappiness(base_happiness)
                .withCaptureRate(capture_rate)
                .withShape(pokeShape)
                .withDescription(description)
                .withEggGroups(pokeEggGroup)
        }
        return detailedPokemonBuilder.build();
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
};
