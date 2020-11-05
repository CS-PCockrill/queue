import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
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
      height: "70%",
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

const AddressForm = props => {
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles()

    return(
        <div style={modalStyle} className={classes.paper}>
            <h3 style={{marginBottom: "2px"}}>Add new address</h3>
            <span>Enter your delivery information</span>
            <form className={classes.root} noValidate>
            <div style={{marginTop: "20px"}}>
                
                <TextField
                id="outlined-password-input"
                label="Full name"
                type="text"
                autoComplete="current-password"
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
                label="Street"
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
                    label="Apt/suite"
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
                    label="City"
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
                <div style={{display: "flex"}}>
                  <div style={{width: "50%"}}>
                    <TextField
                    id="outlined-cityText"
                    label="State"
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
                    label="Postal code"
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
                label="Phone number"
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
                  <Button style={{backgroundColor: "black", color: "white", width: "50%", height: 40}}>Save</Button>
                </div>
            </div>
            </form>
        </div>
    );
}
export default AddressForm;