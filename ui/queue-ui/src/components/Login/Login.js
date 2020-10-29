import React from 'react';
import { Form, Button } from 'react-bootstrap'
import './Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return(
            <body>
                <section id="container">
                    <div>
                        <h2 className="loginTitle">Login</h2>
                        <div style={{marginTop:"25px"}}>
                        <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control 
                            className="form-control"
                            placeholder="Email"
                            key="username"
                            type="text"
                            name="username" 
                            autocomplete="none"
                            onChange={this.handleUsernameChange}
                            
                            />
                        </Form.Group>
                        </Form>
                        </div>
                    </div>
                </section>
            </body>
        );
    }
}