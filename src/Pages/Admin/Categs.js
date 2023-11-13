import Copyright from "../../components/Footer/Copyright"
// import ManageUser from "../components/Header/NavBar/ManageUser"
import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
import CatOnglet from "../../components/onglet/CatOnglet"
// import CreateUser from "../components/formulaires/CreateUser"
import React from "react"

function Local() {
    return(
        <div>
            <CatOnglet/>
            <SuperAdmin/>
            <Copyright/>
        </div>
    )    
}
export default Local