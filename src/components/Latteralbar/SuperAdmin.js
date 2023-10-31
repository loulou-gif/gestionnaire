// import ManageUser from "../Header/NavBar/ManageUser"
import "../../style/Latteral.css"

function SuperAdmin() {
    return(
        <div>
            {/* <ManageUser/> */}
            <div className="latteral w-72 h-screen bg-orange-400">
                <nav className="">
                    <div className="text-white font-bold text-xl">
                        <h1 className="text-6xl pl-14 pt-10 pb-16">LOGO</h1>
                        <p id="Gest" className="select pt-5 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Gestion des utilisateurs </p>
                        <p id="Hist" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200 "> Historiques </p>
                        <p id="Stoc" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Stocks </p>
                        <p id="Para" className="select pt-2 pb-3 pl-5 hover:border-r  hover:border-black  hover:bg-orange-200"> Paramètres</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default SuperAdmin