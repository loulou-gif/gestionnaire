import React from "react";
import PropTypes from 'prop-types';
import "../../../style/manage.css";
import "../../../style/forms.css";
import Icones from "../Icones";


const Buttons = ({ activeTab, openTab }) => {
  return (
    <div>
      <header className="ml-72 w-10/11">
        <div className="bg-orange-200">
          <nav className="flex justify-between items-center h-full">
            <div className="flex justify-normal items-center h-full">
              <div
                className={`font-bold w-60 text-center pt-5 pb-5 hover:bg-orange-300 hover:border-b hover:border-black cursor-pointer ${activeTab === 'tab1' ? 'bg-orange-300 hover:border-b border-b border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab1')}
              >
                Création de compte
              </div>
              <div
                className={`font-bold w-60 text-center pt-5 pb-5 hover:bg-orange-300 hover:border-b hover:border-black cursor-pointer ${activeTab === 'tab2' ? 'bg-orange-300 hover:border-b border-b border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab2')}
              >
                Liste des utilisateurs
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
