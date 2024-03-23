import React, {ReactElement, useEffect, useState} from "react";
import {PokemonEvolutionChain} from "../models/PokemonEvolutionChain";
import {Image} from "./Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface EvolutionSpecieProps{
    evolutions:PokemonEvolutionChain
}

export const EvolutionSpecie : React.FC<EvolutionSpecieProps> = ({evolutions}) => {
    const canEvolveFirstStage : boolean = evolutions.evolvesTo.length !== 0;
    const [evolveComponents, setEvolveComponents] = useState<ReactElement>();

    const canEvolveSecondStage = () : boolean => {
        return canEvolveFirstStage && evolutions.evolvesTo.some(evolveTo => evolveTo.evolvesTo.length !== 0);
    };

    useEffect(() : void => {
        if(canEvolveFirstStage) {
            const components : JSX.Element[] = evolutions.evolvesTo.flatMap((firstStageEvolution) => {
                // First stage evolution component
                const firstStageComponent = (
                    <div key={firstStageEvolution.pokemon.id} style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                        <div className={"evolution-method"}>
                            <FontAwesomeIcon style={{fontSize: '30px'}} icon={faArrowRight}/>
                        </div>
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${firstStageEvolution.pokemon.id}.png`}
                            width={200} height={200}/>
                    </div>
                );

                // Second stage evolution components
                const secondStageComponents : JSX.Element[] = firstStageEvolution.evolvesTo.map((secondStageEvolution) => (
                    <div key={secondStageEvolution.pokemon.id} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                        <div className={"evolution-method"}>
                            <FontAwesomeIcon style={{fontSize: '30px'}} icon={faArrowRight}/>
                        </div>
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${secondStageEvolution.pokemon.id}.png`}
                            width={200} height={200}/>
                    </div>
                ));

                const firstStageFinalComponent: ReactElement = (
                    <React.Fragment>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                            {firstStageComponent}
                        </div>
                    </React.Fragment>
                );

                const secondStageFinalComponent: ReactElement = (
                    <React.Fragment>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            justifyContent: 'center'
                        }}>
                            {secondStageComponents}
                        </div>
                    </React.Fragment>
            );

            return [firstStageFinalComponent, canEvolveSecondStage() ? secondStageFinalComponent : <></>];
            });

            const finalComponent: ReactElement = (
                <React.Fragment>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                        {components}
                    </div>
                </React.Fragment>
            );
            setEvolveComponents(finalComponent);
        }
    }, [canEvolveFirstStage, evolutions.evolvesTo]);

    return (
        <>
            {canEvolveFirstStage &&
                <div className={"evolution-specie"}>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolutions.pokemon.id}.png`}
                        width={200} height={200}/>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        width:'100%'
                    }}>
                        {evolveComponents}
                    </div>
                </div>
            }
        </>

    );
}