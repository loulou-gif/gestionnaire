import {Routes, Route } from "react-router-dom";
import AdminHome from "../Pages/AdminHome";
import Login from "../Pages/Login";
// import ManageUser from "./Header/NavBar/ManageUser";
// import SuperAdmin from "./Latteralbar/SuperAdmin";

function App() {
  return (
    <div> 
      <Routes>
        {/* <Route path="/" element={<ManageUser/>} /> */}
        <Route path="/accueil" element={<AdminHome/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App;
