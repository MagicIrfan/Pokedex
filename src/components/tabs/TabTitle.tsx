import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

interface TabTitleProps{
  icon:IconDefinition,
  title:string,
  className?:string,
  onClick:() => void
}

export const TabTitle : React.FC<TabTitleProps> = ({icon,title,className, onClick}) => {

    return (
        <button onClick={onClick}>
            <span className={`bar-title ${className}`}>
                <FontAwesomeIcon className={"tab-icon"} icon={icon}/> <p>{title}</p>
            </span>
        </button>
    );
}