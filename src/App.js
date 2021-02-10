import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';


function App() {
  return (
     <>
      
     <Navbar brandName="Ratina Touch Mobile" / >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
     </>
  );
}

export default App;
