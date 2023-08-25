import React, {useEffect, useState} from 'react';
import Pokemon from "./pokemon";
import {getTypes} from "../services/typeservice";
import PokeType from "../models/type";
const Types : React.FC = () => {

    const [types, setTypes] = useState<PokeType[]>([]);

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
    const listItems = types.map(type => <button className={"type-button " + (type.name)}>{type.name.toUpperCase()}</button>);
    return (
        <div className={"types"}>
            <h1>Types</h1>
            <div className={"type-list"}>
                {listItems}
            </div>
        </div>
    );
}

export default Types;