import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import DashboardContainer from './components/LandingPage/DashboardContainer';
import { Provider } from 'react-redux';

import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App () {
  // const [username, setUsername] = useState('ATTM')
  return (
    // <Router>
  //   <Switch>
  //   <Route exact path='/' component={Login} />
  //   <Route path="/Dashboard" exact>
  //     <DashboardContainer/>
  //   </Route>
  // </Switch>
    // </Router>
    <div>
      <h1>DocsTour</h1>
      <DashboardContainer />
    </div>
  );
}
