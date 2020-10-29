import React, { Component } from 'react';
import './Responsive.css';

export default function MainContent() {
    return(
        <div id="bodyContainer">
            <h1>Let's Play with Flexbox</h1>
            <section id="container">
                <div style={{backgroundColor: "#0f9e0d"}}></div>
                <div style={{backgroundColor: "#ef9f9d"}}></div>
                <div style={{backgroundColor: "#7f8e0f"}}></div>
                <div style={{backgroundColor: "#4f9e9d"}}></div>
                <div style={{backgroundColor: "#00f596"}}></div>
            </section>
        </div>
    )
}