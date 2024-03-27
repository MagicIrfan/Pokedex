import axios from "axios";

export const getTypes = async (): Promise<string[]> => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type`);
        if (response.status === 200 && response.data) {
            const { results } = response.data;
            return results.map((element : {name:string}) => element.name);
        }
    } catch (error) {
        console.error('Failed to fetch Pokemon Types:', error);
    }
    return [];
};
