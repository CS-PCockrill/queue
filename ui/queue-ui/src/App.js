import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';


import './App.css';
import { NavBar } from './components/Navigation/NavBar';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import Home from './components/HomePage/Home';
import NoMatch from './components/NoMatch';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <NavBar />
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={RegistrationForm} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment> 
      );
  }
}
 
export default App;
