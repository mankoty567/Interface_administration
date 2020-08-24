import React, { useState} from 'react';
import Button from '@material-ui/core/Button';
import ConfigurationValueList from './ConfigurationValueList';
import utils from '../utils/utils';

/**
 * Composant faisant l'affichage des détails, et gérant la suppression des utilisateurs
 * @param {*} props Les données à traiter et envoyer
 * @param {*} delete_from_list Fonction permettant de retirer un utilisateur de la liste côté interface
 */
const UserButtonComponent = (props) => { 
    const [detailMode,setDetailMode] = useState(false);
    
    //Pour afficher les détails de données
    let detail;
    if(detailMode === true){
        detail = <ConfigurationValueList value={props}/>;
    }
    else{
        detail = <p></p>;
    }

    return <div>
        <p> {props.value.firstname} {props.value.lastname}</p>
        <Button onClick={e => setDetailMode(!detailMode)} color="primary">Modifier</Button>
        <Button onClick={e => {utils.deleteUser(props.value.id);}}>Supprimer</Button>
        {detail}
    </div>
}

export default UserButtonComponent;