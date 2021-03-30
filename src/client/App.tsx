import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import DashboardContainer from './components/LandingPage/DashboardContainer';
import { Provider } from 'react-redux';
import './app.css';

export default function App (){
  // const [username, setUsername] = useState('ATTM')
    return (
      <div>
        {/* <h1>DocsTour</h1> */}
        <DashboardContainer />
      </div>
    );
}