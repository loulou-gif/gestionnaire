import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";
import { Table,TablePagination } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogContent } from '@material-ui/core';
import { Dialog, DialogActions, DialogContentText, DialogTitle } from '@mui/material';


function StockList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false)
  const [modif, setModif] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpenAlert = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

 
  const handleModif = () => {
    setModif(!modif)
  }
  const handleModel = () => {
    setInfo(!info)
    console.log("c'est ok")
  }

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

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

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
          <TableContainer>
        <Table sx={{ maxWidth: 850 }} className="mt-10" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Produit</TableCell>
              <TableCell align="left">Catégories</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Emplacement</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Quantité</TableCell>
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
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left"> <img alt='img' src={row.image} /></TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">
                  <div className='flex justify-end'>
                  <React.Fragment>
                      <MdOutlineDeleteForever onClick={handleOpenAlert} className='text-red-500 cursor-pointer text-2xl'/>
                      <Dialog 
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
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
                      </Dialog>
                    </React.Fragment>
                    <MdOutlineInfo onClick={handleModel} className='text-blue-500 cursor-pointer text-2xl' />
                    <RiEditBoxLine onClick={handleModif} className='text-green-400 cursor-pointer text-2xl' />
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

export default StockList;
