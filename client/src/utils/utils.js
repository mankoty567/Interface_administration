/**
 * Aurait dû être utilisé pour communiquer avec l'API, mais
 * génère des erreurs.
 */
module.exports = {
    add_user: (p) =>{
        fetch('http://localhost:3010/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(p)})
            .then(res=> res.json())
    },

    get_user: () =>{
        fetch('http://localhost:3010/user',{
            method: 'GET'
        })
        .then((res) => res.json())
    },

    deleteUser: (id) =>{
        fetch(`http://localhost:3010/user/${id}`,{
            method: 'DELETE'
        })
        .then((res) =>res.json())
    }
};
