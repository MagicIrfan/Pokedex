import axios from "axios";

const getPokemon = (id:number) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}

const getPokemons = () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
}