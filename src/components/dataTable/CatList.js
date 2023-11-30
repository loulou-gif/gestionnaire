import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// import IconDatatable from "./IconDatatable"
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
function StockList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false)
  const handlemodel = () => {
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
    { name: 'Action', width: "80px", cell:row => <div className='flex'> <MdOutlineInfo className='text-xl text-green-400 cursor-pointer duration-300' onClick={handlemodel} /> <RiEditBoxLine className='text-xl text-orange-400 cursor-pointer'  /> <MdOutlineDeleteForever className='text-xl text-red-500 cursor-pointer'  /></div>},
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
      
    </div>
  );
}

export default StockList;
