import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #000;
        font-family: "Helvetica Neue";
        font-size: 20px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        
    }
    .navbar-brand:hover {
        color: white;
    }
    .navbar-nav .nav-link:hover {
        color: white;
        border-bottom: 2px solid #20ABF5;
        padding-bottom: 1px;
    }


`;

export const NavigationBar = () => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                Queue
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item ><Nav.Link href="/stores">Stores</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/signin">Sign In</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
