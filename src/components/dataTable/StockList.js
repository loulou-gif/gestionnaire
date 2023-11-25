import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
// import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
// import { RiEditBoxLine } from "react-icons/ri";
import IconDatatable from "./IconDatatable"

function StockList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/stock/")
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
    { name: 'Produit', selector: 'name', sortable: true},
    { name: 'Catégorie', selector: 'category', sortable: true },
    { name: 'Statut', selector: 'status', sortable: true, cell: row => <div className='border-spacing-10 rounded-md  w-24 text-center text-white bg-red-500'>{row.status} </div>  },
    { name: 'Emplacement', selector: 'location', sortable: true },
    { name: 'Image', selector: 'image', sortable: true, cell: row => <img alt="" src={row.image} className='h-full w-72' /> },
    { name: 'Quantité', selector: 'quantity', sortable: true },
    { name: 'Actions',  cell:IconDatatable }
  ];

  // const conditionalRowStyles = [
  //   {
  //     when: (row) => row.status === 'Indisponible', // Remplacez 'votre_condition' par la condition que vous souhaitez vérifier
  //     style: {
  //       // backgroundColor: 'red', // Remplacez 'votre_couleur' par la couleur souhaitée
  //       color: 'Red', // Remplacez 'votre_couleur_texte' par la couleur du texte souhaitée
  //     },
  //   },
  // ];
  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md  shadow-md ml-80 md:ml-40 -mr-64 p-14 w-11/12">
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
            // conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default StockList;
