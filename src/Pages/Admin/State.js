import Copyright from "../../components/Footer/Copyright"
// import ManageUser from "../components/Header/NavBar/ManageUser"
import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
// import StateOnglet from "../../components/onglet/StateOnglet"
import StateOnglet from "../../components/onglet/StateOnglet"
// import CreateUser from "../components/formulaires/CreateUser"
import React from "react"

function State() {
    return(
        <div>
            <StateOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )    
}
export default State