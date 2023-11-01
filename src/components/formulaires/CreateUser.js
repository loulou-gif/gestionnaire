function CreateUser() {
    return(
        <div className="flex justify-center">
            <div className=" bg-neutral-300 rounded-md shadow-md w-auto m-10 p-16  ">
                <form className="">
                    <div className="flex justify-between">
                        <input className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" type="text" name="username" placeholder="Nom d'utilisateur"/>
                        <input className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" type="text" name="name" placeholder="Nom et Prénoms"/>
                    </div>
                    <div className="">
                        <input className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" type="text" name="email" placeholder="email@mail.log"/>
                        <select className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" name="direction">
                            <option selected>Selectionner</option>
                            <option >Logistique</option>
                            <option >Resources Humaine</option>
                        </select>
                    </div>
                    <div className="">
                        <input className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="*****"/>
                        <input className="m-5 p-2 w-52 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="******"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="m-5 mb-0 p-2 w-52 bg-neutral-400 rounded-lg text-center text-white hover:bg-neutral-500"  >ENREGISTRER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUser