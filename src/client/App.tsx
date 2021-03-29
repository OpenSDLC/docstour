import React, { useState, useEffect } from 'react';
import { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { Provider } from 'react-redux';
import './app.css';

export default function App (){
  const [username, setUsername] = useState('ATTM')
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <h1>This is a changed element.</h1>
        <LandingPage />
      </div>
    );
}