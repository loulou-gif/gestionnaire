import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
import { Table, TablePagination } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Dialog, DialogActions, DialogContentText, DialogTitle, DialogContent } from '@mui/material';
import axios from 'axios';

function CatList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false);
  const [modif, setModif] = useState(false);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    details: ""
  });

  const handleOpenAlert = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/categories-produits/${id}`)
    setProduct((product) => product.filter((product) => product.id !== id))
    setOpen(false);
  }

  const handleModel = (name) => {
    const selectedProduct = product.find((item) => item.name === name);
    setValues({
      name: selectedProduct.name,
      details: selectedProduct.details
    });
    setModif(true);
  }

  const handleCloseModel = () => {
    setModif(false);
  }

  const handleModif = (name) => {
    const selectedProduct = product.find((item) => item.name === name);
    setValues({
      name: selectedProduct.name,
      details: selectedProduct.details
    });
    setInfo(true);
  }

  const handleCloseModif = () => {
    setInfo(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(value)
  };

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
    fetch("http://localhost:8000/categories-produits/")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content rounded-md shadow-md ml-80 md:ml-40 p-14 w-11/12">
          <h1 className='text-2xl font-semibold font-serif'>Liste des catégories</h1>
          <TableContainer>
            <Table sx={{ maxWidth: 850 }} className="mt-10" size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Catégories</TableCell>
                  <TableCell align="left">Details</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((row) => (
                  <TableRow
                    hover
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.details}</TableCell>
                    <TableCell align="left">
                      <div className='flex justify-end'>
                        <MdOutlineDeleteForever onClick={handleOpenAlert} className='text-red-500 cursor-pointer text-2xl' />
                        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} >
                          <DialogTitle id="alert-dialog-title" className='font-bold text-2xl'>
                            SUPPRESSION
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Vous êtes sur le point de supprimer cet élément. Cliquez sur "Oui" pour valider.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions className='text-center'>
                            <button className='w-20 h-10 bg-red-500 rounded-xl duration-200 hover:bg-red-700 hover:duration-300 text-white' onClick={() => handleDelete(row.id)}> Oui</button>
                            <button className='w-20 h-10 bg-green-500 rounded-xl duration-200 hover:bg-green-700 hover:duration-300 text-white' onClick={handleClose}> Non</button>
                          </DialogActions>
                        </Dialog>
                        <MdOutlineInfo onClick={() => handleModel(row.name)} className='text-blue-500 cursor-pointer text-2xl' />

                        <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={modif} onClose={handleCloseModel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                          <div className='p-16'>
                            <h3 className='text-center text-2xl font-bold'>INFORMATIONS SUR LA CATEGORIE</h3>
                            <input name='Status' disabled className='m-5 p-2 w-11/12 h-16 rounded-lg outline-0 border text-neutral-600' placeholder='Titre Status' value={values.name} />
                            <input name='Details' disabled className='m-5 p-2 w-11/12 h-16 rounded-lg border outline-0 text-neutral-600' placeholder='Details' value={values.details} />
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-blue-400 rounded-lg text-center text-white hover:bg-blue-500" onClick={handleCloseModel} >Fermer</button>
                            </div>
                          </div>
                        </Dialog>

                        <RiEditBoxLine onClick={() => handleModif(row.name)} className='text-green-400 cursor-pointer text-2xl' />
                        <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={info} onClose={handleCloseModif} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                          <div className='p-16'>
                            <h3 className='text-center text-2xl font-bold'>MODIFIER LA CATEGORIE</h3>
                            <input name='Status' className='m-5 p-2 w-11/12 h-16 rounded-lg outline-0 border text-neutral-600' placeholder='Titre Status' value={values.name} onChange={handleChange} />
                            <input name='details' className='m-5 p-2 w-11/12 h-16 rounded-lg border outline-0 text-neutral-600' placeholder='Details' value={values.details} onChange={handleChange}/>
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-green-400 rounded-lg text-center text-white hover:bg-green-500" onClick={handleCloseModif} >Modifier</button>
                            </div>
                          </div>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination rowsPerPageOptions={[5, 10]} component="div" count={product.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default CatList;
