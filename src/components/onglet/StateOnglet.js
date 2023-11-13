import CreateStatus from "../formulaires/CreateStatus"
import StatusList from "../dataTable/StatusList";
import StatusNavBar from "../Header/NavBar/StatusNavBar";
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function StateOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <StatusNavBar activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreateStatus />}
                    {activeTab === 'tab2' && <StatusList />}
                </div>
            </div>
            
        </div>
    )
}

export default StateOnglet 