import React, { Component } from 'react';

const ProductListDetail = props => {
    return(
        <div style={{boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", backgroundColor: "#fefefe", height: "55px", borderRadius: "0.5em", marginBottom: "12px", display: "flex", justifyContent:"space-evenly", alignItems: "center"}}>
            <img style={{height: "40px", width: "40px", borderRadius: "20px", backgroundColor: "black"}}/>
            <span>T-Shirt</span>
            <span>Stocked</span>
            <span style={{color: "green", fontWeight: "bold"}}>$ 9.99</span>
            <span>Available</span>
        </div>
    );
}
export default ProductListDetail;