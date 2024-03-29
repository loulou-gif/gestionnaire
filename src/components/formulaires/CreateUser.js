import axios from "axios";
// import {useForm} from "react-hook-form"
import React, { useState } from "react";

function CreateUser() {
  //   api création comptes
    const [account, setAccount] = useState({
        username:"",
        last_name:"",
        email:"",
        // is_staff:"",
        password:"",
    })
    function handleInputChange(event){
        const {name,value} = event.target;
        setAccount({ ...account, [name]: value});
    }
    function handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:8000/list-user/', account)
        .then(response =>{
            console.log('user create succesfully', response.data);
            console.log(account)
            setAccount({
              username:"",
              last_name:"",
              email:"",
              // is_staff:"",
              password:"",
              // ... réinitialisez d'autres champs si nécessaire
          });
        })
        .catch(error => {
            console.error("ERROR: Can't create user", error)
            console.log(account)
        })
    }



  return (
    <div className="">
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-white rounded-md shadow ml-64 p-14 ">
          <form className="" onSubmit={handleSubmit} >
            <div className="">
              <input className="m-5 p-2 w-72 rounded-lg outline-0 border text-neutral-600" type="text" value={account.username} name="username" placeholder="Nom d'utilisateur"  onChange={handleInputChange}/>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 border text-neutral-600" type="text" value={account.last_name} name="last_name"  placeholder="Nom et Prénoms" onChange={handleInputChange}/>
            </div>
            <div className="">
              <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" type="text" value={account.email} name="email" placeholder="email@mail.log" onChange={handleInputChange}/>
              {/* <input className="m-5 p-2 w-72 rounded-lg outline-0 border text-neutral-600" type="text"  name="userdetail.numero" placeholder="Numéro de téléphone" onChange={handleInputChange}/> */}
            </div>
            {/* <div className="">
              <select className="m-5 p-2 w-72 rounded-lg outline-0 border text-neutral-600" value={account.userdetail.direction} name="userdetail.direction" onChange={handleDirectionChange} >
                <option value='Direction'>Direction</option> 
                {directionOptions}
              </select>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 border bg-neutral-100 text-neutral-600"  name="managers" placeholder="manager" value={managers.join(", ")} readOnly disabled/>
            </div> */}
            <div>
              <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" type="password" value={account.password} name="password" placeholder="Mot de passe" onChange={handleInputChange}/>
              {/* <fieldset className="flex justify-between">
                  <legend>Manager</legend>
                  <div className="flex">
                    <div className="m-5">
                      <input
                        className="p-2 w-11/12 rounded-lg outline-0 border text-neutral-600"
                        type="radio"
                        value={account.is_staff}
                        name="is_staff"
                        onChange={handleInputChange}
                      />
                      <label name="Oui">Oui</label>
                    </div>
                    <div className="m-5">
                      <input
                        className="p-2 w-11/12 rounded-lg outline-0 border text-neutral-600"
                        type="radio"
                        value={account.is_staff}
                        name="is_staff"
                        onChange={handleInputChange}
                      />
                      <label name="Non">Non</label>
                    </div>
                  </div>
              </fieldset> */}

            </div>
            <div className="flex justify-center">
              <button className="m-5 mb-0 p-2 w-72 bg-sky-700 rounded-lg duration-300 hover:duration-300 text-center text-white hover:bg-sky-950"> ENREGISTRER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
