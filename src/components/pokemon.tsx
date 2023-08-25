import React from 'react';
import image from "../assets/images/image.png"

const Pokemon : React.FC = () => {
    return (
        <div className="pokemon">
            <p className={"poke-number"}>#001</p>
            <h2>Pikachu</h2>
            <div className={"poke-body"}>
                <div className={"poke-types"}>
                    <p className={"type"}>Oui</p>
                    <p className={"type"}>Oui</p>
                </div>
                <div className={"poke-image"}>
                    <img src={image} width={100} height={100} alt={"pokemon"}/>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;