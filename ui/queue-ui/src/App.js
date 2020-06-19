import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';


import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { RegistrationOptions } from './components/RegistrationForm/RegistrationOptions';
import { RegistrationForm } from './components/RegistrationForm/Customer/RegistrationForm';
import { SignInOptions } from './components/SignIn/SignInOptions';
import Home from './components/HomePage/Home';
import About from './components/About';
import Stores from './components/Stores';
import NoMatch from './components/NoMatch';
import { Layout } from './components/Layout'

class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <NavigationBar />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/stores" component={Stores} />
              <Route path="/register" component={RegistrationOptions} />
              <Route path="/registercustomer" component={RegistrationForm} />
              <Route path="/signin" component={SignInOptions} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment> 
      );
  }
}
 
export default App;
