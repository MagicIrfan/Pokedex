import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {getTypes} from "../services/typeservice";
import PokeType from "../models/pokeType";
import {getPokemon} from "../services/pokemonservice";
import Pokemon from "../models/pokemon";

interface TypeProps {
    setTypeName: Dispatch<SetStateAction<string>>;
}
const Types : React.FC<TypeProps> = ({setTypeName}) => {

    const [types, setTypes] = useState<Array<{ type: PokeType, isSelected: boolean }>>([])

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
            const fetchTypes : PokeType[] = await getTypes();
            const all : PokeType = new PokeType("all");
            const temp : { type: PokeType, isSelected: boolean }[] = [{type:all, isSelected:true}];
            temp.push(...fetchTypes.map((type: PokeType) => ({
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

export default Types;