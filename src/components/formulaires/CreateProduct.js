import React, {useState, useEffect} from "react";

function CreateProduct() {
    const [location, setLocation] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/Emplacement/')
      .then((response) => response.json())
      .then((data) =>{
        console.log(data);
        setLocation(data);
      } )
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

    const locations = location.map( locate=> (
        <option key={locate.id}>{locate.name}</option>
    ))
    const [status, setStatus] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/status-produit/')
      .then((response) => response.json())
      .then((data) =>{
        console.log(data);
        setStatus(data);
      } )
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

    const statuts = status.map( state=> (
        <option key={state.id}>{state.name}</option>
    ))

    const [categorie, setCategorie] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8000/categories-produits/')
      .then((response) => response.json())
      .then((data) =>{
        console.log(data);
        setCategorie(data);
      } )
      .catch((err) => {
        console.log(err.message);
      });
    }, []);

    const categories = categorie.map( cat=> (
        <option key={cat.id}>{cat.name}</option>
    ))
    return(
        <div>
        <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
            <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                <form className="" method="POST">
                    <div className="">
                        <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="product" placeholder="Nom du produit"/>
                    </div>
                    <div className="">
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="categories">
                                <option value="Catégorie">catégorie</option>
                                {categories}
                        </select>
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="status">
                                <option value="Status">Status</option>
                                {statuts}
                        </select> 
                    </div>
                    
                    <div className="">
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="location">
                            <option value='Emplacement'>Emplacement</option>
                            {locations}
                        </select> 
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="number" name="quantity" placeholder="quantité (Exp: 10)"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default CreateProduct