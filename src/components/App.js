import {Routes, Route } from "react-router-dom";
import AdminHome from "../Pages/Admin/AdminHome";
import LogIn from "../Pages/Admin/LogIn";
import Historique from "../Pages/Admin/Historique"
import Parametre from "../Pages/Admin/Parametre";
import Stocks from "../Pages/Admin/Stocks";
import React from "react"
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
        <Route path="/stock" element={<Stocks/>} />
        <Route path="/" element={<LogIn/>} />
      </Routes>
    </div>
  )
}

export default App;

