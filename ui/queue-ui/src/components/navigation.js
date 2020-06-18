import React, { Component } from 'react';

const NavItem = props => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
 
    return(
        <li className={liClassName}>
            <a href={props.path} className={aClassName} style={{color: "white"}}>
            {props.name}
            {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>        
    );
}

class Navigation extends Component {

    render() { 
        
        return (
            <React.Fragment>
            <nav style={{backgroundColor: 'black'}} className="navbar navbar-expand-lg">
            <a style={{color: "white"}} className="navbar-brand" href="/">Queue</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div style={{color: "white"}} className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <NavItem path="/" name="Home"/>
                    <NavItem path="/" name="Stores"/>
                    <NavItem path="/" name="Deliver"/>
                </ul>
                <ul className="navbar-nav">
                    <NavItem path="/" name="Sign In"/>
                    <NavItem path="/registration" name="Register"/>
                </ul>
            </div>
            </nav>
            </React.Fragment>
            
        );
    }
}
 
export default Navigation;