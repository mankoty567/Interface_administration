import React from 'react';
import {Grid,Button,TextField,Select, MenuItem,InputLabel} from '@material-ui/core';

/**
 * Page de paramétrage des entreprises (WiP)
 */
const EntitySettings = () => {
    let entreprises = ["Test1", "Test2"];

    return <div>
        <div style={{border:"groove",paddingLeft:"200px",paddingRight:"200px",borderRadius:"10px",marginBottom:"5%"}}>
            <h1>Configurer les entreprises existantes</h1>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <InputLabel>Selectionnez une entreprise existante</InputLabel>
                    <Select>
                        {entreprises.map((entreprise)=>(
                            <MenuItem value={entreprise}>{entreprise}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={3}>
                    <ul style={{listStyle:"none"}}>
                            <li><TextField required variant="filled" label="Nom de l'entreprise"></TextField></li>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                    <ul style={{listStyle:"none"}}>
                            <li><Button>Modifier</Button></li>
                            <li><Button>Supprimer</Button></li>
                    </ul>
                </Grid>
            </Grid>
        </div>
        <div style={{border:"groove",paddingLeft:"200px",paddingRight:"200px",borderRadius:"10px",marginBottom:"5%"}}>
            <h1>Ajouter une entreprise</h1>
            <ul style={{listStyle:"none"}}>
                            <li><TextField required variant="filled" label="Nom de l'entreprise a ajouter">
                                </TextField><Button>Ajouter</Button></li>
            </ul>
        </div>
        
       
    </div>
}

export default EntitySettings;