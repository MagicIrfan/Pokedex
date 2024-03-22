import React from 'react';
import '../assets/stylesheets/pokemonPage.css';
import {faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {pokenumber} from "../utils/string";
import {Tabs} from "./tabs/Tabs";
import {Image} from "./Image";

const PokemonPage : React.FC = () => {
    const {id} = useParams();
    const audio : HTMLAudioElement = new Audio("https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg");
    const navigate : NavigateFunction = useNavigate();

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
                        <div className={"poke-types"}>
                            <p className={"type grass"}>
                                Grass
                            </p>
                            <p className={"type poison"}>
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
                        {(Number(id) - 1) >= 1 && <div className={"pokemon-previous-image"} onClick={() => changePokemon(Number(id) - 1)}>
                            <Image className={"image-poke-hidden"}
                                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(id) - 1}.png`}
                                   width={150} height={150}
                                   alt={""}/>
                        </div>}
                        <div className={"pokemon-main-image-circle"}>
                            <Image
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                width={225} height={225} alt="pokemon"/>
                        </div>
                        {(Number(id) + 1) <= 151 && <div className={"pokemon-next-image"} onClick={() => changePokemon(Number(id) + 1)}>
                            <Image className={"image-poke-hidden"}
                                   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Number(id) + 1}.png`}
                                   width={150} height={150}
                                   alt={""}/>
                        </div>}
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