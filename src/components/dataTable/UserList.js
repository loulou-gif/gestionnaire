import React, {useEffect, useState} from 'react';
// import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
// import { RiEditBoxLine } from "react-icons/ri";
import DataTable from 'react-data-table-component';
import IconDatatable from "./IconDatatable"


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
    { name: 'Name', cell:row => row['username'], sortable: true },
    { name: 'Prénoms', cell:row => row['last_name'], sortable: true, width: "130px" },
    { name: 'Email', cell:row => row['email'], sortable: true ,width: "350px"},
    { name: 'Action', cell:IconDatatable},
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
