import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
    <Container className="justify-content-md-center">
        {props.children}
    </Container>
)