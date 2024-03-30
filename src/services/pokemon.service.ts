import axios from "axios";
import Pokemon from "../models/Pokemon";
import DetailedPokemon, {DetailedPokemonBuilder} from "../models/DetailledPokemon";
import GenderRate from "../models/GenderRate";
import {PokemonEvolutionChain} from "../models/PokemonEvolutionChain";
import {PokemonEvolutionDetail} from "../models/PokemonEvolutionDetail";
import {PokemonMove} from "../models/PokemonMove";
import PokemonSpecie from "../models/PokemonSpecie";
import {PokemonStatistics} from "../models/PokemonStatistics";


export const fetchData = async (url: string) : Promise<any> => {
    try {
        const response = await axios.get(url);
        if (response.status === 200 && response.data) {
            return response.data;
        }
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
    return null;
}

export const getAllPokemons = async (): Promise<Pokemon[]> => {
    const pokemonCount : number = await getPokemonCount();
    const pokemonPromises = [];
    for (let index = 1; index <= pokemonCount; index++) {
        pokemonPromises.push(getPokemon(index));
    }
    const allPokemonsResults = await Promise.all(pokemonPromises);
    return allPokemonsResults.filter((pokemon): pokemon is Pokemon => pokemon !== null);
};

export const getPokemon = async (id: number | string) : Promise<Pokemon | null> => {
    const response = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (response) {
        const {id, name, types} = response;
        return new Pokemon(id, name, types.map((apiType:any) => apiType.type.name));
    }
    return null;
};

export const getPokemonSpecie = async (url: string) : Promise<PokemonSpecie | null> => {
    const response = await fetchData(url);
    if (response) {
        const {id, name} = response;
        return new PokemonSpecie(id, name);
    }
    return null;
};

export const getDetailedPokemon = async (id: number) : Promise<DetailedPokemon | null> => {
    try {
        const detailedPokemonBuilder : DetailedPokemonBuilder = new DetailedPokemonBuilder();

        const [responsePokemon, responseDetailedPokemon] = await Promise.all([
            fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`),
            fetchData(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        ]);

        if (responsePokemon) {
            const {id, name, types, abilities, stats, weight, height, cries, moves} = responsePokemon;

            const [pokemonMoves, pokemonLocationsArea] = await Promise.all([
                Promise.all(moves.map((move: { move: { url: string; }; }) => getPokemonMove(move.move.url))),
                getPokemonLocationsArea(id)
            ]);

            detailedPokemonBuilder
                .withId(id)
                .withName(name)
                .withWeight(weight)
                .withHeight(height)
                .withTypes(types.map((apiType: { type: { name: any; }; }) => apiType.type.name))
                .withAbilities(abilities.map((ability: { ability: { name: any; }; }) => ability.ability.name))
                .withStatistics(new PokemonStatistics(stats.map((stat: { base_stat: any; }) => stat.base_stat)))
                .withCry(cries.latest)
                .withMoves(pokemonMoves)
                .withLocations(pokemonLocationsArea);
        }

        if (responseDetailedPokemon) {
            const {base_happiness, capture_rate, flavor_text_entries, shape, egg_groups, genera, gender_rate, growth_rate, evolution_chain} = responseDetailedPokemon;
            const description = flavor_text_entries.find((entry: any) : boolean => entry.language.name === "en")?.flavor_text ?? "";
            const genus = genera.find((entry: any) : boolean => entry.language.name === "en")?.genus ?? "";
            const pokeEggGroup = egg_groups.map((egg_group: any) => egg_group.name);
            detailedPokemonBuilder
                .withBaseHappiness(base_happiness)
                .withCaptureRate(capture_rate)
                .withShape(shape ? shape.name : "")
                .withDescription(description)
                .withEggGroups(pokeEggGroup)
                .withGenus(genus)
                .withGrowthRate(growth_rate.name);
            if (gender_rate !== -1) {
                const pokeFemaleRate: number = gender_rate / 8 * 100;
                const pokeGenderRate: GenderRate = new GenderRate(100 - pokeFemaleRate, pokeFemaleRate);
                detailedPokemonBuilder.withGenderRate(pokeGenderRate);
            }
            await fetchEvolutionChain(evolution_chain.url, detailedPokemonBuilder);
        }
        return detailedPokemonBuilder.build();
    } catch (error) {
        console.error('Failed to fetch detailed Pokemon:', error);
        return null;
    }
};


export const getPokemonCount = async () : Promise<number> => {
    const response = await fetchData("https://pokeapi.co/api/v2/pokemon-species/?limit=0");
    return response ? response.count : 0;
}

export const fetchEvolutionChain = async (url : string, detailedPokemonBuilder : DetailedPokemonBuilder): Promise<any> => {
    try {
        const response = await fetchData(url);
        if (response && response.chain) {
            const { chain } = response;
            if (chain && chain.evolves_to.length) {
                const buildChains = async (evolutionData: any): Promise<PokemonEvolutionChain> => {
                    const pokemonName: string = evolutionData.species.url;
                    const details: PokemonEvolutionDetail[] = evolutionData.evolution_details.map((detail: any) => new PokemonEvolutionDetail(detail.trigger.name));
                    const evolvesToPromises = evolutionData.evolves_to.map((evolveToData: any) => buildChains(evolveToData));
                    const [pokemon, evolutionChains] = await Promise.all([
                        getPokemonSpecie(pokemonName),
                        Promise.all(evolvesToPromises)
                    ]);
                    return PokemonEvolutionChain.builder()
                        .withPokemon(pokemon as PokemonSpecie)
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
};

export const getPokemonMove = async (url: string): Promise<PokemonMove | null> => {
    const data = await fetchData(url);
    if (data) {
        const {accuracy, power, pp, priority, name, target, type, effect_entries, damage_class} = data;
        const effect: string = effect_entries.find((effect_entry: any) : boolean => effect_entry.language.name === "en")?.effect ?? "";
        return new PokemonMove(name, effect, power, accuracy, pp, priority, damage_class.name, type.name, target.name);
    }
    return null;
};

export const getPokemonLocationsArea = async (id : number) : Promise<string[]> => {
    const response = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
    return response ? response.map((locationArea : any) => locationArea.location_area.name) : [];
}


