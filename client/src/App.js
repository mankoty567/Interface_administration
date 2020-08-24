import React from 'react';
import './App.css';
import UserList from './templates/UserList';
import EntitySettings from './templates/EntitySettings';
import BoxSettings from './templates/BoxSettings';
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Link to='/user'>Paramétrer les utilisateurs</Link>
              </Grid>
              <Grid item xs={4}>
               <Link to='/entity'>Paramétrer les entreprises</Link>
              </Grid>
              <Grid item xs={4}>
                <Link to='/box'>Paramétrer les boitiers</Link>
              </Grid>
            </Grid>

            <Switch>
              <Route exact path='/'>
                <UserList/>
                </Route>
              <Route path="/entity">
                <EntitySettings/>
              </Route>
              <Route path='/box'>
                <BoxSettings/>
              </Route>
              <Route path='/user'>
                <UserList/>
              </Route>
              <Redirect to='/'/>
            </Switch>
        </HashRouter>
        
      </header>
    </div>
  );
}

export default App;
