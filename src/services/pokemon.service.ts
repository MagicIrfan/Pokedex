import axios from "axios";
import Pokemon from "../models/Pokemon";
import DetailedPokemon, {DetailedPokemonBuilder} from "../models/DetailledPokemon";
import {PokemonStatistics} from "../models/PokemonStatistics";
import GenderRate from "../models/GenderRate";
import {PokemonEvolutionChain} from "../models/PokemonEvolutionChain";
import {PokemonEvolutionDetail} from "../models/PokemonEvolutionDetail";
import {PokemonMove} from "../models/PokemonMove";
import PokemonSpecie from "../models/PokemonSpecie";


export const fetchData = async (url : string)=> {
    try {
        const response = await axios.get(url);
        if (response.status === 200 && response.data) {
            return response.data;
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
}

export const getPokemon = async (id: number | string): Promise<Pokemon | null> => {
    try {
        const response = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response) {
            const {id, name, types} = response;
            const pokeTypes: string[] = types.map((apiType: { type: { name: string; }; }) => apiType.type.name);
            return new Pokemon(id, name, pokeTypes);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
};

export const getPokemonSpecie = async (url:string): Promise<PokemonSpecie | null> => {
    try {
        const response = await fetchData(url);
        if (response) {
            const {id, name} = response;
            return new PokemonSpecie(id, name);
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
            const {id, name, types, abilities, stats, weight, height, cries,moves} = responsePokemon.data;

            const pokeTypes = types.map((apiType : any) => apiType.type.name);
            const pokeAbilities = abilities.map((ability : any) => ({ name: ability.ability.name })); // Assurez-vous que cela correspond à la structure attendue de PokemonAbility
            const pokeStats : PokemonStatistics = new PokemonStatistics(stats.map((stat : any) => stat.base_stat)); // Assurez-vous que le constructeur de Statistics est conçu pour cela
            const pokeCry: string = cries.latest as string;

            const pokemonMoves : PokemonMove[] = [];
            for (const move of moves) {
                const pokemonMove : PokemonMove = await getPokemonMove(move.move.url) as PokemonMove;
                pokemonMoves.push(pokemonMove);
            }

            detailedPokemonBuilder
                .withId(id)
                .withName(name)
                .withWeight(weight)
                .withHeight(height)
                .withTypes(pokeTypes)
                .withAbilities(pokeAbilities)
                .withStatistics(pokeStats)
                .withCry(pokeCry)
                .withMoves(pokemonMoves);
        }

        const responseDetailedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

        if (responseDetailedPokemon.status === 200 && responseDetailedPokemon.data) {
            const {base_happiness, capture_rate, flavor_text_entries, shape, egg_groups, genera,gender_rate, growth_rate,evolution_chain} = responseDetailedPokemon.data;
            const description = flavor_text_entries.find((entry:any) => entry.language.name === "en")?.flavor_text ?? "";
            const genus = genera.find((entry:any) => entry.language.name === "en")?.genus ?? "";
            const pokeEggGroup = egg_groups.map((egg_group:any) => egg_group.name);
            detailedPokemonBuilder
                .withBaseHappiness(base_happiness)
                .withCaptureRate(capture_rate)
                .withShape(shape ? shape.name : "")
                .withDescription(description)
                .withEggGroups(pokeEggGroup)
                .withGenus(genus)
                .withGrowthRate(growth_rate.name);
            if(gender_rate !== -1){
                const pokeFemaleRate : number = gender_rate / 8 * 100;
                const pokeGenderRate : GenderRate = new GenderRate(100 - pokeFemaleRate, pokeFemaleRate)
                detailedPokemonBuilder.withGenderRate(pokeGenderRate);
            }
            await fetchEvolutionChain(evolution_chain.url,detailedPokemonBuilder);
        }

        return detailedPokemonBuilder.build();
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
        return null;
    }
};

export const fetchEvolutionChain = async (url : string, detailedPokemonBuilder : DetailedPokemonBuilder): Promise<any> => {
    try {
        const response = await axios.get(url);
        if (response.status === 200 && response.data) {
            const { chain } = response.data;
            if (chain && chain.evolves_to.length) {
                const buildChains = async (evolutionData: any): Promise<PokemonEvolutionChain> => {
                        const pokemonName: string = evolutionData.species.url;
                        const details: PokemonEvolutionDetail[] = evolutionData.evolution_details.map((detail: any) => new PokemonEvolutionDetail(detail.trigger.name));
                        const pokemon : PokemonSpecie = await getPokemonSpecie(pokemonName) as PokemonSpecie;
                        const evolutionChains : PokemonEvolutionChain[] = [];
                        const evolvesToData = evolutionData.evolves_to;
                        if (evolvesToData.length) {
                            for(const evolveToData of evolvesToData){
                                if(evolveToData){
                                    evolutionChains.push(await buildChains(evolveToData));
                                }
                            }
                        }
                        return PokemonEvolutionChain.builder()
                            .withPokemon(pokemon)
                            .withDetails(details)
                            .withEvolvesTo(evolutionChains)
                            .build();
                }
                detailedPokemonBuilder.withEvolutions(await buildChains(chain));
            }
        }
    } catch (error) {
        console.error('Failed to fetch evolution chain:', error);
    }
}

// @ts-ignore
const getPokemonMove = async (url : string): Promise<PokemonMove | null> => {
    try {
        const response = await axios.get(url);
        if(response.status === 200 && response.data){
            const data = response.data;
            const {accuracy,power,pp,priority,name,target,type,effect_entries,damage_class} = data;
            const effect : string = effect_entries.find((effect_entry:any) => effect_entry.language.name === "en")?.effect ?? "";
            return new PokemonMove(name,effect, power, accuracy,pp, priority,damage_class.name,type.name,target.name);
        }
    }
    catch (error) {
        console.error('Failed to fetch evolution chain:', error);
        return null;
    }
}

export const getPokemonCount = async (): Promise<number> => {
    try {
        const response = await fetchData("https://pokeapi.co/api/v2/pokemon-species/?limit=0");
        if(response){
            return response.count;
        }
    }
    catch (error) {
        console.error('Failed to fetch evolution chain:', error);
    }
    return 0;
}


