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
import axios from 'axios';


function StockList() {
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(false)
  const [modif, setModif] = useState(false)
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({
    name:"",
    location:"",
    status:'',
    category:"",
    image:'',
    price:"",
    quantity:"",
  })

  
  
  

  const handleOpenAlert = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/stock/${id}`)
      .then((response) => {
        // Mettre à jour l'état après la suppression
        setProduct((prevProducts) => prevProducts.filter((product) => product.id !== id));
        setOpen(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression :', error);
      });
  }
  
  const handleChangeModif = (id) => {
    axios.put(`http://localhost:8000/stock/${id}`, values)
      .then((response) => {
        // Mettre à jour l'état après la modification
        setProduct((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, ...values } : product)));
        console.log(response)
        setOpen(false);
      })
      .catch((error) => {
        console.error('Erreur lors de la modification :', error);
      });
  }
  

  const handleModel = (name) => {
    const selectProduct = product.find((item) => item.name === name)
    setValues({
      name: selectProduct.name,
      location: selectProduct.location,
      status:selectProduct.status,
      category: selectProduct.category,
      image:selectProduct.image,
      price: selectProduct.price,
      quantity: selectProduct.quantity,
    })
    setModif(true)
  }

  const handleCloseModel = () => {
    setModif(false)
  }
  const handleModif = (name) => {
    const selectProduct = product.find((item) => item.name === name)
    setValues({
      name: selectProduct.name,
      location: selectProduct.location,
      status:selectProduct.status,
      category: selectProduct.category,
      image:selectProduct.image,
      price: selectProduct.price,
      quantity: selectProduct.quantity,
    })
    setInfo(true)
  }
  const handleCloseModif = () => {
    setInfo(false)
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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Emplacement/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const locations = location.map((locate) => (
    <option key={locate.id}>{locate.name}</option>
  ));
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/status-produit/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStatus(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const statuts = status.map((state) => (
    <option key={state.id}>{state.name}</option>
  ));

  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/categories-produits/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategorie(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const categories = categorie.map((cat) => (
    <option key={cat.id}>{cat.name}</option>
  ));
  // const conditionalRowStyles = [
  //   {
  //     when: (row) => row.status === 'Indisponible', // Remplacez 'votre_condition' par la condition que vous souhaitez vérifier
  //     style: {
  //       // backgroundColor: 'red', // Remplacez 'votre_couleur' par la couleur souhaitée
  //       color: 'Red', // Remplacez 'votre_couleur_texte' par la couleur du texte souhaitée
  //     },
  //   },
  // ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(value)
  };

  return (
    <div>
      <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
        <div className="content bg-neutral  rounded-md  shadow-md ml-80 md:ml-40 -mr-64 p-14 w-11/12">
          <h1 className='text-2xl font-semibold font-serif'>Liste des produits</h1>
          <TableContainer>
        <Table sx={{ maxWidth: 980 }} className="mt-10" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Produit</TableCell>
              <TableCell align="left">Catégories</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Emplacement</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Quantité</TableCell>
              <TableCell align="left"  >Prix unitaire</TableCell>
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
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                  <div className='flex justify-end'>
                  <React.Fragment>
                      <MdOutlineDeleteForever onClick={handleOpenAlert} className='text-red-500 cursor-pointer text-2xl'/>
                      <Dialog 
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
                            <button className=' w-20 h-10 bg-red-500 rounded-xl duration-200 hover:bg-red-700 hover:duration-300 text-white' onClick={() => handleDelete(row.id)}> Oui</button>
                            <button className=' w-20 h-10 bg-green-500 rounded-xl duration-200 hover:bg-green-700 hover:duration-300 text-white'onClick={handleClose}> Non</button>
                          </DialogActions>
                      </Dialog>
                      <MdOutlineInfo onClick={() => handleModel(row.name)} className='text-blue-500 cursor-pointer text-2xl' />
                      
                      <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={modif} onClose={handleCloseModel} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <div className='p-16 w-12/12' >
                            <h3 className='text-center text-2xl font-bold'>INFORMATIONS SUR LE PRODUIT</h3>
                            <div className='flex'>
                              <img alt='product_picture' src={row.image} className='w-80 mt-10'/>
                              <h5 className='m-5 pr-20 p-5 w-11/12 h-16 rounded-lg mt-24 border-b   text-neutral-600'>{values.name }</h5>
                           </div>
                           
                            <div className='flex w-12/12'>
                              <h3 className='m-5 pr-20 p-5 w-11/12 pb-5 h-16 rounded-lg  border-b text-neutral-600'>{values.category }</h3>
                            </div>
                            <div className='flex w-12/12'>
                              <h3 className='m-5 pr-20 p-5 w-60 pb-5 h-16 rounded-lg  border-b text-neutral-600'>{values.price } FCFA</h3>
                              <h3 className='m-5 pr-20 p-5 w-64  h-16 rounded-lg  border-b text-neutral-600'>{values.location }</h3>
                            </div>
                            <div className='flex'>
                              
                            <h3 className='m-5 pr-20 p-5 w-60 pb-5 h-16 rounded-lg  border-b text-neutral-600'>{values.quantity } {values.name}</h3>
                              <h3 className='m-5 pr-20 p-5 w-64  h-16 rounded-lg  border-b text-neutral-600'>{values.status }</h3>
                            </div>
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-blue-400 rounded-lg text-center text-white hover:bg-blue-500" onClick={handleCloseModel} >Fermer</button>
                            </div>
                        </div>
                      </Dialog>
                      
                    <RiEditBoxLine onClick={() => handleModif(row.name)} className='text-green-400 cursor-pointer text-2xl' />
                    <Dialog className='' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} open={info} onClose={handleCloseModif} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <div className='p-16' >
                            <h3 className='text-center text-2xl font-bold'>MODIFIER LE PRODUIT</h3>
                            <input name='name'  className='m-5 p-2 w-11/12 h-16 rounded-lg  outline-0 border-b text-neutral-600' placeholder='Nom du produit' value={`${values.name }`} onChange={handleChange} />
                            <div className='flex'>
                            <input name='quantity'  className='m-5 p-2 w-11/12 h-16 rounded-lg  border-b outline-0 text-neutral-600'placeholder='quantity' value={`${values.quantity}`} onChange={handleChange}/>
                            <input name='price'  className='m-5 p-2 w-11/12 h-16 rounded-lg  border-b outline-0 text-neutral-600'placeholder='price' value={`${values.price }`} onChange={handleChange}/>
                            </div>
                            <select className="m-5 p-2 w-11/12 h-16 rounded-lg outline-0 border-b text-neutral-600" value={product.category} name="category"
                            > {categories } 
                            </select>
                            <select className="m-5 p-2 w-11/12 h-16 rounded-lg outline-0 border-b text-neutral-600" value={product.status} name="status"
                            > {statuts}
                            </select>
                            <select className="m-5 p-2 w-11/12 h-16 rounded-lg outline-0 border-b text-neutral-600" value={product.location} name="location"
                            >  {locations}
                            </select>
                            <div className="flex justify-center">
                              <button className="m-5 mb-0 p-2 w-72 duration-300 hover:duration-300 bg-green-400 rounded-lg text-center text-white hover:bg-green-500" onClick={() => handleChangeModif(row.id)} >Modifier</button>
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

export default StockList;
