import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';


import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { RegistrationForm } from './components/RegistrationForm/registrationform';
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
              <Route path="/register" component={RegistrationForm} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment> 
      );
  }
}
 
export default App;
