import React, {useEffect, useRef, createContext} from 'react';
import '../assets/stylesheets/pokemonPage.css';
import {faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {pokeNumber, prettier} from "../utils/string";
import {Tabs} from "../components/tabs/Tabs";
import {Image} from "../components/Image";
import {ImageContainer} from "../components/ImageContainer";
import {PokemonTypes} from "../components/PokemonTypes";
import DetailedPokemon from "../models/DetailledPokemon";
import {getDetailedPokemon, getPokemonCount} from "../services/pokemon.service";
import {useQuery} from "react-query";
export const PokemonContext = createContext<DetailedPokemon | null>(null) as React.Context<DetailedPokemon>;
const PokemonPage : React.FC = () => {
    const {id} = useParams();
    const pokemonId : number = Number(id);
    const audio = useRef(new Audio());
    const navigate : NavigateFunction = useNavigate();
    const previousId : number = pokemonId - 1;
    const nextId : number = pokemonId + 1;

    const { data: pokemon} = useQuery(
        ["pokemon",pokemonId],
        () => getDetailedPokemon(pokemonId),
        {
            keepPreviousData: true
        }
    );
    const { data: pokemonCount} = useQuery('pokemonCount', getPokemonCount);

    useEffect(() => {
        const currentAudio = audio.current;
        if (pokemon?.cry) {
            currentAudio.src = pokemon.cry;
        }

        return () : void => {
            currentAudio.pause();
            currentAudio.src = "";
        };
    }, [pokemon?.cry]);

    const playPokemonCry = async () : Promise<void> => {
        await audio.current.play();
    }

    function changePokemon(number: number) : void {
        navigate(`/${number}`);
    }

    return (
        <>
            {pokemon &&
                <PokemonContext.Provider value={pokemon}>
                    <div className={`pokemon-wrapper ${pokemon.types[0]}`}>
                        <div className={"pokemon-container"}>
                            <div className={"header"}>
                                <div className={"left"}>
                                    <FontAwesomeIcon className={"return-button"} icon={faArrowLeft} onClick={() => navigate("/")}/>
                                    <h1 style={{
                                        fontSize:'45px'
                                    }}>{prettier(pokemon.name)}   <FontAwesomeIcon className={"volume"} icon={faVolumeHigh} onClick={() => playPokemonCry()}/></h1>
                                    <PokemonTypes style={{
                                        fontSize:'20px'
                                    }} types={pokemon.types} colored={true}/>
                                </div>
                                <div className={"right"}>
                                    <h1 style={{
                                        fontSize:'45px'
                                    }}>{pokeNumber(pokemonId)}</h1>
                                    <h2>{prettier(pokemon.genus)}</h2>
                                    <h2>{prettier(pokemon.shape)}</h2>
                                </div>
                            </div>
                            <div className={"pokemon-header"}>
                                <div className={"pokemon-main-image"}>
                                    {previousId >= 1 &&
                                        <ImageContainer image={<Image className={"image-poke-hidden"}
                                                                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${previousId}.png`}
                                                                      width={175} height={175}
                                                                      alt={"pokemon"}/>} className={"pokemon-previous-image"} onClick={() => changePokemon(previousId)}/>
                                    }
                                    <ImageContainer image={<Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                        width={275} height={275} alt="pokemon" className={"pokemon-image"}/>} className={"pokemon-main-image-circle"} onClick={() => changePokemon(previousId)}/>
                                    {nextId <= (pokemonCount || 1) &&
                                        <ImageContainer image={<Image className={"image-poke-hidden"}
                                                                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nextId}.png`}
                                                                      width={175} height={175}
                                                                      alt={""}/>} className={"pokemon-next-image"} onClick={() => changePokemon(nextId)}/>}
                                </div>
                            </div>
                            <div className={"pokemon-details"}>
                                <Tabs/>
                            </div>
                        </div>
                    </div>
                </PokemonContext.Provider>
            }
        </>
    );
}

export default PokemonPage;