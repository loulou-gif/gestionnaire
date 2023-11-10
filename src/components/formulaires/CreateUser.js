// import '../../style/forms.css'
import React from "react"

function CreateUser() {
    // const [direction, setDirection] = useState([]);
    // useEffect(() => {
    //   fetch('http://127.0.0.1:8000/direction/')
    //   .then((response) => response.json())
    //   .then((data) =>{
    //     console.log(data);
    //     setDirection(data);
    //   } )
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    // }, []);

    // const managments = direction.map(managment =>(
    //         <option key={managment.id}>{managment.direction}</option>
    // ))


    return(
        
        <div className=''>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
                <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                    <form className="" method="POST">
                        <div className="">
                            <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="username" placeholder="Nom d'utilisateur"/>
                            <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="last_name" placeholder="Nom"/>
                        </div>
                        <div className="">
                            <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="first_name" placeholder="Prénoms"/> 
                            <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="email" placeholder="email@mail.log"/>
                            {/* <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="direction">
                                <option selected>Selectionner</option>
                                {managments}
                            </select> */}
                        </div>
                        <div className="">
                            {/* <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="numero" placeholder="Numéro de téléphone"/> */}
                            <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="password" name="password" placeholder="Mot de passe"/>
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

export default CreateUser