import React from 'react';
import DataTable from 'react-data-table-component';

function HistoryList() {
  const columns = [
    { name: 'Nom', cell:row =>  ['name'], sortable: true },
    { name: 'Prénoms', cell:row =>  ['prenom'], sortable: true },
    { name: 'email', cell:row =>  ['email'], sortable: true },
    { name: 'Dernière connexion', cell:row =>  ['last_login'], sortable: true },
    { name: 'Status', cell:row =>  ['status'], sortable: true }
  ];

  const data = [
    {
      id: '1',
      name: 'lolo',
      prenom: 'eh weh',
      last_login: 'lolo',
      status: 'eh weh',
      email: 'lol'
    },
    {
      id: '2',
      name: 'lolo',
      prenom: 'eh weh',
      last_login: 'lolo',
      status: 'eh weh',
      email: 'lol'
    },
    {
      id: '3',
      name: 'ju',
      prenom: 'eh weh',
      last_login: 'lolo',
      status: 'eh weh',
      email: 'lol'
    },
    {
      id: '4',
      name: 'lolo',
      prenom: 'eh weh',
      last_login: 'lolo',
      status: 'eh weh',
      email: 'lol'
    },
    {
      id: '5',
      name: 'lolo',
      prenom: 'eh weh',
      last_login: 'lolo',
      status: 'eh weh',
      email: 'lol'
    }
  ];

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-10/12">
        <h1 className='text-2xl font-semibold font-serif'>liste Historique</h1>
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
