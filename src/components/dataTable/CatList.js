import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// import IconDatatable from "./IconDatatable"
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';

function StockList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false)
  const [modif, setModif] = useState(false)
  const [deleted, setDelete] = useState(false)

  const handleDeleted = () => {
    setDelete(!deleted)
    console.log("c'est ok")
  }
  const handleModif = () => {
    setModif(!modif)
  }
  const handleModel = () => {
    setInfo(!info)
    console.log("c'est ok")
  }
  useEffect(() => {
    fetch("http://localhost:8000/categories-produits/")
      .then((response) => response.json()) // Ajout des parenthèses ici
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const columns = [
    { name: 'Catégories', cell:row => row['name'], sortable: true, width: "150px" },
    { name: 'Description', cell:row => row['details'], sortable: true, width: "350px" },
    { name: 'Action', width: "80px", cell:row => <div className='flex'> <MdOutlineInfo className='text-xl text-green-400 cursor-pointer duration-300' onClick={handleModel} /> <RiEditBoxLine className='text-xl text-orange-400 cursor-pointer' onClick={handleModif} /> <MdOutlineDeleteForever className='text-xl text-red-500 cursor-pointer' onClick={handleDeleted} /></div>},
  ];

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-11/12">
          <h1 className='text-2xl font-semibold font-serif'>Liste de stock</h1>
            <DataTable className='gb-red-500' columns={columns} data={product} pagination paginationPerPage={5} highlightOnHover paginationResetDefaultPage noHeader subHeader subHeaderComponent={   <input     type="text"     placeholder="Rechercher..."     className="p-2 border border-gray-300"   /> }
          />
        </div>
      </div>
      {info && 
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto -mt-60 ">
      <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14  ">
          <form className=""   >
              <div className="">
                  <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600"   type="text" name="name" placeholder="Nom de la categorie"  />
                  
              </div>
              <div className="">
                  <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600"  type="text" name="details" placeholder="Description" />
                  
              </div>
              {/* <div className="">
                  <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                  <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
              </div> */}
              <div className="flex justify-center">
                  <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white duration-300 hover:duration-300 hover:bg-neutral-500"  >ENREGISTRER</button>
              </div>
          </form>
      </div>
  </div>
      }
      {modif && 
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto -mt-60 ">
      <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14  ">
          <form className=""   >
              <div className="">
                  <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600"   type="text" name="name" placeholder="Nom de la categorie"  />
                  
              </div>
              <div className="">
                  <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600"  type="text" name="details" placeholder="Description" />
                  
              </div>
              {/* <div className="">
                  <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                  <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
              </div> */}
              <div className="flex justify-center">
                  <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white duration-300 hover:duration-300 hover:bg-neutral-500"  >ENREGISTRER</button>
              </div>
          </form>
      </div>
  </div>}

      {deleted && 
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto -mt-10 ">
        <div className="content grid-rows-1 grid-rows-auto  bg-sky-950 rounded-md shadow-md ml-64 p-14 pt-10 ">
            <h3 className='text-3xl text-center text-white'>SUPPRIMER CATEGORIES</h3>
            <p className='text-xl text-center text-white'>Vous êtes sur le point de supprimer cette catégories. <br/> Cliquez sur "Oui" pour valider l'actions.</p>
            <div className='text-center '>
              <button className='m-5 mb-0 p-2 w-24 rounded-lg  hover:bg-red-900 duration-300 bg-red-600 text-white'>Oui</button><button className='bg-orange-400 hover:bg-orange-600 duration-300 m-5 mb-0 p-2 w-24 rounded-lg  text-white'>Non</button>
            </div>
        </div>
      </div>}
      
    </div>
  );
}

export default StockList;
