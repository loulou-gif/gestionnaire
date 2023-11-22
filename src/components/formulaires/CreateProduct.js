import axios from "axios";
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
    



    // const maDate = "2023-11-09T12:34:56";
    const date = new Date()

    const annee = date.getFullYear();
    const mois = date.getMonth()
    const jour = date.getDate();
    const heure = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();
    
    // for(let sn = 1; sn; sn ++){
    //   console.log("prod20"+sn)
    // }
    const dateFormatee = `prod${annee}${mois}${jour}${heure}${minute}${seconde}`;
    const [product, setProduct] = useState({
      name:"",
      category:"",
      serial_number:dateFormatee,
      details:"",
      status:"",
      location:"",
      quantity:""
    })
    function handleInputChange(e) {
      const { name, value} = e.target;
      setProduct({...product, [name]:value});
    }
    function handleSubmit(e) {
      e.preventDefault();
      
      axios.post('http://localhost:8000/stock/', product)
      .then(response => {
        console.log('it\'s okey', response.data);
        setProduct({
          name: "",
          details: "",
          // ... réinitialisez d'autres champs si nécessaire
      });
      })
      .catch(error => {
        console.error('it\' bad!', error)
      })
    }
    
      // const maDate = "2023-11-09T12:34:56";
      // const date = new Date(maDate)

      // const annee = date.getFullYear();
      // const jour = date.getDate();
      // const heure = date.getHours();
      // const minute = date.getMinutes();
      // const seconde = date.getSeconds();

      // const dateFormatee = `prod${annee}${jour}${heure}${minute}${seconde}`;
      // console.log(dateFormatee)

    return(
        <div>
        <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
            <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                <form className="" onSubmit={handleSubmit}>
                    <div className="">
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" value={product.name} name="name" placeholder="Nom du produit" onChange={handleInputChange}/>
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 bg-gray-200 text-neutral-600" type="text" value={product.serial_number} name="serial_number" placeholder="numéreau de série" onChange={handleInputChange} disabled/>
                    </div>
                    <div className="">
                        <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" value={product.details} name="details" placeholder="Description" onChange={handleInputChange}/>
                    </div>
                    <div className="">
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.category} name="category" onChange={handleInputChange}>
                                <option value="Catégorie">catégorie</option>
                                {categories}
                        </select>
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.status} name="status" onChange={handleInputChange}>
                                <option value="Status">Status</option>
                                {statuts}
                        </select> 
                    </div>
                    
                    <div className="">
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.location} name="location" onChange={handleInputChange}>
                            <option value='Emplacement'>Emplacement</option>
                            {locations}
                        </select> 
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="number"value={product.quantity} name="quantity" placeholder="quantité (Exp: 10)" onChange={handleInputChange}/>
                    </div>
                    <div className="flex justify-center">
                        {/* <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="file"value={product.quantity} name="image" placeholder="quantité (Exp: 10)" onChange={handleInputChange}/> */}
                        <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default CreateProduct