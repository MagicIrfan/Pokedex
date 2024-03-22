import axios from "axios";
import PokemonType from "../models/pokemonType";

interface ApiResponseType {
    results: Array<{ name: string }>;
}

export const getTypes = async (): Promise<PokemonType[]> => {
    try {
        const response = await axios.get<ApiResponseType>(`https://pokeapi.co/api/v2/type`);
        if (response.status === 200 && response.data) {
            const { results } = response.data;
            return results.map(element => new PokemonType(element.name));
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon Types:', error);
    }
    return [];
};
