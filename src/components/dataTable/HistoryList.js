import React from 'react';
import DataTable from 'react-data-table-component';

function HistoryList() {
  const columns = [
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Email', selector: 'email', sortable: true },
    { name: 'Tel', selector: 'tel', sortable: true },
    { name: 'Direction', selector: 'direction', sortable: true },
    { name: 'Ville', selector: 'ville', sortable: true }
  ];

  const data = [
    {
      id: '1',
      name: 'lolo',
      email: 'eh weh',
      direction: 'lolo',
      ville: 'eh weh',
      tel: 'lol'
    },
    {
      id: '2',
      name: 'lolo',
      email: 'eh weh',
      direction: 'lolo',
      ville: 'eh weh',
      tel: 'lol'
    },
    {
      id: '3',
      name: 'ju',
      email: 'eh weh',
      direction: 'lolo',
      ville: 'eh weh',
      tel: 'lol'
    },
    {
      id: '4',
      name: 'lolo',
      email: 'eh weh',
      direction: 'lolo',
      ville: 'eh weh',
      tel: 'lol'
    },
    {
      id: '5',
      name: 'lolo',
      email: 'eh weh',
      direction: 'lolo',
      ville: 'eh weh',
      tel: 'lol'
    }
  ];

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-10/12">
        <h1>liste Historique</h1>
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

export default HistoryList;
