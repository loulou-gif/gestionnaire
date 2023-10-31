import {Routes, Route } from "react-router-dom";
// import ManageUser from "./Header/NavBar/ManageUser";
import SuperAdmin from "./Latteralbar/SuperAdmin";

function App() {
  return (
    <div> 
      <Routes>
        {/* <Route path="/" element={<ManageUser/>} /> */}
        <Route path="/" element={<SuperAdmin/>} />
      </Routes>
    </div>
  )
}

export default App;
