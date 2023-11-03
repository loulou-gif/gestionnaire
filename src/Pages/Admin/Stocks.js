import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
import Copyright from "../../components/Footer/Copyright"
import React from "react"
import StockOnglet from "../../components/onglet/StockOnglet"

function Historique() {
    return(
        <div>
            <StockOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )
}

export default Historique