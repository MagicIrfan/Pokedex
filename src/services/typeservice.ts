import axios from "axios";

export const getTypes = () => {
    return axios.get(`https://pokeapi.co/api/v2/type`)
}
