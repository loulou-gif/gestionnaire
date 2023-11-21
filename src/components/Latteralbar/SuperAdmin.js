// import ManageUser from "../Header/NavBar/ManageUser"
// import "../../style/Latteral.css"
import logo from '../../assets/logo/logo.jpg'
import React from 'react';
import { Link } from 'react-router-dom'
// import CreateUser from "../formulaires/CreateUser"

function SuperAdmin() {
//     const [activeLink, setActiveLink] = useState(null);

//     const handleLinkClick = (link) => {
//         setActiveLink(link);
//   };
    return(
        <div className="absolute top-0 left-0 h-screen w-64">
            <div className=" flex justify-normal">
                <div className="">
                    
                    <div className="latteral w-72  h-screen bg-orange-400">
                        <nav className=" ">
                            <div className="text-white font-bold text-xl">
                                <img src={logo} alt="logo" className="text-6xl " />
                                <ul className="flex flex-col"> 
                                    <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                        <Link to ="/accueil" id="Gest"  > Gestion des utilisateurs </Link>
                                    </li>   
                                    <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                        <Link to ="/historique" id="Hist" > Historiques </Link>
                                    </li>   
                                    <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                        <Link to ="/stock" id="Stoc"  > Stocks </Link>
                                    </li>   
                                    <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                        <Link to ="/parametre" id="Para"  > Paramètres </Link>
                                        <div className=''>
                                            <ul>
                                                <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <Link to ="/status" id="stat"   > Status </Link>
                                                </li>
                                                <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <Link to ="/local" id="local"  > Local </Link>
                                                </li>
                                                <li className='select pt-5 pb-3 pl-5 hover:border-r cursor-pointer  hover:border-black  hover:bg-orange-200'>
                                                    <Link to ="/categories" id="cate"   > categories </Link>
                                                </li>
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