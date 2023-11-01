import {Routes, Route } from "react-router-dom";
import AdminHome from "../Pages/AdminHome";
import LogIn from "../Pages/LogIn";
// import FisrtOnglet from "./onglet/FirstOnglet";
// import ManageUser from "./Header/NavBar/ManageUser";
// import SuperAdmin from "./Latteralbar/SuperAdmin";

function App() {
  return (
    <div> 
      <Routes>
        {/* <Route path="/" element={<ManageUser/>} /> */}
        <Route path="/accueil" element={<AdminHome/>} />
        <Route path="/" element={<LogIn/>} />
      </Routes>
    </div>
  )
}

export default App;

