import ManageUser from "../Header/NavBar/ManageUser"
import "../../style/Latteral.css"
import logo from '../../assets/logo/logo.jpg'
import CreateUser from "../formulaires/CreateUser"

function SuperAdmin() {
    return(
        <div>
            <ManageUser/>
            <div className=" flex justify-normal">
                <div className="">
                    
                    <div className="latteral w-72  h-screen bg-orange-400">
                        <nav className=" ">
                            <div className="text-white font-bold text-xl">
                                <img src={logo} alt="logo" className="text-6xl " />
                                <p id="Gest" className="select pt-5 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Gestion des utilisateurs </p>
                                <p id="Hist" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200 "> Historiques </p>
                                <p id="Stoc" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Stocks </p>
                                <p id="Para" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Paramètres</p>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="">
                    <CreateUser/>
                </div>

            </div>
            
        </div>
    )
}

export default SuperAdmin