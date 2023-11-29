import React from 'react';
import DataTable from 'react-data-table-component';

function ConnexionList() {
  const columns = [
    { name: 'Name', cell:row => ['name'], sortable: true },
    { name: 'Email', cell:row => ['email'], sortable: true },
    { name: 'Tel', cell:row => ['tel'], sortable: true },
    { name: 'Direction', cell:row => ['direction'], sortable: true },
    { name: 'Ville', cell:row => ['ville'], sortable: true }
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
    <div className=' flex  flex-auto mt-72 '>
      
        
        <div className="content bg-neutral   rounded-md  shadow-md ml-80 md:ml-40 p-14 w-10/12">
            <h1 className='text-2xl font-semibold font-serif'>liste connexion</h1>
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
  );
}

export default ConnexionList;
