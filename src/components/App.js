import {Routes, Route } from "react-router-dom";
import AdminHome from "../Pages/AdminHome";
import LogIn from "../Pages/LogIn";
import Historique from "../Pages/Historique"
import Parametre from "../Pages/Parametre";
// import FisrtOnglet from "./onglet/FirstOnglet";
// import ManageUser from "./Header/NavBar/ManageUser";
// import SuperAdmin from "./Latteralbar/SuperAdmin";

function App() {
  return (
    <div> 
      <Routes>
        {/* <Route path="/" element={<ManageUser/>} /> */}
        <Route path="/accueil" element={<AdminHome/>} />
        <Route path="/historique" element={<Historique/>} />
        <Route path="/parametre" element={<Parametre/>} />
        <Route path="/" element={<LogIn/>} />
      </Routes>
    </div>
  )
}

export default App;

