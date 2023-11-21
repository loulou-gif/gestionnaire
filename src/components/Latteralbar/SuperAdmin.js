// import ManageUser from "../Header/NavBar/ManageUser"
import "../../style/dropMenu.css"
import logo from '../../assets/logo/logo.jpg'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
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
                                        <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                            Gestion des utilisateurs 
                                        </li>
                                    </Link>   
                                    
                                    <Link to ="/historique" id="Hist" className="w-72" >
                                        <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                            Historiques 
                                        </li>
                                    </Link>   
                                    <Link to ="/stock" id="Stoc"  >
                                        <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                             Stocks 
                                        </li>
                                    </Link>   
                                    <li >
                                        <div className='select pt-5 pb-3 pl-5  cursor-pointer hover:border-r hover:border-black  hover:bg-orange-200'onClick={() => setDrop(!drop)}>
                                           <h3>Paramètre</h3> 
                                        </div>
                                        <div className={`drop-menu transition duration-800 ease-out ${drop? 'active ' : 'inactive ' } `}>
                                            <ul>
                                                <Link to ="/status" id="stat"  >
                                                    <li className='select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                         Status 
                                                    </li>
                                                </Link>
                                                
                                                <Link to ="/parametre" id="para"  >
                                                    <li className='select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                        Générale 
                                                    </li>
                                                </Link>
                                                
                                                <Link to ="/local" id="local" className="h-full w-full "  > 
                                                    <li className='select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                         Local 
                                                    </li>
                                                </Link>

                                                <Link to ="/categories" id="cate"   >
                                                    <li className='select pt-5 pb-3 pl-5 w-72 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                         Categories 
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