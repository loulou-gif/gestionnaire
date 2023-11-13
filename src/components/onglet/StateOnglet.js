import CreateStatus from "../formulaires/CreateStatus"
import StockList from "../dataTable/StockList";
import StatusNavBar from "../Header/NavBar/StatusNavBar";
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
                <StatusNavBar activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreateStatus />}
                    {activeTab === 'tab2' && <StockList />}
                </div>
            </div>
            
        </div>
    )
}

export default ParaOnglet 