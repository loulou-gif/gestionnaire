import React from "react"

function FormGeneral() {
    return(
        <div>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-zinc-200 rounded-md shadow-md ml-64 p-14 ">
                    <form className="" method="POST">
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="username" placeholder="Nom d'utilisateur"/>
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="email" placeholder="email@mail.log"/>
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
                        </div>
                        <div className="flex justify-center">
                            <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 duration-300 hover:duration-300 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormGeneral