import React from 'react';
import {getTypes} from "../services/pokemonType.service";
import {useQuery} from "react-query";

interface PokemonTypeProps {
    setTypeName: React.Dispatch<React.SetStateAction<string>>;
}

export const PokemonTypeList: React.FC<PokemonTypeProps> = ({ setTypeName }) => {
    const [selectedType, setSelectedType] = React.useState<string>('all');

    const { data: types } = useQuery('pokemonTypes', getTypes, {
        select: (data: string[]) => ['all', ...data]
    });

    const onClickType = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const typeName: string = event.currentTarget.value;
        setSelectedType(typeName)
        setTypeName(typeName);
    };

    return (
        <div className="types">
            <h1>Choose a type</h1>
            <div className="type-list">
                {types?.map((type : string) => (
                    <button
                        onClick={onClickType}
                        key={type}
                        value={type}
                        className={`type-button ${type} ${type === selectedType ? 'selected' : ''}`}
                    >
                        {type.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};