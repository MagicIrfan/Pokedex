import React from 'react';
import Pokemon from "./pokemon";
const Types : React.FC = () => {
    const numberOfTimes = 100;

    const renderMyComponentMultipleTimes = () => {
        const components = [];

        for (let i = 0; i < numberOfTimes; i++) {
            components.push(<button key={i} className={"type-button"}>Oui</button>);
        }

        return components;
    };
    return (
        <div className={"types"}>
            <h1>Types</h1>
            <div className={"type-list"}>
                {renderMyComponentMultipleTimes()}
            </div>
        </div>
    );
}

export default Types;