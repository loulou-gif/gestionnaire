import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";

function StockList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/status-produit/")
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
    { name: 'Status', selector: 'name', sortable: true, width: "150px" },
    { name: 'details', selector: 'details', sortable: true, width: "350px" },
    { name: 'Action', width: "80px", cell:row => <div className='flex '>  <MdOutlineInfo className='text-xl text-green-400' /> <RiEditBoxLine className='text-xl text-orange-400'/>  <MdOutlineDeleteForever className='text-xl text-red-500' /> </div>},
  ];

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-11/12">
          <h1 className='text-2xl font-semibold font-serif'>Liste de stock</h1>
          <DataTable 
            columns={columns}
            data={product}
            pagination
            paginationPerPage={5}
            highlightOnHover
            paginationResetDefaultPage
            noHeader
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Rechercher..."
                className="p-2 border border-gray-300"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StockList;
