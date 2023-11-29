import React from "react";
import PropTypes from 'prop-types';
import "../../../style/manage.css";
import "../../../style/forms.css";
import Icones from "../Icones";

const HistButtons = ({ activeTab, openTab }) => {
  return (
    <div>
      <header className="ml-72 w-10/11">
        <div className="bg-sky-950">
          <nav className="flex justify-between items-center h-full">
            <div className="flex justify-normal items-center h-full">
              <div className={`font-bold w-60 pt-5 pb-5 text-center text-white hover:bg-gray-400 hover:text-white hover:border-b hover:border-black cursor-pointer ${activeTab === 'tab1' ? 'bg-gray-400 hover:border-b border-b text-white  border-black cursor-pointer' : ''}`} onClick={() => openTab('tab1')}>Historique de connexion</div>
              <div className={`font-bold w-60 pt-5 pb-5 text-center text-white hover:bg-gray-400 hover:text-white hover:border-b hover:border-black cursor-pointer ${activeTab === 'tab2' ? 'bg-gray-400 hover:border-b border-b text-white  border-black cursor-pointer' : ''}`} onClick={() => openTab('tab2')}>Historique des actions</div>
            </div>
            < Icones />
          </nav>
        </div>
      </header>
    </div>
  );
};

HistButtons.propTypes = {
  activeTab: PropTypes.string.isRequired,
  openTab: PropTypes.func.isRequired,
};

export default HistButtons;
