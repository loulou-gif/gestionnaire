import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import IconDatatable from "./IconDatatable"
function StockList() {
  const [product, setProduct] = useState([]);

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
    { name: 'Catégories', selector: 'name', sortable: true, width: "150px" },
    { name: 'Description', selector: 'details', sortable: true, width: "350px" },
    { name: 'Action', width: "80px", cell:IconDatatable},
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
