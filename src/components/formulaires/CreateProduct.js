import axios from "axios";
import React, { useState, useEffect } from "react";

function CreateProduct() {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Emplacement/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const locations = location.map((locate) => (
    <option key={locate.id}>{locate.name}</option>
  ));
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/status-produit/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const statuts = status.map((state) => (
    <option key={state.id}>{state.name}</option>
  ));

  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/categories-produits/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategorie(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const categories = categorie.map((cat) => (
    <option key={cat.id}>{cat.name}</option>
  ));

  const date = new Date();

  const annee = date.getFullYear();
  const mois = date.getMonth();
  const jour = date.getDate();
  const heure = date.getHours();
  const minute = date.getMinutes();
  const seconde = date.getSeconds();

  const dateFormatee = `prod${annee}${mois}${jour}${heure}${minute}${seconde}`;
  const [product, setProduct] = useState({
    name: "",
    category: "",
    serial_number: dateFormatee,
    details: "",
    prix: "",
    status: "",
    location: "",
    quantity: "",
    image: null,
  });

  function handleInputChange(e) {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;

    setProduct({ ...product, [name]: newValue });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Créez un objet FormData
    const formData = new FormData();

    // Ajoutez les champs au FormData
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    axios
      .post("http://localhost:8000/stock/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("C'est bon", response.data);
        setProduct({
          name: "",
          category: "",
          serial_number: "",
          details: "",
          price: "",
          status: "",
          location: "",
          quantity: "",
          image: null,
        });
      })
      .catch((error) => {
        console.error("C'est mauvais !", error);
      });
  }

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-zinc-200 rounded-md shadow-md ml-64 p-14 ">
          <form className="" onSubmit={handleSubmit}>
            <div className="">
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" value={product.name} name="name" placeholder="Nom du produit" onChange={handleInputChange} />
              <input className="m-5 p-2 w-72 rounded-lg outline-0 bg-gray-200 text-neutral-600" type="text" value={product.serial_number} name="serial_number" placeholder="numéreau de série" onChange={handleInputChange} disabled />
            </div>
            <div className="">
              <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" value={product.details} name="details" placeholder="Description" onChange={handleInputChange} />
            </div>
            <div className="">
              <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="number" value={product.price} name="price" placeholder="Prix unitaire" onChange={handleInputChange} />
            </div>
            <div className="">
              <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.category} name="category" onChange={handleInputChange}
              > <option value="Catégorie">catégorie</option> {categories}
              </select>
              <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.status} name="status" onChange={handleInputChange}
              > <option value="Status">Status</option> {statuts}
              </select>
            </div>

            <div className="">
              <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" value={product.location} name="location" onChange={handleInputChange}
              > <option value="Emplacement">Emplacement</option> {locations}
              </select>
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="number" value={product.quantity} name="quantity" placeholder="quantité (Exp: 10)" onChange={handleInputChange} />
            </div>
            <div className="flex justify-center">
              <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600"  type="file" name="image" accept="image/*" onChange={handleInputChange} />
              <button className="m-5 mb-0 p-2 w-72 h-full hover:duration-300 duration-300 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"> ENREGISTRER </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
