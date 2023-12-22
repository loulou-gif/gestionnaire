import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
import {Dialog, DialogActions, DialogContentText, DialogTitle, Table, TablePagination } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogContent } from '@material-ui/core';



function StatusList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false)
  const [modif, setModif] = useState(false)
  // const [deleted, setDelete] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpenAlert = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const handleDeleted = () => {
  //   setDelete(!deleted)
  //   console.log("c'est ok")

  // }
  const handleModel = () => {
    setModif(true)
  }

  const handleCloseModel = () => {
    setModif(false)
  }
  const handleModif = () => {
    setInfo(true)
  }
  const handleCloseModif = () => {
    setInfo(false)
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

  

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

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md shadow-md ml-80 md:ml-40 p-14 w-11/12">
          <h1 className='text-2xl font-semibold font-serif'>Liste des status</h1>
          <TableContainer>
        <Table sx={{ maxWidth: 850 }}  className="mt-10" size="small" stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Détails</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                hover role="checkbox" tabIndex={-1} key={row.code}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.identifiant}</TableCell>
                <TableCell align="left">{row.details}</TableCell>
                <TableCell align="left">
                  <div className='flex justify-end'>
                    <React.Fragment>
                      <MdOutlineDeleteForever onClick={handleOpenAlert} className='text-red-500 cursor-pointer text-2xl'/>
                      <Dialog style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"
                      >
                          <DialogTitle id="alert-dialog-title" className='font-bold text-2xl'>
                            SUPPRESSION 
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Vous êtes sur le point de supprimer cet élément. Cliquez sur "Oui" pour valider.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions className='text-center'>
                            <button className=' w-20 h-10 bg-red-500 rounded-xl duration-200 hover:bg-red-700 hover:duration-300 text-white' onClick={handleClose}> Oui</button>
                            <button className=' w-20 h-10 bg-green-500 rounded-xl duration-200 hover:bg-green-700 hover:duration-300 text-white'onClick={handleClose}> Non</button>
                          </DialogActions>
                      </Dialog >
                      
                      <MdOutlineInfo onClick={handleModel} className='text-blue-500 cursor-pointer text-2xl' />
                      
                      <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={modif} onClose={handleCloseModel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <div className='p-16'>
                            <h3 className='text-center text-2xl font-bold'>INFORMATIONS SUR LE STATUT</h3>
                            <input name='Status' disabled className='m-5 p-2 w-11/12 h-16 rounded-lg  outline-0 border text-neutral-600' placeholder='Titre Status' />
                            <input name='Nombre' disabled className='m-5 p-2 w-11/12 h-16 rounded-lg  border outline-0 text-neutral-600' placeholder='Nombre' />
                            <input name='Details' disabled className='m-5 p-2 w-11/12 h-16 rounded-lg  border outline-0 text-neutral-600'placeholder='Details' />
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-blue-400 rounded-lg text-center text-white hover:bg-blue-500" onClick={handleCloseModel} >Fermer</button>
                            </div>
                        </div>
                      </Dialog>
                      
                    <RiEditBoxLine onClick={handleModif} className='text-green-400 cursor-pointer text-2xl' />
                    <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={info} onClose={handleCloseModif} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <div className='p-16'>
                            <h3 className='text-center text-2xl font-bold'>MODIFIER LE STATUT</h3>
                            <input name='Status'  className='m-5 p-2 w-11/12 h-16 rounded-lg  outline-0 border text-neutral-600' placeholder='Titre Status' />
                            <input name='Nombre'  className='m-5 p-2 w-11/12 h-16 rounded-lg  border outline-0 text-neutral-600' placeholder='Nombre' />
                            <input name='Details'  className='m-5 p-2 w-11/12 h-16 rounded-lg  border outline-0 text-neutral-600'placeholder='Details' />
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-green-400 rounded-lg text-center text-white hover:bg-green-500" onClick={handleCloseModif} >Modifier</button>
                            </div>
                        </div>
                      </Dialog>
                  </React.Fragment>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
        <TablePagination rowsPerPageOptions={[5, 10]} component="div" count={product.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}  />
      </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default StatusList;
