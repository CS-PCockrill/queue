import React from 'react';
import {
  Box,
  Button,
  Drawer,
  Hidden,
  List,
  Container,
  makeStyles
} from '@material-ui/core';
import './ListDetail.css';

import './DashButton';
import DashButton from './DashButton';

const ListDetail = (props) => {
    return(
        <div>
            <h3 style={{color: "black", textAlign: "left", marginLeft: "16px", paddingTop: "8px"}}>{props.title}</h3>
            <div style={{width: "100%", marginTop: "8px", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
            {props.children}
            </div>
            {
              props.count < 2 &&
                <div style={{width: "100%", marginTop: "8px", justifyContent: "center", display: "flex"}}>
                  <DashButton label={props.label} component={props.component} />
                </div>
            }
            

          </div>
    );
}
export default ListDetail;