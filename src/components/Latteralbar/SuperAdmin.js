// import ManageUser from "../Header/NavBar/ManageUser"
// import "../../style/Latteral.css"
import logo from '../../assets/logo/logo.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import CreateUser from "../formulaires/CreateUser"

function SuperAdmin() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
  };
    return(
        <div className="absolute top-0 left-0 h-screen w-64">
            <div className=" flex justify-normal">
                <div className="">
                    
                    <div className="latteral w-72  h-screen bg-orange-400">
                        <nav className=" ">
                            <div className="text-white font-bold text-xl">
                                <img src={logo} alt="logo" className="text-6xl " />
                                <div className="flex flex-col">    
                                <Link to ="/accueil" id="Gest" className={`select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200 ${activeLink === 'Gest' ? 'active' : ''}`} onClick={() => handleLinkClick('Gest')}> Gestion des utilisateurs </Link>
                                <Link to ="/historique" id="Hist" className={`select pt-2 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200 ${activeLink === 'Hist' ? 'active' : ''}`} onClick={() => handleLinkClick('Hist')}> Historiques </Link>
                                <Link to ="/stock" id="Stoc" className={`select pt-2 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200 ${activeLink === 'Stoc' ? 'active' : ''}`} onClick={() => handleLinkClick('Stoc')}> Stocks </Link>
                                <Link to ="/parametre" id="Para" className={`select pt-2 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200 ${activeLink === 'Para' ? 'active' : ''}`} onClick={() => handleLinkClick('Para')}> Paramètres </Link>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            
            </div>
            
        </div>
    )
}

export default SuperAdmin