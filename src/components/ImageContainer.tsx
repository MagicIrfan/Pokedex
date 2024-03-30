import React from "react";

interface ImageContainerProps{
    className?:string;
    image:React.ReactNode;
    onClick?:() => void;
}
export const ImageContainer : React.FC<ImageContainerProps> = ({className = "", image, onClick = () => {}}) => {
    return (
        <div className={className} onClick={onClick}>
            {image}
        </div>
    );
}