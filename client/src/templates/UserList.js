import React, { useState, useEffect } from 'react';
import UserButtonComponent from '../component/UserButtonComponent';
import { Button, TextField, InputLabel,Select,MenuItem } from '@material-ui/core';


 /**
  * Page de paramétrage des utilisateurs
  */
const UserList = () => {
    //La liste des utilisateurs
    const [items,setItems] = useState([]);

    //Gestion de l'ajout d'un utilisateur
    const addUser = e =>{
        if(isMail(email)){
            e.preventDefault();
            fetch('http://localhost:3010/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname,lastname,email,password,type})})
            .then(res=> res.json())
            .then(user => setItems(items => [...items,user]));
            setErrorMessage(``);
        }
        else{
            setErrorMessage(`Votre adresse mail n'est pas valide !`);
        }
    }

    //Valeurs de champs de formulaire d'ajout
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    const [errorMessage,setErrorMessage] = useState('');

    //Récupération de la liste d'utilisateurs
    useEffect(()=> {
        fetch('http://localhost:3010/user',{
            method: 'GET'
        })
        .then((res) => res.json())
        .then(users => setItems(users))
    },[])

    //Validation de l'email côté client
    const isMail = (mail) => {
        let regex = /\S+@\S+\.\S+/;
        return regex.test(mail);
    }

    return <div>
        <div>
            <h1>Gérer les utilisateurs</h1>
            <ul style={{listStyle:"none"}}>
                {items.map((item) => (
                    <li style={{border:"groove",paddingLeft:"200px",paddingRight:"200px",borderRadius:"10px",marginBottom:"5%"}}>
                        <UserButtonComponent value={item}/>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h1>Ajouter un utilisateur</h1>
            <form onSubmit={addUser}>
                <p style={{color:'red'}}>{errorMessage}</p>
                <ul style={{listStyle:"none"}}>
                    <li><TextField required variant="filled" label="Nom" onChange={e => setFirstname(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Prénom" onChange={e=> setLastname(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Email" onChange={e=> setEmail(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Mot de passe" type="password" onChange={e=> setPassword(e.target.value)} on></TextField></li>

                    <li><InputLabel>Type</InputLabel>
                        <Select required variant="filled" onChange={e => setType(e.target.value)}>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="fleet_manager">Gestionnaire de flotte</MenuItem>
                        <MenuItem value="member">Salarié</MenuItem>
                        </Select></li>
                </ul>   
                <Button type="submit">Valider l'ajout</Button>
            </form>
        </div>
        
    </div>
};

export default UserList;