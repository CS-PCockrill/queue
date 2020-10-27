import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';


import './App.css';
import { NavBar } from './components/Navigation/NavBar';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/HomePage/Home';
import NoMatch from './components/NoMatch';
import UserDashboard from './components/Dashboard/UserDashboard';
import Login from './components/Login/Login';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <div className="App">
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={RegistrationForm} />
                <Route path="/dashboard" component={UserDashboard} />
                <Route path="/login" component={Login} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </React.Fragment> 
      );
  }
}
 
export default App;
