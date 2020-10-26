import React, {useState} from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import deliveryMan from '../../assets/high-rise-buildings.jpg';
import { Icon } from 'semantic-ui-react';
import Autocomplete from 'react-google-autocomplete';
import './Home.css';


export const Jumbotron = () => { 
    const [place, setPlace] = useState("");

    function handleFindStores() {
        console.log(place)
    }

    return (
        <main>
            <section id="introContainer">
                <div className="searchContainer">
                    <div id="deliveryHeader">
                        <div id="message">
                            <h1>Delivery with Queue</h1>
                        </div>
                        <div id="search">
                            <div id="inputContainer">
                                <div id="input">
                                    <Icon style={{height: "1.2em", width: "1.2em"}}name="map pin" />
                                    <Autocomplete
                                        apiKey="AIzaSyAw3LVRVrJ25ZRglrrK521HePSkdABf5fo"
                                        className="inputPadding"
                                        onChange={(e) => {
                                            setPlace(e.target.value)
                                        }}
                                        onPlaceSelected={(place) => {
                                            setPlace(place)
                                        }}
                                        types={['(regions)']}
                                        componentRestrictions={{country: "us"}}
                                        placeholder="Enter your address"/>
                                </div>
                            </div>
                            <div className="sbm"></div>
                            <div id="buttonContainer">
                                <Button onClick={handleFindStores} className="button">Find Stores</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="imgContainer">
                {/* Implement a maps of users current location 
                with google maps replacing the image. */}
                <div id="image">
                    <img src={deliveryMan} />
                </div>
            </section>
        </main>
)
                                    }

