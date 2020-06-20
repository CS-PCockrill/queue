import React from 'react';
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import deliveryMan from './high-rise-buildings.jpg'

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
    }
    .searchBarContainer {
        width: 540px;
        flex: 1 1 0%;
        position: relative;
        background-color: #efefef;
    }
    .align {
        align-content: center;

    }
    .button {
        align-items: center;
        display: flex;
        -moz-box-align: center;
    }
    .sbm {
        width: 16px;
        height: 1px;
    }
    .input {
        outline: currentcolor none medium;
        flex: 1 1 0%;

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
        box-sizing: content-box;
        float: none;
        min-width: 100%;
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
    }
`;

export const Jumbotron = () => (
    <Styles>
        <div style={{display: "flex"}}>
            <div style={{backgroundColor: "white", width: "50%"}}>
                    <h2>Anything, Delivered with Queue.</h2>
            </div>
            <div style={{backgroundColor: "#20ABF5", width: "50%", height: "760px"}}>
                <img src={deliveryMan} className="imgContainer"/>
            </div>
            <div className="overlay"></div>

        </div>

    </Styles>
)

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