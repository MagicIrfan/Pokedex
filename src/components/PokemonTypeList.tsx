import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {getTypes} from "../services/typeservice";
import PokemonType from "../models/pokemonType";

interface TypeProps {
    setTypeName: Dispatch<SetStateAction<string>>;
}
export const PokemonTypeList : React.FC<TypeProps> = ({setTypeName}) => {

    const [types, setTypes] = useState<Array<{ type: PokemonType, isSelected: boolean }>>([])

    const onClickType = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const typeName = event.currentTarget.value;

        // Create a new array with updated isSelected property
        const updatedTypes = types.map(item => ({
            type: item.type,
            isSelected: item.type.name === typeName
        }));

        setTypeName(typeName);
        setTypes(updatedTypes);
    }

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            const fetchTypes : PokemonType[] = await getTypes();
            const all : PokemonType = new PokemonType("all");
            const temp : { type: PokemonType, isSelected: boolean }[] = [{type:all, isSelected:true}];
            temp.push(...fetchTypes.map((type: PokemonType) => ({
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
            key={type.type.name}
            value={type.type.name}
            className={`type-button ${type.type.name} ${type.isSelected ? 'selected' : ''}`}
        >
            {type.type.name.toUpperCase()}
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