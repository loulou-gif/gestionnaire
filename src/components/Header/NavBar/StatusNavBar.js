import React from "react";
import PropTypes from 'prop-types';
import "../../../style/manage.css";
import "../../../style/forms.css";
import Icones from "../Icones";

const Buttons = ({ activeTab, openTab }) => {
  return (
    <div>
      <header className="ml-72 w-10/11">
        <div className="bg-blue-900">
          <nav className="flex justify-between items-center h-full">
            <div className="flex justify-normal items-center h-full">
              <div
                className={`font-bold w-60 text-center text-white pt-5 pb-5 hover:bg-white hover:border-b hover:text-black hover:border-black cursor-pointer ${activeTab === 'tab1' ? 'bg-white hover:border-b border-b text-black  border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab1')}
              >
                Cration de statut 
              </div>
              <div
                className={`font-bold w-60 text-center text-white pt-5 pb-5 hover:bg-white hover:border-b hover:text-black hover:border-black cursor-pointer ${activeTab === 'tab2' ? 'bg-white hover:border-b border-b text-black  border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab2')}
              >
                Liste de statuts
              </div>
            </div>
            <Icones />
          </nav>
        </div>
      </header>
    </div>
  );
};

Buttons.propTypes = {
  activeTab: PropTypes.string.isRequired,
  openTab: PropTypes.func.isRequired,
};

export default Buttons;
