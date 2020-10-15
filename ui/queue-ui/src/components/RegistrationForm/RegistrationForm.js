import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import highRise from '../../assets/high-rise-buildings.jpg';
import './RegistrationForm.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    path,
    Link
    } from 'react-router-dom';


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
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        const headers = { 
            'Content-Type': 'application/json', 
            "Access-Control-Allow-Origin": "*",
        } 
        axios.post("http://127.0.0.1:3000/signUp", user) 
        .then(res => {
            console.log(res); 
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
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

export default RegistrationForm;