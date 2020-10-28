import React, { Component } from 'react';

const ListDetail = (props) => {
    return(
        <div>
            <h3 style={{color: "black", textAlign: "left", marginLeft: "16px", paddingTop: "8px"}}>{props.title}</h3>
            <div style={{height: "60px", width: "100%", marginTop: "8px", justifyContent: "center", display: "flex"}}>
              <div style={{display:"flex", boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", height: "100%", width: "95%", alignItems: "center", borderRadius: "0.5em"}}>
                  <div style={{width: "40px", height: "40px", borderRadius: "20px", border: "2px dotted black", float: "left", marginLeft: "8px"}}></div>
              </div>
            </div>
            <div style={{height: "60px", width: "100%", marginTop: "16px", justifyContent: "center", display: "flex"}}>
              <div style={{display:"flex", boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", height: "100%", width: "95%", alignItems: "center", borderRadius: "0.5em"}}>
                  <div style={{width: "40px", height: "40px", borderRadius: "20px", border: "2px dotted black", float: "left", marginLeft: "8px"}}></div>
              </div>
            </div>
            <div style={{height: "60px", width: "100%", marginTop: "16px", justifyContent: "center", display: "flex"}}>
              <div style={{display:"flex", boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)", height: "100%", width: "95%", alignItems: "center", borderRadius: "0.5em"}}>
                  <div style={{width: "40px", height: "40px", borderRadius: "20px", border: "2px dotted black", float: "left", marginLeft: "8px"}}></div>
              </div>
            </div>
          </div>
    );
}
export default ListDetail;