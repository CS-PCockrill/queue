import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import styled from 'styled-components';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from 'react-router-dom';

const Styles = styled.div`
    .jumbo {
        background-color: #000;
        background-size: cover;
        position: relative;
        text-align: center;
        align-content: center;
        justify-content: center;
        align-items: center;
        margin: auto;
        height: 93vh;
        display: flex;
        flex-direction: row;

    }
    .container {
        align-content: center;
        position: relative;
        background-color: #000;

    }
    .button {
        background-color: #000;
        color: #ffffff;
        font-size: 60px;
        text-decoration: none;
        border-bottom: 3px solid #20ABF5;
        padding-bottom: 45px;
        font-family: "-apple-system";
    }

    .button:hover {
        opacity: 90%;

    }

    .line {
        color: #fff;
        line-height: 24px;
        font-weight: normal;
        font-size: 16px;
    }
    h1 {
        padding-top: 50px;
        color: #fff;
        margin-bottom: 10%;
        font-size: 60px;
    }
    main {
        background-color: #000;
        position: relative;
        margin: auto;
        height: 93vh;
        text-align: center;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .options {
        text-align: center;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`;

export function RegistrationOptions() {

    return(
        <Styles>
            <main>
                <h1>Create an account</h1>
                <Row className="options">
                    <Col><Link to="/registercustomer">
                        <Button 
                        className="button"
                        variant="link">
                        Customer
                        </Button>
                        </Link>
                        
                    </Col>
                    <Col><Button 
                        className="button"
                        variant="link" 
                        onClick={() => {console.log("clicked")}}>
                        Store owner
                        </Button>
                        
                    </Col>
                    <Col><Button 
                        className="button"
                        variant="link" 
                        onClick={() => {console.log("clicked")}}>
                        Driver sign up
                        </Button>
                        
                    </Col>
                    </Row>
            </main>
            
        </Styles>     
        );
}