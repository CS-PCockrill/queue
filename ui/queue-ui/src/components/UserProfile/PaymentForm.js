import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Dialog, Modal } from '@material-ui/core';
import DashButton from './DashButton'

  
  function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
        position: "fixed",
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(1.5),
        width: '100%',
      },
    },
    paper: {
      position: 'absolute',
      width: "35%",
      height: "60%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "0.5em",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      transition: "0.25s",
      ["@media (max-width: 900px)"]: {
          width: "70%",
          backgroundColor: "white",
      },
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#fff !important",
      boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.055)",
    },
  }));

const PaymentForm = (props) => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);

    return(
      <div style={modalStyle} className={classes.paper}>
      <h3 style={{marginBottom: "2px"}}>Add new payment method</h3>
      <span>Enter your payment information</span>
      <form className={classes.root} noValidate>
        <div style={{marginTop: "20px"}}>
            
            <TextField
            id="outlined-password-input"
            label="Cardholder name"
            type="text"
            autoComplete="current-name"
            variant="outlined"
            InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                }
            }}
            InputLabelProps={{
              style: {
                color: "gray",
              }
            }}
            />
            
            <TextField
            id="outlined-number"
            label="Card number"
            type="text"
            variant="outlined"
            InputProps={{
              classes: {
                  notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: {
                color: "gray",
              }
            }}
            />
            <div style={{display: "flex"}}>
              <div style={{width: "50%"}}>
                <TextField
                id="outlined-cityText"
                label="Exp. date"
                // defaultValue="Default Value"
                variant="outlined"
                InputProps={{
                  classes: {
                      notchedOutline: classes.notchedOutline
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: "gray",
                  }
                }}
                />
              </div>
              <div style={{width: 8}}></div>
              <div style={{width: "50%"}}>
                <TextField
                id="outlined-cityText"
                label="CVV"
                // defaultValue="Default Value"
                variant="outlined"
                InputProps={{
                  classes: {
                      notchedOutline: classes.notchedOutline
                  }
                }}
                InputLabelProps={{
                  style: {
                    color: "gray",
                  }
                }}
                />
              </div>
            </div>
            <TextField
            id="outlined-stateText"
            label="Country"
            // defaultValue="Default Value"
            variant="outlined"
            InputProps={{
              classes: {
                  notchedOutline: classes.notchedOutline
              }
            }}
            InputLabelProps={{
              style: {
                color: "gray",
              }
            }}
            />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button onClick={console.log("Saving Payment Info...")}  style={{backgroundColor: "black", color: "white", width: "50%", height: 40}}>Save</Button>
            </div>
        </div>
      </form>
    </div>
    )
}
export default PaymentForm;