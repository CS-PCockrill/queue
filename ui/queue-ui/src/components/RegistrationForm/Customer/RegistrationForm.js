import React, { useState } from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`
    main {
        background-color: #fff;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
        width: 33vw;
    }
`;

export function RegistrationForm(props) {
    const [state, setState] = useState({
        fullName: "",
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
                "firstName" : state.fullName.split(' ').slice(0, -1).join(' '),
                "lastName" : state.fullName.split(' ').slice(-1).join(' '),
                "email": state.email,
                "password": state.password,
            }
            // FIXME: Implement correct api link.
            console.log(payload['firstName'])
            console.log(payload['lastName'])
            console.log(payload['email'])
            axios.post('API_BASE_URL' + 'register', payload)
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
        <Styles>
            <main>
                <h1>Customer Sign Up</h1>
                <Form>
                <Form.Group controlId="formGroupFullName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control 
                    className="form-control"
                    type="name"
                    id="fullName"
                    value={state.fullName}
                    onChange={handleChange}
                    
                    />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    className="form-control"
                    type="email"
                    id="email" 
                    value={state.email}
                    onChange={handleChange}
                    
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                    className="form-control"
                    type="phone"
                    id="phoneNumber" 
                    value={state.email}
                    onChange={handleChange}
                    
                    />
                </Form.Group>
                </Form>
            </main>
        </Styles>
        
    )
}