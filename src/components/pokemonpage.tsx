import React from 'react';
import '../assets/stylesheets/pokemonPage.css';
import {faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {pokenumber} from "../utils/string";
import {Tabs} from "./tabs/Tabs";

const PokemonPage : React.FC = () => {
    const {id} = useParams();
    const audio : HTMLAudioElement = new Audio("https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg");
    const navigate : NavigateFunction = useNavigate();

    const playPokemonCry = async () : Promise<void> => {
        await audio.play();
    }

    return (
        <div className={"pokemon-wrapper grass"}>
            <div className={"pokemon-container"}>
                <div className={"header"}>
                    <div className={"left"}>
                        <FontAwesomeIcon className={"return-button"} icon={faArrowLeft} onClick={() => navigate("/")}/>
                        <h1>Bulbasaur   <FontAwesomeIcon className={"volume"} icon={faVolumeHigh} onClick={() => playPokemonCry()}/></h1>
                        <div className={"poke-types"}>
                            <p className={"type grass"}>
                                Grass
                            </p>
                            <p className={"type grass"}>
                                Poison
                            </p>
                        </div>
                    </div>
                    <div className={"right"}>
                        <h1>{pokenumber(1)}</h1>
                        <h3>Seed Pokémon</h3>
                        <h3>Quadruped</h3>
                    </div>
                </div>


                <div className={"pokemon-header"}>
                    <div className={"pokemon-main-image"}>
                        <div className={"pokemon-main-image-circle"}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                width={225} height={225} alt="pokemon"/>
                            <img className={"image-poke-hidden"}
                                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(id)+1}.png`}
                                 width={150} height={150}
                                 alt={""}/>
                        </div>
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