import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './PersonalInfo.css';

export default class PersonalInfo extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <section style={{width: "100%", height: "100%"}}>
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", verticalAlign: "baseline"}}>
                        <h3 style={{color: "black", textAlign: "left", marginLeft: "16px", paddingTop: "12px"}}>Personal Information</h3>
                        <button style={{color: '#fff', fontWeight: "bold", justifyContent: "flex-end", backgroundColor: "black", width: "4em", height: "31px", borderRadius: "2rem", marginTop: "8px", marginRight: "6px"}}>Save</button>
                    </div>
                    <div style={{height: "48px", width: "100% - 8px", margin: "8px 8px", display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="First name"
                                    key="firstName"
                                    type="text"
                                    name="firstName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                            <div style={{width: "8px", height: "1px"}}></div>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupLastName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="Last name"
                                    key="lastName"
                                    type="text"
                                    name="lastName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                    </div>
                    <div style={{height: "48px", width: "100% - 8px", margin: "8px 8px", display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="Gender"
                                    key="firstName"
                                    type="text"
                                    name="firstName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                            <div style={{width: "8px", height: "1px"}}></div>
                            <div style={{width: "50%"}}>
                                <Form.Group controlId="formGroupLastName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="Date of birth"
                                    key="lastName"
                                    type="text"
                                    name="lastName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                    </div>
                    <h3 style={{color: "black", textAlign: "left", marginTop: "12px", marginLeft: "16px"}}>Contact Information</h3>
                    <div style={{height: "48px", width: "100%", margin: "8px"}}>
                            <div style={{width: "80%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="Phone number"
                                    key="firstName"
                                    type="text"
                                    name="firstName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                    </div>
                    <div style={{height: "48px", width: "100%", margin: "8px"}}>
                            <div style={{width: "80%"}}>
                                <Form.Group controlId="formGroupFirstName">
                                    <Form.Control 
                                    className="personalInfo"
                                    placeholder="Email"
                                    key="firstName"
                                    type="text"
                                    name="firstName"
                                    
                                    
                                    />
                                </Form.Group>
                            </div>
                    </div>
                </div>
            </section>
        );
    }
}