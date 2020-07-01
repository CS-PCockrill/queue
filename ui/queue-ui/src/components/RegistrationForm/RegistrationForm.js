import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import styled from 'styled-components';
import highRise from '../../assets/high-rise-buildings.jpg';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    path,
    Link
    } from 'react-router-dom';

const Styles = styled.div`
    main {
        background-color: #fff;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
        width: 33vw;
    }
    .form-control {
        height: 55px;
        font-size: 16px;
        border: none;
        outline-width: 0;
    }
    .form-control:focus {
        border: 1px solid #20ABF5;
        outline: 0;
    }

    .formContainer {
        width: 26vw;
        height: 70%;
        z-index: 40;
        background-color: #efefef; 
        border-radius: 10px; 
        margin: 50px 150px 50px 0;
        box-sizing: border-box;
        display: block;

    }
    .header {
        font-size: 30px;
        font-weight: bold;
    }
    textarea:hover, 
    input:hover, 
    textarea:active, 
    input:active, 
    textarea:focus, 
    input:focus,
    button:focus,
    button:active,
    button:hover,
    label:focus,
    .btn:active,
    .btn.active
    {
        outline:0px !important;
        -webkit-appearance:none;
        box-shadow: none !important;
    }
    Button {
        background-color: #000;
        border: none;
        height: 100%;
        width: 100%;
    }

    .registerMain {
        width: 100vw; 
        height: 85%;
        margin-top: auto;
        background-color: white;
        box-sizing: border-box;
        position: absolute;
        padding: 25px 80px 0 80px;
        display:flex;
        flex:direction
        justify-content: space-between;
    }
    div {
        display: block;
    }
    div.driver_caption {
        width:50%;
        padding: 50px 0;
    }
`;

export function RegistrationForm(props) {
    const [state, setState] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email : "",
        password : "",
        city : ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (document.getElementById('password').value) {
            sendDetailsToServer()
        } else {
            console.log('Password do not match.');
        }
    }

    const sendDetailsToServer = () => {
        if (true){
            // props.shoeError(null);
            const payload = {
                "username" : state.username,
                "firstName" : state.firstName,
                "lastName" : state.lastName,
                "email" : state.email,
                "password" : state.password,
            }
            // FIXME: Implement correct api link.

            axios.post('API_BASE_URL' + 'signUp', payload)
                .then(function (response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration Successful. Redirecting to home page...'
                        }))
                        // redirectToHome();
                        console.log("Success")
                        console.log("null")

                    } else {
                        console.log('Some error ocurred');
                    }

                }).catch(function (error) {
                    console.log(error);
                });
        } else {
            props.showError('Please enter a valid username and password.')
        }
    }
    return(

        // Insert a Drive with Queue "Learn more" which takes you to another page that takes you 
        // to what it means to drive with Queue
        <Styles>
            <div className="registerMain">
                <div className="driver_caption">
                    <div style={{paddingRight: "100px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <h1 style={{fontSize: 55, fontWeight: "bold"}}>Queue Tech</h1>
                        <h2 style={{fontSize: 35}}>Delivery anytime, anywhere.</h2>
                    </div>
                </div>
                <div className="ml-auto formContainer">
                <div style={{padding: "16px 25px 16px 25px", height: "100%"}}>
                    <h2 className="header">Sign up now</h2>
                    <div style={{marginTop:"25px"}}>
                    <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control 
                        className="form-control"
                        placeholder="Username"
                        type="username"
                        id="username" 
                        autocomplete="none"
                        value={state.username}
                        onChange={handleChange}
                        
                        />
                    </Form.Group>
                    <div style={{display: "flex"}}>
                        <div style={{width: "50%"}}>
                            <Form.Group controlId="formGroupFirstName">
                                <Form.Control 
                                className="form-control"
                                placeholder="First name"
                                type="name"
                                id="firstName"
                                value={state.firstName}
                                onChange={handleChange}
                                
                                />
                            </Form.Group>
                        </div>
                        <div style={{width: "8px", height: "1px"}}></div>
                        <div style={{width: "50%"}}>
                            <Form.Group controlId="formGroupFullName">
                                <Form.Control 
                                className="form-control"
                                placeholder="Last name"
                                type="name"
                                id="lastName"
                                value={state.lastName}
                                onChange={handleChange}
                                
                                />
                            </Form.Group>
                        </div>
                        
                    </div>
                    <Form.Group controlId="formGroupPhone">
                        <Form.Control 
                        className="form-control"
                        placeholder="Email"
                        autocomplete="none"
                        type="email"
                        id="email" 
                        value={state.email}
                        onChange={handleChange}
                        
                        />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control 
                        className="form-control"
                        placeholder="Create password"
                        type="password"
                        id="password" 
                        value={state.password}
                        onChange={handleChange}
                        
                        />
                    </Form.Group>
                    </Form>
                    </div>
                    <div style={{justifyContent:"center", display: "flex", width: "100%"}}>
                        <Button style={{fontSize: "18px", width: "50%", fontWeight: "bold"}}>Submit</Button>
                    </div>
                    
                </div>
            </div>
            </div>
            <div style={{position: "absolute", height: "65vh", width: "100%", backgroundColor:"#20ABF5", marginTop:"35vh", backgroundImage: `url(${highRise})`}}>
                <p>i</p>
            </div>
            
        </Styles>
        
    )
}