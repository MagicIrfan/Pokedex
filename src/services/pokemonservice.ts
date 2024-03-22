import axios from "axios";
import Pokemon from "../models/pokemon";
import PokemonType from "../models/pokemonType";

export const getPokemon = async (id: number): Promise<Pokemon | null> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.status === 200 && response.data) {
            let data = response.data;
            const {id, name, types} = data;
            const pokeTypes: PokemonType[] = types.map((apiType: { type: { name: string; }; }) => new PokemonType(apiType.type.name));
            return new Pokemon(id, name, pokeTypes);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
};

export const getPokemonDetails = async (id: number): Promise<Pokemon | null> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (response.status === 200 && response.data) {
            let data = response.data;
            const {id, name, types} = data;
            const pokeTypes: PokemonType[] = types.map((apiType: { type: { name: string; }; }) => new PokemonType(apiType.type.name));
            return new Pokemon(id, name, pokeTypes);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
    }
    return null;
}
