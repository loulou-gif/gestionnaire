function CreateProduct() {
    return(
        <div>
        <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-72">
            <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 ">
                <form className="" method="POST">
                    <div className="">
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="categories">
                                <option selected>Selectionner</option>
                        </select>
                        <select className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" name="status">
                                <option selected>Selectionner</option>
                        </select> 
                    </div>
                    <div className="">
                        <input className="m-5 p-2 w-11/12 rounded-lg outline-0 text-neutral-600" type="text" name="product" placeholder="Nom du produit"/>
                        
                    </div>
                    <div className="">
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="text" name="emplacement" placeholder="emplacement"/>
                        <input className="m-5 p-2 w-72 rounded-lg outline-0 text-neutral-600" type="number" name="quantity" placeholder="quantité (Exp: 10)"/>
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

export default CreateProduct