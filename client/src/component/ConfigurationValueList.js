import React, { useState } from 'react';
import {Grid,Button,TextField,Select, MenuItem,InputLabel} from '@material-ui/core';

/**
 * Le composant permettant de modifier les valeurs au sein d'un utilisateur
 * @param {*} props 
 */
const ConfigurationValueList = (props) =>{
    //Choix de l'utilisateur quant à au mode
    const [selected,setSelected]= useState('user');

    //Pour raccourcir les valeurs
    props = props.value.value;

    //Les valeurs du formulaire
    const [firstname, setFirstname] = useState(props.firstname);
    const [lastname, setLastname] = useState(props.lastname);
    const [email, setEmail] = useState(props.mail);
    const [password, setPassword] = useState(props.password);
    const [type, setType] = useState(props.type);

    const [errorMessage,setErrorMessage] = useState('');

    //Valeur du formulaire à afficher
    let formValue;

    //Validation de l'email côté client
    const isMail = (mail) => {
        let regex = /\S+@\S+\.\S+/;
        return regex.test(mail);
    }
    

    //Fonction permettant d'effectuer la requête fetch pour modifier le tout
    const handleSubmit = e =>{
        if(isMail(email)){
            e.preventDefault();
            fetch(`http://localhost:3010/user/${props.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname,lastname,email,password,type})})
            .then(res=> res.json());
            setErrorMessage(``);
        }
        else{
            setErrorMessage(`Votre adresse mail n'est pas valide !`);
        }
    }   

    switch(selected){
        /**
         * Formulaire pour paramétrer les informations utilisateur
         */
        case 'user':     
            formValue = 
            <form onSubmit={handleSubmit}>
                <p style={{color:'red'}}>{errorMessage}</p>
                <ul style={{listStyle:"none"}}>
                    <li><TextField required variant="filled" label="Nom" defaultValue={firstname} onChange={e => setFirstname(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Prénom" defaultValue={lastname} onChange={e => setLastname(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Email" defaultValue={email} onChange={e => setEmail(e.target.value)}></TextField></li>
                    <li><TextField required variant="filled" label="Mot de passe" type="password" defaultValue={password} onChange={e => setPassword(e.target.value)}></TextField></li>

                    <li><InputLabel>Type</InputLabel>
                        <Select required variant="filled" defaultValue={type} onChange={e => setType(e.target.value)}>
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="fleet_manager">Gestionnaire de flotte</MenuItem>
                        <MenuItem value="member">Salarié</MenuItem>
                        </Select></li>
                </ul>   
                <Button type="submit">Valider les changements</Button>
            </form>
            
            break;

         /**
         * Formulaire pour paramétrer l'entreprise de l'utilisateur
         */
        case 'entity':
            let entreprises = ["test","test2"];

            formValue = 
            <form>
                <ul style={{listStyle:"none"}}>
                    <li><InputLabel>Entreprise</InputLabel>
                        <Select required variant="filled">
                            {entreprises.map((entreprise)=>(
                                <MenuItem value={entreprise}>{entreprise}</MenuItem>
                            ))}
                        </Select></li>
                    <Button type="submit">Valider les changements</Button>
                </ul>
            </form>
            break;

            /**
             * Formulaire pour configurer les boitiers appartenant à un utilisateur
             */
        case 'box':
            //Valeurs de test
            let boxId = ["MEMFDHJSFAS51FASDSQADF","MEMFDHJSFAS51FASDSQADG","MEMFDHJSFAS51FASDSQADH"];
            formValue = 
            <form>
                <ul style={{listStyle:"none"}}>
                    <li><InputLabel>Id de boitier</InputLabel>
                    <Select required variant="filled">
                            {boxId.map((box)=>(
                                <MenuItem value={box}>{box}</MenuItem>
                            ))}
                        </Select></li>
                    <Button type="submit">Valider les changements</Button>
                </ul>
                
            </form>
            break;
            //Pour éviter le warning
            default:
                break;
    }

    return <div>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <ul style={{listStyle:"none"}}>
                    <li><Button onClick={() => setSelected('user')}>Informations</Button></li>
                    <li><Button onClick={() => setSelected('entity')}>Entreprise</Button></li>
                    <li><Button onClick={() => setSelected('box')}>Boitier</Button></li>
                </ul>
            </Grid>
            <Grid item xs={6}>
                {formValue}
            </Grid>
        </Grid>
    </div>
    
};

export default ConfigurationValueList;