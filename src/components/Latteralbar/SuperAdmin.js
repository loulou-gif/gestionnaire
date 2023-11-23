// import ManageUser from "../Header/NavBar/ManageUser"
import "../../style/dropMenu.css"
import logo from '../../assets/logo/logo.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdManageAccounts, MdOutlineLocalGroceryStore, MdCategory, MdMyLocation } from 'react-icons/md';
import { TbHistoryToggle } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { RiListSettingsFill } from "react-icons/ri";

// import CreateUser from "../formulaires/CreateUser"

function SuperAdmin() {
//     const [activeLink, setActiveLink] = useState(null);

//     const handleLinkClick = (link) => {
//         setActiveLink(link);
//   };
    const [drop, setDrop] = useState(false);

    return(
        <div className="absolute top-0 left-0 h-screen w-64">
            <div className=" flex justify-normal">
                <div className="">
                    
                    <div className="latteral w-72  h-screen bg-orange-400">
                        <nav className=" ">
                            
                            <div className="text-white font-bold text-xl">
                                <img src={logo} alt="logo" className="text-6xl " />
                                <ul className="flex flex-col"> 
                                
                                    <Link to ="/accueil" id="Gest"  >
                                        <li className='flex select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                         <MdManageAccounts className="text-2xl mr-3 " />   Gestion des utilisateurs 
                                        </li>
                                    </Link>   
                                    
                                    <Link to ="/historique" id="Hist" className="w-72" >
                                        <li className='flex   select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                         < TbHistoryToggle className="text-2xl mr-3 "/>   Historiques 
                                        </li>
                                    </Link>   
                                    <Link to ="/stock" id="Stoc"  >
                                        <li className='flex  select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                         <MdOutlineLocalGroceryStore className="text-2xl mr-3 " />    Stocks 
                                        </li>
                                    </Link>   
                                    <li >
                                        <div className='flex select pt-5 pb-3 pl-5  cursor-pointer hover:border-r hover:border-black  hover:bg-orange-200'onClick={() => setDrop(!drop)}>
                                         <CiSettings className="text-2xl mr-3 "/>     <h3>Paramètre</h3> 
                                        </div>
                                        <div className={`drop-menu transition duration-800 ease-out ${drop? 'active ' : 'inactive ' } `}>
                                            <ul>

                                                <Link to ="/parametre" id="para"  >
                                                    <li className='flex select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <RiListSettingsFill className="text-xl mr-3 ml-6"/>    Générale 
                                                    </li>
                                                </Link>

                                                <Link to ="/status" id="stat"  >
                                                    <li className='flex select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <GrPowerCycle className="text-xl mr-3 ml-6"/>     Status 
                                                    </li>
                                                </Link>
                                                
                                                <Link to ="/local" id="local" className="h-full w-full "  > 
                                                    <li className='flex select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                     <MdMyLocation className="text-xl mr-3 ml-6 " />    Local 
                                                    </li>
                                                </Link>

                                                <Link to ="/categories" id="cate"   >
                                                    <li className='flex select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <MdCategory className="text-xl mr-3 ml-6" />     Categories 
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
    )
}

export default SuperAdmin