import accountIcone from "../../../assets/icone/user.png"
import notifIcone from "../../../assets/icone/cloche-de-notification.png"

function ManageUser() {
    return(
        <div>
            <header className=" ml-72 w-10/11 ">
                <div className="bg-orange-200">
                    <nav className="flex justify-between items-center h-full">
                        <div className="flex justify-normal items-center  h-full" >
                            <p className="font-bold w-60 text-center pt-5 pb-5 hover:bg-orange-300 hover:border-b  hover:border-black ">Création de compte</p>
                            <p className="font-bold w-60 text-center ml-2 pt-5 pb-5 hover:bg-orange-300 hover:border-b  hover:border-black " >Liste des utilisateurs</p>
                        </div>
                        
                        <div className="flex justify-end items-center h-full">
                            <img src={notifIcone} alt="notif" className="w-10 pr-3" />
                            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5" />
                        </div>
                    </nav>
                    
                </div>
            </header>
        </div>
    )
}
export default ManageUser