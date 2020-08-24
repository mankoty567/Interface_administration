import React from 'react';
import {Grid,Button,TextField,Select, MenuItem,InputLabel} from '@material-ui/core';

/**
 * Page de paramétrage des boitiers (WiP)
 */
const EntitySettings = () => {
    let boxes = ["Test1", "Test2"];
    let owner = ["Test1", "Test2"];

    return <div>
        <div style={{border:"groove",paddingLeft:"200px",paddingRight:"200px",borderRadius:"10px",marginBottom:"5%"}}>
            <h1>Configurer les entreprises existantes</h1>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <InputLabel>Selectionnez un boitier existant</InputLabel>
                    <Select>
                        {boxes.map((box)=>(
                            <MenuItem value={box}>{box}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={3}>
                    <ul style={{listStyle:"none"}}>
                            <li><TextField required variant="filled" label="ID boitier"></TextField></li>
                            <li><TextField required variant="filled" label="Vehicule"></TextField></li>
                            <li><TextField required variant="filled" label="Immatriculation"></TextField></li>
                            <li><InputLabel>Propriétaire</InputLabel>
                            <Select variant="filled">
                                <MenuItem value="">Aucun</MenuItem>
                                {owner.map((owner)=>(
                                    <MenuItem value={owner}>{owner}</MenuItem>
                                ))}
                            </Select></li>
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
            <h1>Ajouter un boitier</h1>
            <form>
                <ul style={{listStyle:"none"}}>
                    <li><TextField required variant="filled" label="ID boitier"></TextField></li>
                    <li><TextField required variant="filled" label="Vehicule"></TextField></li>
                    <li><TextField required variant="filled" label="Immatriculation"></TextField></li>
                    <li><InputLabel>Propriétaire</InputLabel>
                    <Select variant="filled">
                        <MenuItem value="">Aucun</MenuItem>
                        {owner.map((owner)=>(
                            <MenuItem value={owner}>{owner}</MenuItem>
                        ))}
                </Select></li>
                </ul>
                <Button>Ajouter le boitier</Button>
            </form>
                
        </div>
        
       
    </div>
}

export default EntitySettings;