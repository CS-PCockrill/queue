import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/registrationform';
import { 
    BrowserRouter as Router,
    Switch,
    Route 
    } from 'react-router-dom';


import './App.css';
import Counters from './components/counters';
import Navigation from './components/navigation'

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

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({counters});
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }
  render() { 
    return ( 
      <Router>
        <React.Fragment className="App">
          <Navigation />
            <div className="container d-flex align-items-center flex-column">
              <Switch>
                <Route path="/" exact={true}>
                  <RegistrationForm />
                </Route>
              </Switch>
            </div>
        </React.Fragment>
      </Router> 
      );
  }
}
 
export default App;
