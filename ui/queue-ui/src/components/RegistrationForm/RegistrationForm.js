import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import styled from 'styled-components';
import highRise from '../../assets/high-rise-buildings.jpg';
import { API_BASE_URL } from '../../constants/constants';
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

class RegistrationForm extends Component {
    state = {
        username : "",
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    };

    handleChange = event => {
        this.setState({ username: event.target.value});
        this.setState({ firstName: event.target.value});
        this.setState({ lastName: event.target.value});
        this.setState({ email: event.target.value});
        this.setState({ password: event.target.value});
        
    }
    
    handleSubmitClick = event => {
        event.preventDefault();
        const user = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        const headers = { 
            'Content-Type': 'application/json', 
            "Access-Control-Allow-Origin": "*",
        } 
        axios.post("https://127.0.0.1:3000/signUp", user ,{ headers: headers }) 
        .then(res => { console.log(res); 
            console.log(res.data); 
            window.location = '/' }, 
            (error) => { console.log(error); 
        }).catch((err) => {
            console.log("ERROR ", err);
          });
    }

    render() {
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
                            name="username" 
                            autocomplete="none"
                            // value={state.username}
                            onChange={this.handleChange}
                            
                            />
                        </Form.Group>
                        <div style={{display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="form-control"
                                    placeholder="First name"
                                    type="name"
                                    name="firstName"
                                    // value={state.firstName}
                                    onChange={this.handleChange}
                                    
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
                                    name="lastName"
                                    // value={state.lastName}
                                    onChange={this.handleChange}
                                    
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
                            name="email" 
                            // value={state.email}
                            onChange={this.handleChange}
                            
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control 
                            className="form-control"
                            placeholder="Create password"
                            type="password"
                            name="password" 
                            // value={state.password}
                            onChange={this.handleChange}
                            
                            />
                        </Form.Group>
                        </Form>
                        </div>
                        <div style={{justifyContent:"center", display: "flex", width: "100%"}}>
                            <Button style={{fontSize: "18px", width: "50%", fontWeight: "bold"}} onClick={this.handleSubmitClick} >Submit</Button>
                        </div>
                        
                    </div>
                </div>
                </div>
                <div style={{position: "absolute", height: "65vh", width: "100%", backgroundColor:"#20ABF5", marginTop:"35vh", backgroundImage: `url(${highRise})`}}>
                </div>
                
            </Styles>
            
        )
    }
}

export default RegistrationForm;