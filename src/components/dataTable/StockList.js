import React from 'react';
import DataTable from 'react-data-table-component';

function StockList() {
  const columns = [
    { name: 'Nom du produits', selector: 'name', sortable: true },
    { name: 'Categorie', selector: 'categorie', sortable: true },
    { name: 'Status', selector: 'status', sortable: true },
    { name: 'Emplacement', selector: 'emplacement', sortable: true },
    { name: 'Quantité', selector: 'quantité', sortable: true }
  ];

  const data = [
    {
      id: '1',
      name: 'lolo',
      categorie: 'eh weh',
      emplacement: 'lolo',
      quantité: 'eh weh',
      status: 'lol'
    },
    {
      id: '2',
      name: 'lolo',
      categorie: 'eh weh',
      emplacement: 'lolo',
      quantité: 'eh weh',
      status: 'lol'
    },
    {
      id: '3',
      name: 'ju',
      categorie: 'eh weh',
      emplacement: 'lolo',
      quantité: 'eh weh',
      status: 'lol'
    },
    {
      id: '4',
      name: 'lolo',
      categorie: 'eh weh',
      emplacement: 'lolo',
      quantité: 'eh weh',
      status: 'lol'
    },
    {
      id: '5',
      name: 'lolo',
      categorie: 'eh weh',
      emplacement: 'lolo',
      quantité: 'eh weh',
      status: 'lol'
    }
  ];

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-11/12">
        <h1 className='text-2xl font-semibold font-serif'>liste stock</h1>
          <DataTable 
            columns={columns}
            data={data}
            pagination
            paginationPerPage={3}
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
