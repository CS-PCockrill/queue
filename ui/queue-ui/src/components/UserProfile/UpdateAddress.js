import React, { Component } from 'react';
import axios from 'axios';
import ListDetail from './ListDetail';

let endpoint = "http://localhost:3000/address"

export default function UpdateAddress(props) {
    const [state, setState] = React.useState({
        street: "",
        city: "",
        state: "",
        zip: "",
      })

    function handleChange(event) {
        let value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    function handleSubmitClick(event) {
        event.preventDefault();
        const address = {
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        }

        axios.post(endpoint, address)
        .then(res => {
            console.log(res); 
            console.log(res.data); 
            window.location = '/address' }, 
            (error) => { console.log(error); 
        }).catch((err) => {
            console.log("ERROR ", err);
          });
    }

    return (
        <section style={{width: "100%", height: "100%"}}>
            <ListDetail title="Addresses" />
        </section>
      );
}