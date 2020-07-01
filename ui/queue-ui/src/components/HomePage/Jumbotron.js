import React, {useState} from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import deliveryMan from '../../assets/high-rise-buildings.jpg';
import { Icon } from 'semantic-ui-react';
import Autocomplete from 'react-google-autocomplete';
import './Home.css';

// 

export const Jumbotron = () => { 
    const [place, setPlace] = useState(null);

    return (
        <div className="main-container">
            <div style={{backgroundColor: "white", width: "50%"}}>
                <div className="imgContainer">
                    <div id="deliveryHeader">
                        <div style={{marginBottom: 45}}>
                            <h1 style={{fontSize: 50}}>Delivery with Queue</h1>
                        </div>
                        <div style={{display: "flex"}}>
                            <div className="searchContainer">
                                <div className="searchBarContainer">
                                    <Icon name="map pin" />
                                    <Autocomplete
                                        apiKey="AIzaSyAw3LVRVrJ25ZRglrrK521HePSkdABf5fo"
                                        style={{width: '100%'}}
                                        onChange={(e) => {
                                            setPlace(e.target.value)
                                        }}
                                        onPlaceSelected={(place) => {
                                            setPlace(place)
                                        }}
                                        types={['(regions)']}
                                        componentRestrictions={{country: "us"}}
                                        placeholder="Enter your address"
                                    />
                                </div>
                            </div>
                            <div className="sbm"></div>
                            <Button onClick={() => console.log(place)} className="button">Find Stores</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#fffff", width: "50%", height: "100vh"}}>
                <div className="imgContainer">
                    <img src={deliveryMan} />
                </div>
            </div>
            <div className="overlay"></div>

        </div>
)
                                    }
