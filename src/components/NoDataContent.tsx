import React from "react";

interface NoDataContentProps{
    text:string
}

export const NoDataContent : React.FC<NoDataContentProps> = ({text}) => {
    return (
        <div style={{
            textAlign: "center",
            padding: '5em'
        }}>
            <h1>{text}</h1>
        </div>
    );
}