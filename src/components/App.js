import {Routes, Route } from "react-router-dom";
import AdminHome from "../Pages/Admin/AdminHome";
import LogIn from "../Pages/Admin/LogIn";
import Historique from "../Pages/Admin/Historique"
import Parametre from "../Pages/Admin/Parametre";
import Stocks from "../Pages/Admin/Stocks";
import React from "react"
import State from "../Pages/Admin/State";
import Categs from "../Pages/Admin/Categs";
import Local from "../Pages/Admin/Local";
// import SuperAdmin from "./Latteralbar/SuperAdmin";
import Layout from "./Latteralbar/Layout";
// import FisrtOnglet from "./onglet/FirstOnglet";
// import ManageUser from "./Header/NavBar/ManageUser";
// import SuperAdmin from "./Latteralbar/SuperAdmin";

function App() {
  return (
    <div> 
      <Routes>
        <Route element={<Layout />} >
          <Route path="/accueil" element={<AdminHome/>} />
          <Route path="/local" element={<Local/>} />
          <Route path="/status" element={<State/>} />
          <Route path="/categories" element={<Categs/>} />
          <Route path="/historique" element={<Historique/>} />
          <Route path="/parametre" element={<Parametre/>} />
          <Route path="/stock" element={<Stocks/>} />
        </Route>
        
        <Route path="/" element={<LogIn/>} />
        {/* <Route path="/" element={<ManageUser/>} /> */}
        
      </Routes>
    </div>
  )
}

export default App;

