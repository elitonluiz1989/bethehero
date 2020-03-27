import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogonPage from './pages/Logon';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import NewIncidentPage from './pages/Incidents/New';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogonPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/incidents/new" component={NewIncidentPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;