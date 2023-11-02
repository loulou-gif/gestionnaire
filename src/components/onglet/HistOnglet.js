import UserList from "../dataTable/UserList"
import CreateUser from "../formulaires/CreateUser"
import History from "../Header/NavBar/History"
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function HistOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <History activeTab={activeTab} openTab={openTab} />
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

export default HistOnglet