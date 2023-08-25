import axios from "axios";

const getTypes = () => {
    return axios.get(`https://pokeapi.co/api/v2/type`)
}
