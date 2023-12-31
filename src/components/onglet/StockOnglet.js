import ConnexionList from "../dataTable/ConnexionList";
import StockList from "../dataTable/StockList";
import CreateProduct from "../formulaires/CreateProduct";
import Stock from "../Header/NavBar/Stock";
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function StockOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <Stock activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreateProduct />}
                    {activeTab === 'tab2' && <StockList />}
                    {activeTab === 'tab3' && <ConnexionList />}
                </div>
            </div>
            
        </div>
    )
}

export default StockOnglet