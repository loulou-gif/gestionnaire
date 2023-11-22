
import accountIcone from "../../assets/icone/user.png";
import { BiLogOut } from 'react-icons/bi';
// import notifIcone from "../../assets/icone/cloche-de-notification.png";
// import DropDownIcon from "./DropDownIcon";
import { useState, useEffect } from "react";
import "../../style/dropMenu.css"
function Icones() {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        let handler = ()=> {
            setMenu(false)
        }

        document.addEventListener('mousedown', handler)
    })

    return(
        <div className="flex justify-end items-center h-full">
            {/* <img src={notifIcone} alt="notif" className="w-10 pr-3 cursor-pointer" /> */}
            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5 cursor-pointer" onClick={() => {setMenu(!menu)} }/>
            <div className={`dropdown-menu  list-none text-center ${menu? 'active' : 'inactive'}`}>
                <h3 className="font-bold pb-3">Menu user</h3>
                <li className="border-t pt-3 flex cursor-pointer"><BiLogOut className="mt-1 mr-3 "/>Déconnexion</li>
            </div>
        </div>
    )
}

export default Icones