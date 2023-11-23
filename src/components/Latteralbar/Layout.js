import { Outlet } from "react-router-dom"
import SuperAdmin from "./SuperAdmin"
function Layout() {
    return(
        <>
            <SuperAdmin />
            <Outlet />
        </>
    )
}

export default Layout