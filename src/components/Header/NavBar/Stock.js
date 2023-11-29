import React from "react";
import PropTypes from 'prop-types';
import "../../../style/manage.css";
import "../../../style/forms.css";
import Icones from "../Icones";

const Buttons = ({ activeTab, openTab }) => {
  return (
    <div>
      <header className="ml-72 w-10/11">
        <div className="bg-sky-950">
          <nav className="flex justify-between items-center h-full">
            <div className="flex justify-normal items-center h-full">
              <div
                className={`font-bold w-60 text-center text-white pt-5 pb-5 hover:bg-gray-400 hover:border-b hover:text-white hover:border-black cursor-pointer${activeTab === 'tab1' ? 'text-white bg-gray-400 hover:border-b border-b border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab1')}
              >
                Création de demande
              </div>
              <div
                className={`font-bold w-60 text-center text-white pt-5 pb-5 hover:bg-gray-400 hover:border-b hover:text-white hover:border-black cursor-pointer${activeTab === 'tab2' ? 'text-white bg-gray-400 hover:border-b border-b border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab2')}
              >
                Réception de colis
              </div>
              <div
                className={`font-bold w-60 text-center pt-5 pb-5 text-white hover:bg-gray-400 hover:text-white hover:border-b hover:border-black cursor-pointer ${activeTab === 'tab3' ? ' bg-gray-400 text-white hover:border-b border-b border-black cursor-pointer' : ''}`}
                onClick={() => openTab('tab3')}
              >
                Gestion stock
              </div>
            </div>
            <Icones/>
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
