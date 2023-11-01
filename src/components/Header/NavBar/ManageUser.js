import accountIcone from "../../../assets/icone/user.png"
import notifIcone from "../../../assets/icone/cloche-de-notification.png"
import "../../../style/manage.css"
import React, { useState } from 'react';

function ManageUser() {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
  };
    return(
        <div>
            <header className=" ml-72 w-10/11 ">
                <div className="bg-orange-200">
                    <nav className="flex justify-between items-center h-full">
                        <div className="flex justify-normal items-center  h-full" >
                            <div className={`font-bold w-60 text-center pt-5 pb-5 hover:bg-orange-300 hover:border-b cursor-pointer  ${activeTab === 'tab1' ? 'bg-orange-300 hover:border-b' : ''}`}  onClick={() => openTab('tab1')}>Création de compte</div>
                            <div className={`font-bold w-60 text-center pt-5 pb-5 hover:bg-orange-300 hover:border-b cursor-pointer  ${activeTab === 'tab2' ? 'bg-orange-300 hover:border-b' : ''}`} onClick={() => openTab('tab2')}>Liste des utilisateurs</div>
                        </div>
                        
                        <div className="flex justify-end items-center h-full">
                            <img src={notifIcone} alt="notif" className="w-10 pr-3 cursor-pointer" />
                            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5 cursor-pointer" />
                        </div>
                    </nav>
                    
                </div>
            </header>
            {/* <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? '' : 'hidden'} p-4 border border-gray-300 w-10/11 m-72`}>
                Contenu de l'onglet 1
            </div>
            <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? '' : 'hidden'} p-4 border border-gray-300 w-10/11 m-72`}>
                Contenu de l'onglet 2
            </div> */}
        </div>
    )
}
export default ManageUser