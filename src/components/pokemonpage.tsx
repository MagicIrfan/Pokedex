import React, {useState} from 'react';
import '../assets/stylesheets/pokemonPage.css';
import {faCircleInfo, faChartSimple,faAnglesUp, faHand, faMap, faWeightHanging, faRuler, faMars, faVenus, faVolumeHigh, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NavigateFunction, useNavigate, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {capitalize, pokenumber} from "../utils/string";

const PokemonPage : React.FC = () => {
    const {id} = useParams();
    const [activeTab, setActiveTab] = useState("about");
    const audio : HTMLAudioElement = new Audio("https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg");
    const navigate : NavigateFunction = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: string) : void => {
        setActiveTab(newValue);
    };

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
                    <div className="pokemon-bar">
                        <button onClick={(event) => handleChange(event, 'about')}>
                            <span className={"bar-title"}>
                                <FontAwesomeIcon className={"tab-icon"} icon={faCircleInfo}/> <p>About</p>
                            </span>
                        </button>
                        <button onClick={(event) => handleChange(event, 'stats')}>
                            <span className={"bar-title"}>
                                <FontAwesomeIcon className={"tab-icon"} icon={faChartSimple}/> <p>Stats</p>
                            </span>
                        </button>
                        <button onClick={(event) => handleChange(event, 'evolution')}>
                            <span className={"bar-title"}>
                                <FontAwesomeIcon className={"tab-icon"} icon={faAnglesUp}/> <p>Evolution</p>
                            </span>
                        </button>
                        <button onClick={(event) => handleChange(event, 'moves')}>
                            <span className={"bar-title"}>
                                <FontAwesomeIcon className={"tab-icon"} icon={faHand}/> <p>Moves</p>
                            </span>
                        </button>
                        <button onClick={(event) => handleChange(event, 'location')}>
                            <span className={"bar-title"}>
                                <FontAwesomeIcon className={"tab-icon"} icon={faMap}/> <p>Location</p>
                            </span>
                        </button>
                    </div>
                    <div style={{display: activeTab === 'about' ? 'block' : 'none'}}>
                        <p className={"poke-description"}>
                            A strange seed was planted on its back at birth. The plant sprouts and grows with this
                            POKéMON.
                            His main color is green and lives in grassland.
                        </p>
                        <div className={"poke-measurements"}>
                            <div className={"poke-height"}>
                                <p className={"poke-measurements-title"}><FontAwesomeIcon icon={faRuler}/> Height</p>
                                <p>26 kg</p>
                            </div>
                            <div className={"poke-weight"}>
                                <p className={"poke-measurements-title"}><FontAwesomeIcon
                                    icon={faWeightHanging}/> Weight
                                </p>
                                <p>0.6 m</p>
                            </div>
                        </div>
                        <div className={"poke-characteristic"}>
                            <p className={"poke-characteristic-name"}>Abilities</p>
                            <p className={"poke-ability"}>Overgrow</p>
                            <p className={"poke-ability"}>Overgrow</p>
                        </div>
                        <div className={"poke-characteristic"}>
                            <p className={"poke-characteristic-name"}>Growth rate</p>
                                <p>Slow</p>
                            </div>
                            <div className={"poke-characteristic"}>
                                <p className={"poke-characteristic-name"}>Capture rate</p>
                                <p>35</p>
                            </div>
                            <div className={"poke-characteristic"}>
                                <p className={"poke-characteristic-name"}>Base happiness</p>
                                <p>50%</p>
                            </div>
                            <div className={"poke-characteristic"}>
                                <p className={"poke-characteristic-name"}>Egg groups</p>
                                <p className={"poke-ability"}>Monster</p>
                                <p className={"poke-ability"}>Plant</p>
                            </div>
                            <div className={"poke-characteristic"}>
                                <p className={"poke-characteristic-name"}>Gender rate</p>
                                <p><FontAwesomeIcon icon={faMars}/> 87,5%</p>
                                <p><FontAwesomeIcon icon={faVenus}/> 12,5%</p>
                            </div>
                        </div>

                        <div style={{display: activeTab === 'stats' ? 'block' : 'none'}}>
                            <h2>Paris</h2>
                            <p>Paris is the capital of France.</p>
                        </div>

                        <div style={{display: activeTab === 'evolution' ? 'block' : 'none'}}>
                            <h2>Tokyo</h2>
                            <p>Tokyo is the capital of Japan.</p>
                        </div>
                        <div style={{display: activeTab === 'moves' ? 'block' : 'none'}}>
                            <h2>Paris</h2>
                            <p>Paris is the capital of France.</p>
                        </div>
                        <div style={{display: activeTab === 'location' ? 'block' : 'none'}}>
                            <h2>Tokyo</h2>
                            <p>Tokyo is the capital of Japan.</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonPage;