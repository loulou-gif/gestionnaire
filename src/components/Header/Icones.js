import accountIcone from "../../assets/icone/user.png";
import { BiLogOut } from 'react-icons/bi';
// import { useHistory } from 'react-router-dom';  // Importez le hook useHistory
import { useState, useEffect } from "react";
import "../../style/dropMenu.css";

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

    useEffect(() => {
        let handler = () => {
            setMenu(false);
        };

        document.addEventListener('mousedown', handler);

        // Retirez l'écouteur d'événements lors du nettoyage
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    return (
        <div className="flex justify-end items-center h-full">
            <img src={accountIcone} alt="comptes" className="w-10 pr-3 mr-5 cursor-pointer" onClick={() => { setMenu(!menu) }} />
            <div className={`dropdown-menu list-none text-center ${menu ? 'active' : 'inactive'}`}>
                <h3 className="font-bold pb-3">Menu user</h3>
                <li className="border-t pt-3 flex cursor-pointer" >
                    <BiLogOut className="mt-1 mr-3" />
                    Déconnexion
                </li>
            </div>
        </div>
    );
}

export default Icones;
