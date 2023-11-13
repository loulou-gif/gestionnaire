import Copyright from "../../components/Footer/Copyright"
// import ManageUser from "../components/Header/NavBar/ManageUser"
import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
import LocalOnglet from "../../components/onglet/LocalOnglet"
// import CreateUser from "../components/formulaires/CreateUser"
import React from "react"

function Local() {
    return(
        <div>
            <LocalOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )    
}
export default Local