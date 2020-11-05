import React from 'react';
import ListDetail from './ListDetail';
import PaymentForm from './PaymentForm';
import { Button } from '@material-ui/core';

export default class PaymentInfo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            payments: [{
                name: "Wells Fargo Platinum... 6389",
                cardholderName: "Patrick Cockrill",
                expires: "08/2023",
                country: "United States"
            },
            {
                name: "Capital One Silver... 2354",
                cardholderName: "David Marques",
                expires: "11/2024",
                country: "United States"
            }
        ]
        }
        
    }

    render() {
        let count = 1;

        return(
            <section style={{width: "100%", height: "100%"}}>
                <ListDetail title="Payment Information" label="Add new payment method" component={PaymentForm} count={this.state.payments.length}>
                    {
                        this.state.payments.length != 0 && 
                        this.state.payments.map((payment) => {
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
                                        <div>{payment.name}</div>
                                        <div>{payment.cardholderName}</div>
                                        <div>{payment.expires}</div>
                                        <div>{payment.country}</div>
                                        <a href="#">Set as default</a> 
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        )
                    }    
                </ListDetail>
            </section>
        );
    }
}