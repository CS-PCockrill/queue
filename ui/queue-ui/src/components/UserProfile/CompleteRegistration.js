import React, { Component } from 'react';

export default class CompleteRegistration extends Component {
    constructor(props) {
        super();
    }
    render() {
        return(
            <a href="/" style={{color: "white"}}>
            <section style={{width: "100%", height: "100%", overflow: "auto", display: "flex", justifyContent:"center", alignItems: "center"}}>
                <div style={{backgroundColor: "#1d2636", height: "300px", width: "300px", display: "flex", alignItems:"center", borderRadius: "150px"}}>
                    <h2 style={{textAlign: "center", alignItems:"center"}}>Complete Driver Registration</h2>
                </div>
            </section>
            </a>
        );
    }


}
