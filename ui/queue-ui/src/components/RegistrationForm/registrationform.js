import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

export function RegistrationForm(props) {
    const [state, setState] = useState({
        fullName: "",
        email : "",
        password : ""
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
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
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
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    className="form-control"
                    type="password"
                    id="password" 
                    value={state.password}
                    onChange={handleChange}
                    
                    />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button className="m-2" type="submit" varient="outline-primary" onClick={handleSubmitClick}>Register</Button>
            </Form>
        </div>
        );
}