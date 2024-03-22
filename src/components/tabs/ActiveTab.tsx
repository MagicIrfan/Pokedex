import React from "react";
import {AboutTab} from "./AboutTab";

interface ActiveTabProps{
    activeTab:string
}

export const ActiveTab : React.FC<ActiveTabProps> = ({activeTab}) => {
    const tabList: string[] = ['about', 'stats', 'evolution', 'moves', 'location'];
    const tabIsActive = (tabName: string): boolean => {
        return tabList.includes(tabName) && activeTab === tabName;
    }
    return (
        <>
            {tabIsActive("about") && <AboutTab/>}
            {
                tabIsActive("stats") && <div>
            </div>
            }
            {
                tabIsActive("evolution") && <div>
                </div>
            }
            {
                tabIsActive("moves") && <div>
                </div>
            }
            {
                tabIsActive("location") && <div>
                </div>
            }
        </>
    );
}