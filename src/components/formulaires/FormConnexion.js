import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

function Connexion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const logIn = async (username, password) => {
        await fetch('http://localhost:8000/auth/login/', {method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            // userId: Math.random().toString(36).slice(2),
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => {
            response.json();
            navigate('/accueil');
        })
        .then((data) => {
            setUsername('');
            setPassword('');
        })
        .catch((err) =>{
            console.log(err.message);
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(username, password);
    }
    
    return(
        <div className="flex justify-around">
            <div className="text-white text-5xl font-bold mt-44 ">
                <h1>GESTIONNAIRES</h1>
            </div>
            <div className="flex justify-end h-screen">
                <div className="h-96 opacity-95  bg-neutral-200 p-16 mt-48 rounded-md">
                    <form className="mt-8" method="POST"  onSubmit={handleSubmit}>
                        <div className="pb-5">
                            <input className="w-64 outline-0 rounded-md bg-neutral-300 pt-2 pb-2 pl-5" placeholder="Nom d'utilisateur" type="text" name="username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="w-64 pb-5">
                            <input className="w-64 outline-0 rounded-md bg-neutral-300 pt-2 pb-2 pl-5" placeholder="Password" type="password" name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="flex justify-end">
                            <button className="w-28 pt-2 pb-2 mb-3 rounded-md bg-yellow-600 hover:bg-yellow-700  text-white">CONNEXION</button>
                        </div>
                        <div className="">
                            <p className="w-64">Mot de passe oublié? Contactez votre administrateur.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
export default Connexion