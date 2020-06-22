import React, {useState} from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import deliveryMan from './high-rise-buildings.jpg';
import { Icon } from 'semantic-ui-react';
import Autocomplete from 'react-google-autocomplete';

// 
const Styles = styled.div`
    .jumbo {
        
        background-size: cover;
        color: #fff;
        background-color: #000;
        height: 600px;
        text-align: center;
        position: relative;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: relative;
        overflow: hidden;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        box-sizing: border-box;
    }
    .container {
        z-index: 2;
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
    }
    .searchContainer {
        position: relative;
        justify-content: center;
        display: flex;
        flex: 1 1 0%;
        position: relative;
        box-shadow: 0 3px 6px #888888;
    }
    .searchBarContainer {
        width: 100%;
        padding: 12px 16px 12px 16px;
        display: flex;
        background-color: #fff;
        line-height: 24px;
        font-size: 16px;
        border: none;
    }
    .align {
        align-content: center;

    }
    .button {
        align-items: center;
        display: flex;
        background-color: black;
        font-size: 16px;
        border: none;
    }
    .button:focus {
        outline: none;
        box-shadow: none;
      }

    .sbm {
        width: 16px;
        height: 1px;
    }
    input {
        width: 100%;
        border: none;
        outline-width: 0;

    }
    .inputLabel {
        width: 1px;
        height: 1px;
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
    }
    .inputPadding {
        padding: 12px, 16px, 12px, 16px;
        line-height: 25px;
        font-size: 16px;
        border: medium none;
        display: block;
        z-index: auto;
        position: relative;
        box-sizing: border-box;
        float: none;
        height: 50px;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 3px 6px #efefef;
    }
    .title {
        text-align: left;
        line-height: normal;
        position: absolute;
        box-sizing: content-box;
        display: block;
        float: none;
        left: 15%;
        top: 10%;
        transform: translate(-25%, -10%);
    }

    .imgContainer {
        right: 0;
        left: auto;
        margin: 0 auto;
        display: block;
        width: 50vw;
        height: 93%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    img {
        height: 43vw;
        width: 43vw;
        transform: rotate(-5deg);
        border-radius: 10px; 
    }
    #deliveryHeader {
        width: 45vw;
        height: 30vw;
        background-color: white;

    }
    h2 {
        font-size: 55px;
    }
    p {
        margin: 0 auto;
    }

`;

export const Jumbotron = () => { 
    const [place, setPlace] = useState(null);

    return (
    <Styles>
        <div style={{display: "flex"}}>
            <div style={{backgroundColor: "white", width: "50%"}}>
                <div className="imgContainer">
                    <div id="deliveryHeader">
                        <div style={{marginBottom: 45}}>
                            <h2>Delivery with Queue</h2>
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
                                    />
                                </div>
                            </div>
                            <div className="sbm"></div>
                            <Button onClick={() => console.log(place)} className="button">Find Stores</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#20ABF5", width: "50%", height: "100vh"}}>
                <div className="imgContainer">
                    <img src={deliveryMan} />
                </div>
            </div>
            <div className="overlay"></div>

        </div>

    </Styles>
)
                                    }
{/* <div className="title">
                    <h2 style={{marginBottom: 45}}>Anything, delivered with Queue</h2>
                    <div className="searchContainer">
                        <div className="searchBarContainer">
                            <label className="inputLabel">Enter delivery address</label>
                            <div className="inputPadding">
                                <input className="inputPadding" placeholder="Enter Delivery Address"></input>

                            </div>
                        </div>
                        <div class="sbm"></div>
                        <Button className="button">Press me</Button>
                    </div>
                </div> */}