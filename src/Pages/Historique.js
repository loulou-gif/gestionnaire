import SuperAdmin from "../components/Latteralbar/SuperAdmin"
import Copyright from "../components/Footer/Copyright"
import HistOnglet from "../components/onglet/HistOnglet"


function Historique() {
    return(
        <div>
            <HistOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )
}

export default Historique