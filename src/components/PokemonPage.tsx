import React, {useEffect} from 'react';
import '../assets/stylesheets/pokemonPage.css';
import {faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {pokenumber} from "../utils/string";
import {Tabs} from "./tabs/Tabs";
import {Image} from "./Image";
import {ImageContainer} from "./ImageContainer";
import {PokemonTypes} from "./PokemonTypes";
import PokemonType from "../models/pokemonType";

const PokemonPage : React.FC = () => {
    const {id} = useParams();
    let audio : HTMLAudioElement;
    const navigate : NavigateFunction = useNavigate();
    const previousId : number = Number(id) - 1;
    const nextId : number = Number(id) + 1;

    useEffect(() : () => void => {
        const pokemonId : number = Number(id);
        if (isNaN(pokemonId)) {
            console.warn('Invalid Pokémon ID');
            return () : void => {};
        }

        audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonId}.ogg`);

        return () : void => {
            if (audio) {
                audio.pause();
                audio.src = "";
            }
        };
    }, [id])


    const playPokemonCry = async () : Promise<void> => {
        await audio.play();
    }

    function changePokemon(number: number) : void {
        navigate(`/${number}`);
    }

    return (
        <div className={"pokemon-wrapper grass"}>
            <div className={"pokemon-container"}>
                <div className={"header"}>
                    <div className={"left"}>
                        <FontAwesomeIcon className={"return-button"} icon={faArrowLeft} onClick={() => navigate("/")}/>
                        <h1>Bulbasaur   <FontAwesomeIcon className={"volume"} icon={faVolumeHigh} onClick={() => playPokemonCry()}/></h1>
                        <PokemonTypes types={[new PokemonType("grass"), new PokemonType("poison")]}/>
                    </div>
                    <div className={"right"}>
                        <h1>{pokenumber(1)}</h1>
                        <h3>Seed Pokémon</h3>
                        <h3>Quadruped</h3>
                    </div>
                </div>
                <div className={"pokemon-header"}>
                    <div className={"pokemon-main-image"}>
                        {previousId >= 1 &&
                            <ImageContainer image={<Image className={"image-poke-hidden"}
                                                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(id) - 1}.png`}
                                                          width={150} height={150}
                                                          alt={""}/>} className={"pokemon-previous-image"} onClick={() => changePokemon(Number(id) - 1)}/>
                        }
                        <ImageContainer image={<Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            width={225} height={225} alt="pokemon"/>} className={"pokemon-main-image-circle"} onClick={() => changePokemon(Number(id) - 1)}/>
                        {nextId <= 151 &&
                            <ImageContainer image={<Image className={"image-poke-hidden"}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(id) + 1}.png`}
                            width={150} height={150}
                            alt={""}/>} className={"pokemon-next-image"} onClick={() => changePokemon(Number(id) + 1)}/>}
                    </div>
                </div>
                <div className={"pokemon-details"}>
                    <Tabs/>
                </div>
            </div>
        </div>
    );
}

export default PokemonPage;