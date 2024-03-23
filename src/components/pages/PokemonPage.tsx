import React, {useEffect, useState} from 'react';
import '../../assets/stylesheets/pokemonPage.css';
import {faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {capitalize, pokenumber} from "../../utils/string";
import {Tabs} from "../tabs/Tabs";
import {Image} from "../Image";
import {ImageContainer} from "../ImageContainer";
import {PokemonTypes} from "../PokemonTypes";
import DetailedPokemon from "../../models/DetailledPokemon";
import {getDetailedPokemon} from "../../services/pokemon.service";

const PokemonPage : React.FC = () => {
    const {id} = useParams();
    const pokemonId : number = Number(id);
    const [pokemon, setPokemon] = useState<DetailedPokemon>();
    let audio : HTMLAudioElement;
    const navigate : NavigateFunction = useNavigate();
    const previousId : number = pokemonId - 1;
    const nextId : number = pokemonId + 1;

    useEffect((): () => void => {

        const fetchPokemon = async () => {
            if (!isNaN(pokemonId)) {
                try {
                    const data = await getDetailedPokemon(pokemonId);
                    if (data) {
                        console.log(data);
                        setPokemon(data);
                    }
                } catch (error) {
                    console.error('Failed to fetch Pokemon:', error);
                }


                audio = new Audio(pokemon?.cry);

                return () : void => {
                    audio.pause();
                    audio.src = "";
                };
            } else {
                console.warn('Invalid Pokémon ID');
            }
        };

        const cleanup = fetchPokemon();

        return () => {
            cleanup.then(cleanupFunc => cleanupFunc?.());
        };
    }, [id]);


    const playPokemonCry = async () : Promise<void> => {
        await audio.play();
    }

    function changePokemon(number: number) : void {
        navigate(`/${number}`);
    }

    return (
        <>
            {pokemon && <div className={`pokemon-wrapper ${pokemon.types[0]}`}>
                <div className={"pokemon-container"}>
                    <div className={"header"}>
                        <div className={"left"}>
                            <FontAwesomeIcon className={"return-button"} icon={faArrowLeft} onClick={() => navigate("/")}/>
                            <h1>{capitalize(pokemon.name)}   <FontAwesomeIcon className={"volume"} icon={faVolumeHigh} onClick={() => playPokemonCry()}/></h1>
                            <PokemonTypes types={pokemon.types}/>
                        </div>
                        <div className={"right"}>
                            <h1>{pokenumber(pokemonId)}</h1>
                            <h3>{pokemon.genus}</h3>
                            <h3>{capitalize(pokemon.shape)}</h3>
                        </div>
                    </div>
                    <div className={"pokemon-header"}>
                        <div className={"pokemon-main-image"}>
                            {previousId >= 1 &&
                                <ImageContainer image={<Image className={"image-poke-hidden"}
                                                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${previousId}.png`}
                                                              width={150} height={150}
                                                              alt={"pokemon"}/>} className={"pokemon-previous-image"} onClick={() => changePokemon(previousId)}/>
                            }
                            <ImageContainer image={<Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                width={225} height={225} alt="pokemon"/>} className={"pokemon-main-image-circle"} onClick={() => changePokemon(previousId)}/>
                            {nextId <= 151 &&
                                <ImageContainer image={<Image className={"image-poke-hidden"}
                                                              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nextId}.png`}
                                                              width={150} height={150}
                                                              alt={""}/>} className={"pokemon-next-image"} onClick={() => changePokemon(nextId)}/>}
                        </div>
                    </div>
                    <div className={"pokemon-details"}>
                        <Tabs pokemon={pokemon}/>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default PokemonPage;