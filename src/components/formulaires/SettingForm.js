import React, {useState} from "react";
import axios from "axios";


function SettingForm() {
    const [direction, setDirection] = useState({
        name: '',
        manager: '',
        // ... d'autres champs du formulaire
    });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setDirection({ ...direction, [name]: value });
      }
      function handleSubmit(event) {
        event.preventDefault();
      
        axios.post('http://localhost:8000/direction/', direction)
          .then(response => {
            console.log('Utilisateur créé avec succès', response.data);
            // Réinitialisez l'état du formulaire ou effectuez d'autres actions nécessaires.
            setDirection({
                name:"",
                manager:"",
            })
          })
          .catch(error => {
            console.error('Erreur lors de la création de l\'utilisateur', error);
            // Gérez l'erreur, par exemple, affichez un message à l'utilisateur.
          });
      }
    return(
        <div>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                    <form className=""  onSubmit={handleSubmit} >
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" value={direction.direction} type="text" name="direction" placeholder="Nom direction" onChange={handleInputChange} />
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" value={direction.manager } type="text" name="manager" placeholder="Nom du manager" onChange={handleInputChange}/>
                            
                        </div>
                        {/* <div className="">
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
                        </div> */}
                        <div className="flex justify-center">
                            <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SettingForm