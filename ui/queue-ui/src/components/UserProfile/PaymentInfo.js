import React from 'react';
import ListDetail from './ListDetail';

export default class PaymentInfo extends React.Component {
    constructor(props) {
        super();
        
    }

    render() {
        return(
            <section style={{width: "100%", height: "100%"}}>
                <ListDetail title="Payment Information" />
            </section>
        );
    }
}