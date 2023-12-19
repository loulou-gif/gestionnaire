import React, {useEffect, useState} from 'react';
// import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
// import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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
  const [info, setInfo] = useState(false)
  const [modif, setModif] = useState(false)
  const [deleted, setDelete] = useState(false)

  const handleDeleted = () => {
    setDelete(!deleted)
    console.log("c'est ok")

  }
  const handleModif = () => {
    setModif(!modif)
  }
  const handleModel = () => {
    setInfo(!info)
    console.log("c'est ok")
  }

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
        <TableContainer>
        <Table sx={{ maxWidth: 850 }} className="mt-10" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nom</TableCell>
              <TableCell align="left">Prénom</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.last_name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <div className='flex justify-end'>
                    <MdOutlineDeleteForever onClick={handleDeleted} className='text-red-500 cursor-pointer text-2xl'/>
                    <MdOutlineInfo onClick={handleModel} className='text-blue-500 cursor-pointer text-2xl' />
                    <RiEditBoxLine onClick={handleModif} className='text-green-400 cursor-pointer text-2xl' />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default UserList;
