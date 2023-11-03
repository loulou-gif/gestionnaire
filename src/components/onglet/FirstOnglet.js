import UserList from "../dataTable/UserList"
import CreateUser from "../formulaires/CreateUser"
import Bouttons from "../Header/NavBar/Bouttons"
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function FisrtOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <Bouttons activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreateUser />}
                    {activeTab === 'tab2' && <UserList />}
                </div>
                
            </div>
            
        </div>
    )
}

export default FisrtOnglet