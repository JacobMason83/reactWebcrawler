import React, { Component, Fragment } from 'react';
import { firebase } from '../actions/firebaseconfig'
// import {BrowserRouter as Route, Router, Switch} from 'react-router-dom'

// component imports
import NavBar from './navigationBar/navbar'
import Home from './pages/homepage'

const  App = () => {
  
  
    return (
      <Fragment>
   <NavBar />
      <Home />
      </Fragment>
    );
  
}
export default App