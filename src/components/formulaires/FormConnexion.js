import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logIn = async (username, password) => {
        try {
            const response = await fetch('http://localhost:8000/auth/login/', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.ok) {
                navigate('/accueil');
            } else {
                // Traitez ici le cas où la connexion a échoué (par exemple, affichez un message d'erreur)
                console.log("La connexion a échoué");
            }

            setUsername('');
            setPassword('');
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logIn(username, password);
    }

    return (
        <div className="flex justify-around">
            <div className="text-white text-5xl font-bold mt-44 ">
                <h1>GESTIONNAIRES</h1>
            </div>
            <div className="flex justify-end h-screen">
                <div className="h-3/6 opacity-95 bg-neutral-200 pl-16 pr-16 pt-20 pb-68 mt-48 rounded-md">
                    <form className="mt-2" method="POST" onSubmit={handleSubmit}>
                        <div className="pb-5">
                            <input
                                className="w-11/12 mt-2 mb-2 outline-0 rounded-md bg-neutral-300 pt-4 pb-4 pl-5"
                                placeholder="Nom d'utilisateur"
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="w-92 pb-5">
                            <input
                                className="w-11/12 mt-2 mb-2 outline-0 rounded-md bg-neutral-300 pt-4 pb-4 pl-5"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end w-11/12">
                            <button
                                className="w-28 pt-2 mr-15 pb-2 mb-3 rounded-md duration-300 hover:duration-300 bg-yellow-600 hover:bg-yellow-700 text-white"
                                type="submit"
                            >
                                CONNEXION
                            </button>
                        </div>
                        <div className="">
                            <p className="w-11/12 pb-20">
                                Mot de passe oublié? Contactez votre administrateur.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
