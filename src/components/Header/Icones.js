import accountIcone from "../../assets/icone/user.png";
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../../style/dropMenu.css";
import axios from "axios";

function Icones() {
    const [menu, setMenu] = useState(false);
    // const history = useHistory();  // Initialisez le hook useHistory

    // const handleLogout = async () => {
    //     try {
    //         // Effectuez une requête à votre API de déconnexion
    //         const response = await fetch('http://localhost:8000/auth/logout/', {
    //             method: 'POST',  // Assurez-vous que la méthode HTTP est correcte
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 // Ajoutez d'autres en-têtes si nécessaire (par exemple, des jetons d'authentification)
    //             },
    //         });

    //         if (response.ok) {
    //             // Si la déconnexion réussit, redirigez l'utilisateur vers la page de connexion
    //             history.push('/login');
    //         } else {
    //             // Gérez les erreurs de déconnexion ici
    //             console.error('Échec de la déconnexion');
    //         }
    //     } catch (error) {
    //         // Gérez les erreurs réseau ici
    //         console.error('Erreur réseau lors de la déconnexion', error);
    //     }
    // };

    let navigate =  useNavigate()

    const logout = () => {

        axios.post('http://localhost:8000/auth/logout/');
        navigate("/")


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

        // Retirez l'écouteur d'événements lors du nettoyage
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
