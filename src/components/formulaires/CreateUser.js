import React, { useState, useEffect } from "react";

function CreateUser() {
  const [directions, setDirections] = useState([]);
  const [selectedDirection, setSelectedDirection] = useState("");
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/direction/")
      .then((response) => response.json())
      .then((data) => {
        setDirections(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    // Filtrer les managers pour la direction sélectionnée
    const selectedDirectionObject = directions.find(
      (direction) => direction.direction.toUpperCase() === selectedDirection
    );

    if (selectedDirectionObject) {
      setManagers([selectedDirectionObject.manager]);
    } else {
      setManagers([]);
    }
  }, [selectedDirection, directions]);

  const handleDirectionChange = (event) => {
    setSelectedDirection(event.target.value.toUpperCase());
  };

  const directionOptions = directions.map((direction) => (
    <option key={direction.id}>{direction.direction.toUpperCase()}</option>
  ));

  return (
    <div className="">
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
          <form className="" method="POST">
            <div className="">
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="username" placeholder="Nom d'utilisateur"/>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="name"  placeholder="Nom et Prénoms"/>
            </div>
            <div className="">
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="email" placeholder="email@mail.log"/>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="numero" placeholder="Numéro de téléphone"/>
            </div>
            <div className="">
              <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="direction" onChange={handleDirectionChange} >
                <option value='Direction'>Direction</option> 
                {directionOptions}
              </select>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 bg-neutral-100 text-neutral-600" placeholder="manager" value={managers.join(", ")} readOnly disabled/>
            </div>
            <div>
              <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
            </div>
            <div className="flex justify-center">
              <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"> ENREGISTRER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
