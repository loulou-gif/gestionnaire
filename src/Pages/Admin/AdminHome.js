import Copyright from "../../components/Footer/Copyright"
// import ManageUser from "../components/Header/NavBar/ManageUser"
// import SuperAdmin from "../../components/Latteralbar/SuperAdmin"
import FirstOnglet from "../../components/onglet/FirstOnglet"
// import CreateUser from "../components/formulaires/CreateUser"
import React from "react"

function AdminHome() {
    return(
        <div>
            <FirstOnglet/>
            {/* <SuperAdmin/> */}
            <Copyright/>
        </div>
    )    
}
export default AdminHome