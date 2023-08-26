import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Pokemon from "./pokemon";
import {getTypes} from "../services/typeservice";
import PokeType from "../models/type";

interface TypeProps {
    setTypeName: Dispatch<SetStateAction<string>>;
}
const Types : React.FC<TypeProps> = ({setTypeName}) => {

    const [types, setTypes] = useState<PokeType[]>([]);

    const onClickType = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setTypeName(event.currentTarget.value)
    }

    useEffect(() => {
        const init = async () => {
            const fetchTypes = await getTypes()
            if(fetchTypes.status === 200){
                let temp : PokeType[] = [];
                fetchTypes.data.results.forEach((type : PokeType) =>  {
                    temp.push(type)
                });
                setTypes(temp)
            }
        }
        init();
    }, [types]);
    const listItems = [<button key="all" value="" className={"type-button all"}>ALL</button>];
    listItems.push(
        ...types.map(type => (
            <button onClick={onClickType} key={type.name} value={`${type.name}`} className={`type-button ${type.name}`}>
                {type.name.toUpperCase()}
            </button>
        ))
    );
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