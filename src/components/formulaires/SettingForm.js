import React from "react"

function SettingForm() {
    return(
        <div>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                    <form className="" method="POST">
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="direction" placeholder="Nom direction"/>
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="manager" placeholder="Nom du manager"/>
                            
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
                            <input className="m-5 p-2 w-64 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="confirmer mot de passe"/>
                        </div>
                        <div className="flex justify-center">
                            <button className="m-5 mb-0 p-2 w-72 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SettingForm