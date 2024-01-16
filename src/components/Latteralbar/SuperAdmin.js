import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdManageAccounts, MdOutlineLocalGroceryStore, MdCategory, MdMyLocation } from 'react-icons/md';
import { TbHistoryToggle } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { RiListSettingsFill } from "react-icons/ri";

import "../../style/dropMenu.css";
import logo from '../../assets/logo/logo.jpg';

function SuperAdmin() {
    const [activeLink, setActiveLink] = useState(null);
    const [drop, setDrop] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setDrop(false); // Fermer le menu déroulant lorsqu'un lien est cliqué
    };

    return (
        <div className="absolute top-0 left-0 h-screen w-64">
            <div className=" flex justify-normal">
                <div className="">
                    <div className="latteral w-72 h-screen bg-sky-950">
                        <nav className="">
                            <div className="text-white font-bold text-xl">
                                <Link to="/accueil" onClick={() => handleLinkClick('Gest')}>
                                    <img src={logo} alt="logo" className="h-16 w-full " />
                                </Link>
                                <ul className="flex flex-col">
                                    <Link to="/accueil" id="Gest" onClick={() => handleLinkClick('Gest')}>
                                        <li className={`flex select pt-5 pb-3 pl-5 duration-500 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'Gest' ? 'active border-black bg-orange-500 border-r ' : 'inactive duration-300'}`}>
                                            <MdManageAccounts className="text-2xl mr-3" /> Gestion des utilisateurs
                                        </li>
                                    </Link>
                                    <Link to="/historique" id="Hist" onClick={() => handleLinkClick('Hist')}>
                                        <li className={`flex select pt-5 pb-3 pl-5 duration-500 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'Hist' ? 'active border-black bg-orange-500 border-r ' : 'inactive duration-300'}`}>
                                            <TbHistoryToggle className="text-2xl mr-3" /> Historiques
                                        </li>
                                    </Link>
                                    <Link to="/stock" id="Stoc" onClick={() => handleLinkClick('Stoc')}>
                                        <li className={`flex select pt-5 pb-3 pl-5 duration-500 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'Stoc' ? 'active border-black bg-orange-500 border-r' : 'inactive duration-300'}`}>
                                            <MdOutlineLocalGroceryStore className="text-2xl mr-3" /> Stocks
                                        </li>
                                    </Link>
                                    <li>
                                        <div className='flex select pt-5 pb-3 pl-5 duration-500 cursor-pointer hover:border-r hover:border-black hover:bg-orange-500' onClick={() => setDrop(!drop)}>
                                            <CiSettings className="text-2xl mr-3" /> <h3>Paramètre</h3>
                                        </div>
                                        <div className={`drop-menu transition duration-800 ease-out ${drop ? 'active' : 'inactive'}`}>
                                            <ul>
                                                <Link to="/parametre" id="para" onClick={() => handleLinkClick('para')}>
                                                    <li className={`flex select pt-5 duration-500 pb-3 pl-5 w-72 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'para' ? 'active border-r border-black bg-orange-500' : 'inactive duration-300'}`}>
                                                        <RiListSettingsFill className="text-xl mr-3 ml-6" /> Générale
                                                    </li>
                                                </Link>
                                                <Link to="/status" id="stat" onClick={() => handleLinkClick('stat')}>
                                                    <li className={`flex select pt-5 duration-500 pb-3 pl-5 w-72 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'stat' ? 'active border-r border-black bg-orange-500' : 'inactive duration-300'}`}>
                                                        <GrPowerCycle className="text-xl mr-3 ml-6" /> Status
                                                    </li>
                                                </Link>
                                                <Link to="/local" id="local" className="h-full w-full" onClick={() => handleLinkClick('local')}>
                                                    <li className={`flex select pt-5 duration-500 pb-3 pl-5 w-72 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'local' ? 'active border-r border-black bg-orange-500' : 'inactive duration-300'}`}>
                                                        <MdMyLocation className="text-xl mr-3 ml-6" /> Local
                                                    </li>
                                                </Link>
                                                <Link to="/categories" id="cate" onClick={() => handleLinkClick('cate')}>
                                                    <li className={`flex select pt-5 duration-500 pb-3 pl-5 w-72 hover:border-r cursor-pointer hover:border-black hover:bg-orange-500 ${activeLink === 'cate' ? 'active border-r border-black bg-orange-500' : 'inactive duration-300'}`}>
                                                        <MdCategory className="text-xl mr-3 ml-6" /> Categories
                                                    </li>
                                                </Link>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperAdmin;
