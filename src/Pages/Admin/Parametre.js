import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
import Copyright from "../../components/Footer/Copyright"
import ParaOnglet from "../../components/onglet/ParaOnglet"
import React from "react"

function Parametre() {
    return(
        <div>
            <ParaOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )
}

export default Parametre