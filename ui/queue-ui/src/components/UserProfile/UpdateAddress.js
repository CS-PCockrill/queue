import React, { Component } from 'react';

let endpoint = "http://localhost:3000/address"

export function UpdateAddress(props) {
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

    handleSubmitClick = event => {
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
        <form>
          <label>
            Street
            <input
              type="text"
              name="street"
              value={state.street}
              onChange={handleChange}
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              value={state.city}
              onChange={handleChange}
            />
          </label>
        </form>
      );
}