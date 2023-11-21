
import accountIcone from "../../assets/icone/user.png";
import notifIcone from "../../assets/icone/cloche-de-notification.png";
import DropDownIcon from "./DropDownIcon";
function Icones() {
    return(
        <div className="flex justify-end items-center h-full">
            <img src={notifIcone} alt="notif" className="w-10 pr-3 cursor-pointer" />
            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5 cursor-pointer" />
              <DropDownIcon />
        </div>
    )
}

export default Icones