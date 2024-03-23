import React, {useState} from "react";
import {TabTitle} from "./TabTitle";
import {
    faAnglesUp,
    faChartSimple,
    faCircleInfo,
    faHand,
    faMap
} from "@fortawesome/free-solid-svg-icons";
import {ActiveTab} from "./ActiveTab";
import DetailedPokemon from "../../models/DetailledPokemon";

interface TabsProps{
    pokemon:DetailedPokemon;
}

export const Tabs : React.FC<TabsProps> = ({pokemon}) => {
    const [activeTab, setActiveTab] = useState("about");

    const handleChange = (newValue: string) : void => {
        setActiveTab(newValue);
    };

    const tabIsActive = (tab:string) : boolean => {
        return tab === activeTab;
    }

    return (
        <>
            <div className="pokemon-bar">
                <TabTitle icon={faCircleInfo} title={"About"} className={tabIsActive("about") ? "tab-active" : ""} onClick={() => handleChange('about')}/>
                <TabTitle icon={faChartSimple} title={"Stats"} className={tabIsActive("stats") ? "tab-active" : ""} onClick={() => handleChange('stats')}/>
                <TabTitle icon={faAnglesUp} title={"Evolution"} className={tabIsActive("evolution") ? "tab-active" : ""} onClick={() => handleChange('evolution')}/>
                <TabTitle icon={faHand} title={"Moves"} className={tabIsActive("moves") ? "tab-active" : ""} onClick={() => handleChange('moves')}/>
                <TabTitle icon={faMap} title={"Location"} className={tabIsActive("location") ? "tab-active" : ""} onClick={() => handleChange('location')}/>
            </div>
            <ActiveTab activeTab={activeTab} pokemon={pokemon}/>
        </>
    );
}