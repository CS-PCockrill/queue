import React, { Component } from 'react';

const ProductListDetail = props => {
    return(
        <div style={{boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", backgroundColor: "#fefefe", height: "100px", borderRadius: "0.5em", marginBottom: "12px", display: "flex", justifyContent:"space-between", alignItems: "center", padding: "12px 12px"}}>
            <div style={{height: "100%", display: "flex"}}>
                <img style={{height: "100%", width: "76px", borderRadius: "0.5em", backgroundColor: "black"}}/>
                <div style={{display: "flex", flexDirection: "column", margin: "8px 0 0 8px"}}>
                    <span style={{fontWeight: "bold"}}>Sony Wired Headphones & Charger</span>
                    <span>headphones</span>
                </div>
            </div>
            
            <span>Stocked</span>
            <span style={{color: "green", fontWeight: "bold"}}>$ 9.99</span>
            <span>Available</span>
        </div>
    );
}
export default ProductListDetail;