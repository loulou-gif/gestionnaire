import ManageUser from "../components/Header/NavBar/ManageUser"
import SuperAdmin from "../components/Latteralbar/SuperAdmin"
import CreateUser from "../components/formulaires/CreateUser"

function AdminHome() {
    return(
        <div>
            <ManageUser/>
            <SuperAdmin/>
        </div>
    )    
}
export default AdminHome