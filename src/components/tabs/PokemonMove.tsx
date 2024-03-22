import React from "react";
import type from "../../assets/images/normal.svg"

export const PokemonMove : React.FC = () => {
    return (
        <div className={"pokemon-move normal"}>
            <p className={"pokemon-move-name"}>Tackle</p>
            <p>A full body charge attack</p>
            <div className={"pokemon-move-bottom"}>
                <div className={"pokemon-move-characteristics"}>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>Power</strong>
                            <span style={{marginLeft: '10px'}}>35</span>
                        </p>
                    </div>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>Accuracy</strong>
                            <span style={{marginLeft: '10px'}}>100</span>
                        </p>
                    </div>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>PP</strong>
                            <span style={{marginLeft: '10px'}}>35</span>
                        </p>
                    </div>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>Priority</strong>
                            <span style={{marginLeft: '10px'}}>0</span>
                        </p>
                    </div>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>Type</strong>
                            <span style={{marginLeft: '10px'}}>Physical</span>
                        </p>
                    </div>
                    <div className={"pokemon-move-characteristic"}>
                        <p>
                            <strong>Target</strong>
                            <span style={{marginLeft: '10px'}}>Selected Pokemon</span>
                        </p>
                    </div>
                </div>
                <div className={"pokemon-move-icon normal"}>
                    <svg width="150" height="150" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M481 256C481 380.264 380.264 481 256 481C131.736 481 31 380.264 31 256C31 131.736 131.736 31 256 31C380.264 31 481 131.736 481 256ZM384.571 256C384.571 327.008 327.008 384.571 256 384.571C184.992 384.571 127.429 327.008 127.429 256C127.429 184.992 184.992 127.429 256 127.429C327.008 127.429 384.571 184.992 384.571 256Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}