import axios from "axios";
import Pokemon from "../models/pokemon";
import DetailedPokemon, {DetailedPokemonBuilder} from "../models/detailledPokemon";
import {Statistics} from "../models/pokemonStatistics";
import GenderRate from "../models/genderRate";

export const getPokemon = async (id: number): Promise<Pokemon | null> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.status === 200 && response.data) {
            const data = response.data;
            const {id, name, types} = data;
            const pokeTypes: string[] = types.map((apiType: { type: { name: string; }; }) => apiType.type.name);
            return new Pokemon(id, name, pokeTypes);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
};

export const getDetailedPokemon = async (id: number): Promise<DetailedPokemon | null> => {
    try {
        const detailedPokemonBuilder = new DetailedPokemonBuilder();
        const responsePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

        if (responsePokemon.status === 200 && responsePokemon.data) {
            const {id, name, types, abilities, stats, weight, height, cries} = responsePokemon.data;

            const pokeTypes = types.map((apiType : any) => apiType.type.name);
            const pokeAbilities = abilities.map((ability : any) => ({ name: ability.ability.name })); // Assurez-vous que cela correspond à la structure attendue de PokemonAbility
            const pokeStats : Statistics = new Statistics(stats.map((stat : any) => stat.base_stat)); // Assurez-vous que le constructeur de Statistics est conçu pour cela
            const pokeCry: string = cries.latest as string;

            detailedPokemonBuilder
                .withId(id)
                .withName(name)
                .withWeight(weight)
                .withHeight(height)
                .withTypes(pokeTypes)
                .withAbilities(pokeAbilities)
                .withStatistics(pokeStats)
                .withCry(pokeCry);
        }

        const responseDetailedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

        if (responseDetailedPokemon.status === 200 && responseDetailedPokemon.data) {
            const {base_happiness, capture_rate, flavor_text_entries, shape, egg_groups, genera,gender_rate, growth_rate} = responseDetailedPokemon.data;
            const description = flavor_text_entries.find((entry:any) => entry.language.name === "en")?.flavor_text ?? "";
            const genus = genera.find((entry:any) => entry.language.name === "en")?.genus ?? "";
            const pokeEggGroup = egg_groups.map((egg_group:any) => egg_group.name);
            const pokeFemaleRate : number = gender_rate / 8 * 100;
            const pokeGenderRate = new GenderRate(100 - pokeFemaleRate, pokeFemaleRate)
            detailedPokemonBuilder
                .withBaseHappiness(base_happiness)
                .withCaptureRate(capture_rate)
                .withShape(shape.name)
                .withDescription(description)
                .withEggGroups(pokeEggGroup)
                .withGenus(genus)
                .withGenderRate(pokeGenderRate)
                .withGrowthRate(growth_rate.name);
        }

        return detailedPokemonBuilder.build();
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
        return null;
    }
};
