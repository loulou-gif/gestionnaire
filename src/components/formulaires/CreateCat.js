import React, {useState} from "react";
import axios from "axios";


function CreateCat() {
    const [categorie, setCategories] = useState({
        name: '',
        details: '',
        // ... d'autres champs du formulaire
    });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setCategories({ ...categorie, [name]: value });
      }
      function handleSubmit(event) {
        event.preventDefault();
      
        axios.post('http://localhost:8000/categories-produits/', categorie)
          .then(response => {
            console.log('Utilisateur créé avec succès', response.data);
            // Réinitialisez l'état du formulaire ou effectuez d'autres actions nécessaires.

             // Réinitialisez l'état du formulaire
            setCategories({
                name: "",
                details: "",
                // ... réinitialisez d'autres champs si nécessaire
            });
          })
          .catch(error => {
            console.error('Erreur lors de la création de l\'utilisateur', error);
            // Gérez l'erreur, par exemple, affichez un message à l'utilisateur.
          });
      }
    return(
        <div>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-white rounded-md shadow ml-64 p-14 ">
                    <form className=""  onSubmit={handleSubmit} >
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border  text-neutral-600" value={categorie.name} type="text" name="name" placeholder="Nom de la categorie" onChange={handleInputChange} />
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 border text-neutral-600" value={categorie.details } type="text" name="details" placeholder="Description" onChange={handleInputChange}/>
                            
                        </div>
                        {/* <div className="">
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
                        </div> */}
                        <div className="flex justify-center">
                            <button className="m-5 mb-0 p-2 w-72 bg-sky-700 rounded-lg text-center text-white duration-300 hover:duration-300 hover:bg-sky-950"  >ENREGISTRER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCat