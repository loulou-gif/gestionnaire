import React, {useState} from "react";
import axios from "axios";


function CreateStatus() {
    const [statut, setStatut] = useState({
        name: '',
        details: '',
        identifiant: '',
        // ... d'autres champs du formulaire
    });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setStatut({ ...statut, [name]: value });
      }
      function handleSubmit(event) {
        event.preventDefault();
      
        axios.post('http://localhost:8000/status-produit/', statut)
          .then(response => {
            console.log('status créé avec succès', response.data);
            // Réinitialisez l'état du formulaire ou effectuez d'autres actions nécessaires.
            setStatut({
                name:"",
                details:"",
                identifiant:"",
            })
          })
          .catch(error => {
            console.error('Erreur lors de la création du statu', error);
            // Gérez l'erreur, par exemple, affichez un message à l'utilisateur.
          });
      }
    return(
        <div>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-white rounded-md shadow ml-64 p-14 ">
                    <form className=""  onSubmit={handleSubmit} >
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" value={statut.name} type="text" name="name" placeholder="Titre status" onChange={handleInputChange} />
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" value={statut.details } type="textarea" name="details" placeholder="Description du status" onChange={handleInputChange}/>
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" value={statut.identifiant } type="number" name="identifiant" placeholder="Rentrez l'identifiant" onChange={handleInputChange}/>
                            
                        </div>
                        {/* <div className="">
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 border text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 border text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
                        </div> */}
                        <div className="flex justify-center">
                            <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-sky-700 rounded-lg text-center text-white hover:bg-sky-950"  >ENREGISTRER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateStatus