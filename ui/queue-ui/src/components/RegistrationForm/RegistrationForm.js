import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import highRise from '../../assets/high-rise-buildings.jpg';
import './RegistrationForm.css';

let endpoint = "http://127.0.0.1:3000/signUp"

class RegistrationForm extends Component {
    state = {
        username : "",
        firstName : "",
        lastName : "",
        email : "",
        password : ""
    };

    handleUsernameChange = event => {
        this.setState({ username: event.target.value});
    }
    handleNameChange = event => {
        this.setState({ firstName: event.target.value});
    }
    handleLastChange = event => {
        this.setState({ lastName: event.target.value});
    }
    handleEmailChange = event => {
        this.setState({ email: event.target.value});
    }
    handlePasswordChange = event => {
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

        axios.post(endpoint, user)
        .then(res => {
            console.log(res); 
            console.log(res.data); 
            window.location = '/dashboard' }, 
            
            (error) => { console.log(error); 
        }).catch((err) => {
            console.log("ERROR ", err);
          });
    }

    render() {
        return(

            // Insert a Drive with Queue "Learn more" which takes you to another page that takes you 
            // to what it means to drive with Queue

            // Queue Delivery
            // Make the most out of your time
            <React.Fragment>
                <div className="registerMain">
                    <div className="driver_caption">
                        <div style={{paddingRight: "100px", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                            <h1 id="title">Queue Delivery</h1>
                            <h2 id="caption">Make the most out of your time.</h2>
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
                            key="username"
                            type="text"
                            name="username" 
                            autocomplete="none"
                            onChange={this.handleUsernameChange}
                            
                            />
                        </Form.Group>
                        <div style={{display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="form-control"
                                    placeholder="First name"
                                    key="firstName"
                                    type="text"
                                    name="firstName"
                                    onChange={this.handleNameChange}
                                    
                                    />
                                </Form.Group>
                            </div>
                            <div style={{width: "8px", height: "1px"}}></div>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupFullName">
                                    <Form.Control 
                                    className="form-control"
                                    placeholder="Last name"
                                    key="lastName"
                                    type="text"
                                    name="lastName"
                                    onChange={this.handleLastChange}
                                    
                                    />
                                </Form.Group>
                            </div>
                            
                        </div>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Control 
                            className="form-control"
                            placeholder="Email"
                            autocomplete="none"
                            key="email"
                            type="text"
                            name="email" 
                            onChange={this.handleEmailChange}
                            
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control 
                            className="form-control"
                            placeholder="Create password"
                            key="password"
                            type="password"
                            name="password" 
                            onChange={this.handlePasswordChange}
                            
                            />
                        </Form.Group>
                        </Form>
                        </div>
                        <div id="registerButton">
                            <Button id="nextButton" onClick={this.handleSubmitClick} >Next</Button>
                        </div>
                        
                    </div>
                </div>
                </div>
                <div style={{position: "absolute", height: "65vh", width: "100%", backgroundColor:"#20ABF5", marginTop:"35vh", backgroundImage: `url(${highRise})`}}>
                </div>
            </React.Fragment>
        )
    }
}

export default RegistrationForm;