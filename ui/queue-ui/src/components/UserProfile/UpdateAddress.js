import React, { Component } from 'react';
import axios from 'axios';
import ListDetail from './ListDetail';
import AddressForm from './AddressForm';
import { Button } from '@material-ui/core';
import './ListDetail.css';

let endpoint = "http://localhost:3000/address"

export default class UpdateAddress extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: 1,
            addresses: [{
                name: "Patrick Cockrill",
                street: "12619 Winter Wren Court, HERNDON VA",
                country: "United States",
                number: "+1 (703) 801-5909",
            }]
        }
    }

    // function handleSubmitClick(event) {
    //     event.preventDefault();
    //     const address = {
    //         street: this.state.street,
    //         city: this.state.city,
    //         state: this.state.state,
    //         zip: this.state.zip,
    //     }

    //     axios.post(endpoint, address)
    //     .then(res => {
    //         console.log(res); 
    //         console.log(res.data); 
    //         window.location = '/address' }, 
    //         (error) => { console.log(error); 
    //     }).catch((err) => {
    //         console.log("ERROR ", err);
    //       });
    // }
    render() {

        return (
            <section style={{width: "100%", height: "100%"}}>
                <ListDetail title="Addresses" label="Add new address" component={AddressForm} count={this.state.addresses.length}>
                    {
                        this.state.addresses.length >= 1 &&
                        
                        this.state.addresses.map((address) => {
                            return(
                            <div style={{display:"flex", boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", height: "100%", width: "95%", alignItems: "center", borderRadius: "0.5em", marginBottom: "12px"}}>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <div id="options">
                                        <Button>
                                        Edit
                                        </Button>
                                        <Button>
                                        Remove
                                        </Button>
                                    </div>
                                    <div className="details">
                                        <div>{address.name}</div>
                                        <div>{address.street}</div>
                                        <div>{address.country}</div>
                                        <div>{address.number}</div>
                                        <a href="#">Enter delivery instructions</a> 
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </ListDetail>
            </section>
        );
    }
}