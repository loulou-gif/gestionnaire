// import SettingForm from "../formulaires/SettingForm"
// import FormGeneral from "../formulaires/FormGeneral";
import LocalNavBar from "../Header/NavBar/LocalNavBar";
import React from "react";
import CreatLocal from "../formulaires/CreateLocal";
import StockList from "../dataTable/StockList";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function LocalOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <LocalNavBar activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreatLocal />}
                    {activeTab === 'tab2' && <StockList />}
                </div>
            </div>
            
        </div>
    )
}

export default LocalOnglet 