import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {getTypes} from "../services/pokemonType.service";

interface PokemonTypeProps {
    setTypeName: Dispatch<SetStateAction<string>>;
}
export const PokemonTypeList : React.FC<PokemonTypeProps> = ({setTypeName}) => {

    const [types, setTypes] = useState<Array<{ type: string, isSelected: boolean }>>([])

    const onClickType = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const typeName = event.currentTarget.value;

        // Create a new array with updated isSelected property
        const updatedTypes = types.map(item => ({
            type: item.type,
            isSelected: item.type === typeName
        }));

        setTypeName(typeName);
        setTypes(updatedTypes);
    }

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            const fetchTypes : string[] = await getTypes();
            const all : string = "all";
            const temp : { type: string, isSelected: boolean }[] = [{type:all, isSelected:true}];
            temp.push(...fetchTypes.map((type: string) => ({
                type,
                isSelected: false
            })));
            setTypes(temp);
        }
        fetchPokemonTypes();
    }, []);

    const listItems = types.map(type => (
        <button
            onClick={onClickType}
            key={type.type}
            value={type.type}
            className={`type-button ${type.type} ${type.isSelected ? 'selected' : ''}`}
        >
            {type.type.toUpperCase()}
        </button>
    ));
    return (
        <div className={"types"}>
            <h1>Choose a type</h1>
            <div className={"type-list"}>
                {listItems}
            </div>
        </div>
    );
}