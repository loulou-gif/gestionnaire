import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

function UserList() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Exemple de données à charger dans le tableau
        const data = [
            { name: 'John Doe', username: 'johnny', email: 'john@example.com', direction: 'East', role: 'Admin' },
            // Ajoutez d'autres données ici...
        ];

        setTableData(data); // Met à jour les données du tableau
    }, []); // Utilisation d'une dépendance vide pour exécuter cela une seule fois

    const columns = [
        { title: 'Nom', field: 'name' },
        { title: 'Nom d\'utilisateur', field: 'username' },
        { title: 'Email', field: 'email' },
        { title: 'Direction', field: 'direction' },
        { title: 'Rôle', field: 'role' },
    ];

    return (
        <div className=''>
            <div className="tab-content grid grid-rows-auto grid-rows-1 grid-rows-auto mt-44">
                <div className="content bg-neutral-300 rounded-md shadow-md ml-64 p-14 w-96 max-h-min ">
                    <MaterialTable columns={columns} data={tableData} />
                </div>
            </div>
        </div>
    );
}

export default UserList;
