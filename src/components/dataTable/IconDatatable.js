import React from 'react';
import { MdOutlineDeleteForever, MdOutlineInfo } from 'react-icons/md';
import { RiEditBoxLine } from "react-icons/ri";

const ActionsCell = () => (
  <div className='flex'>
    <MdOutlineInfo className='text-xl text-green-400 cursor-pointer' onClick={() => handleInfoClick()} />
    <RiEditBoxLine className='text-xl text-orange-400 cursor-pointer' onClick={() => handleEditClick()} />
    <MdOutlineDeleteForever className='text-xl text-red-500 cursor-pointer' onClick={() => handleDeleteClick()} />
  </div>
);

const handleInfoClick = () => {
  // Logique pour gérer le clic sur l'icône d'information
  console.log('Info clicked');
};

const handleEditClick = () => {
  // Logique pour gérer le clic sur l'icône d'édition
  console.log('Edit clicked');
};

const handleDeleteClick = () => {
  // Logique pour gérer le clic sur l'icône de suppression
  console.log('Delete clicked');
};

export default ActionsCell;
