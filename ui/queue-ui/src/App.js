import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';
import { Layout } from './components/Layout';

import './App.css';
import { NavigationBar } from './components/NavigationBar';
import Home from './components/HomePage/Home';
import { About } from './components/About';
import Stores from './components/Stores';
import { RegistrationForm } from './components/RegistrationForm/registrationform';
import NoMatch from './components/NoMatch';

class App extends Component {
  state = {
    
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    console.log('App - Mounted')
  }



  render() { 
    return ( 
      
        <React.Fragment>
          <NavigationBar />
          
            <Router>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/stores" component={Stores}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/registrationform" component={RegistrationForm}></Route>
                <Route component={NoMatch}/>
              </Switch> 
            </Router>
          
        </React.Fragment> 
      );
  }
}
 
export default App;
