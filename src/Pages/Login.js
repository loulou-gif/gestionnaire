import fondImage from "../assets/fond/fond-1.jpg";
import Connexion from "../components/formulaires/FormConnexion";
import React from "react"

function LogIn() {
  return (
    <div className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${fondImage})`}}>
      <Connexion />
    </div>
  );
}

export default LogIn;
