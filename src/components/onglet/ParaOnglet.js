import UserList from "../dataTable/UserList"
import FormGeneral from "../formulaires/FormGeneral";
import Settings from "../Header/NavBar/Settings"
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function ParaOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <Settings activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <FormGeneral />}
                    {activeTab === 'tab2' && <UserList />}
                </div>
            </div>
            
        </div>
    )
}

export default ParaOnglet 