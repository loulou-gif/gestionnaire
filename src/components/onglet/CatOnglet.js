import CreateCat from "../formulaires/CreateCat"
import StockList from "../dataTable/StockList";
import Categories from "../Header/NavBar/Categories";
import React from "react";

function useTabHandling() {
    const [activeTab, setActiveTab] = React.useState('tab1');

    const openTab = tabName => {
        setActiveTab(tabName);
    };

    return { activeTab, openTab };
}

function CatOnglet() {
    const { activeTab, openTab } = useTabHandling();
    return(
        <div>
            <div className="tabs">
                <Categories activeTab={activeTab} openTab={openTab} />
            </div>
            <div className="h-screen -mt-16 flex justify-center items-center" >
                <div className="tab-content flex flex-col">
                    {activeTab === 'tab1' && <CreateCat />}
                    {activeTab === 'tab2' && <StockList />}
                </div>
            </div>
            
        </div>
    )
}

export default CatOnglet 