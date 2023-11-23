import accountIcone from "../../assets/icone/user.png";
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../../style/dropMenu.css";
import axios from "axios";

function Icones() {
    const [menu, setMenu] = useState(false);
    let navigate =  useNavigate()

    const logout = () => {
        axios.post('http://localhost:8000/auth/logout/');
        navigate("/");
    }

    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setMenu(false);
                console.log(menuRef.current)
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    return (
        <div className="flex justify-end items-center h-full" ref={menuRef}>
            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5 cursor-pointer" onClick={() => { setMenu(!menu) }} />
            <div className={`dropdown-menu list-none text-center ${menu ? 'active' : 'inactive'}`}>
                <h3 className="font-bold pb-3">Menu user</h3>
                <li className="border-t pt-3 flex cursor-pointer" onClick={logout} >
                    <BiLogOut className="mt-1 mr-3" />
                    Déconnexion
                </li>
            </div>
        </div>
    );
}

export default Icones;
