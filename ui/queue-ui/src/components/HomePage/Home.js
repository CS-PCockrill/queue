import React, { Component } from 'react';
import { Jumbotron } from './Jumbotron';
import MainContent from './MainContent';
// import { NavigationBar } from '../NavigationBar';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Jumbotron />
                {/* <MainContent /> */}
            </React.Fragment>
          );
    }
}
 
export default Home;