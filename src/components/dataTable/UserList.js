import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';


function UserList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/list-user/")
      .then((response) => response.json()) // Ajout des parenthèses ici
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const columns = [
    { name: 'Name', selector: 'last_name', sortable: true },
    { name: 'Username', selector: 'username', sortable: true, width: "120px" },
    { name: 'Email', selector: 'email', sortable: true ,width: "250px"},
  ];


  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/user/')
  //   .then((response) => response.json())
  //   .then((data) =>{
  //     console.log(data);
  //     setUser(data);
  //   } )
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }, []);

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-  rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-10/12">
        <h1 className='text-2xl font-semibold font-serif'>liste users</h1>
          <DataTable columns={columns} data={user} pagination paginationPerPage={3} highlightOnHover paginationResetDefaultPage noHeader subHeader subHeaderComponent={<input
                type="text"
                placeholder="Rechercher..."
                className="p-2 h-8 border border-gray-300"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default UserList;
