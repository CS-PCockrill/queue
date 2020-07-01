import React, {useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #fff;
        font-family: "Helvetica Neue";
        font-size: 20px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #000;
        font-size: 20px;
        
    }
    .navbar-brand:hover {
        color: #000;
        opacity: 90%;
    }
    .navbar-nav .nav-link:hover {
        color: #000;
        opacity: 90%;
    }
    .dropdown-menu {
        right: 0;
        left: auto;
    }
    #nav-dropdown {
        color: black;
    }

    #shadow { 
        flex-direction: space-evenly;
        width: 100%;
    }

`;

export const NavBarTwo = () => {
    return(
        <div style={{width: "50%"}}>
            <Navbar style={{backgroundColor: "#fff"}} expand="sm">
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link style={{color: "black"}} href="/">Sign in</Nav.Link>
                    <NavDropdown title="Sign up" id="nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Customer</NavDropdown.Item>
                        <NavDropdown.Item href="/register">Driver</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            
            </Navbar>
        </div>
        
    )
}

export const NavBarOne = () => {
    return(
        <div style={{width: "50%"}}>
            <Navbar style={{backgroundColor: "white"}} expand="sm">
                <Navbar.Brand href="/">Queue</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/stores">Stores</Nav.Link>
                    <Nav.Link href="/about">About us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export const NavBarThree = () => {
    return(
        <div style={{width: "100%"}}>

        <Navbar style={{backgroundColor: "#20ABF5"}} expand="lg">
            <Navbar.Brand href="/">Queue</Navbar.Brand>
                <Nav className="ml-auto">
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                </Nav>

        </Navbar>
        </div>
    );
}

export const NavigationBar = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
            // [window.innerWidth, window.innerHeight]
        })
    })
    return (
        <Styles>
                {
                    width < 700 ? <div style={{display:"flex"}}><NavBarThree /></div> : <div style={{display: "flex"}}><NavBarOne /><NavBarTwo /></div>
                }
        </Styles>
    )
        
};