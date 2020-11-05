import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { makeStyles }  from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import './PersonalInfo.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(1),
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
    },
  }));

const PersonalInfo = props => {
        const classes = useStyles()

        return(
            <section style={{width: "100%", height: "100%"}}>
                <div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", verticalAlign: "baseline"}}>
                        <h3 style={{color: "black", textAlign: "left", marginLeft: "16px", paddingTop: "12px"}}>Personal Information</h3>
                        <Button id="saveBtn">Save</Button>
                    </div>
                    <div style={{margin: "8px 8px", display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <TextField
                                    id="outlined-password-input"
                                    label="First name"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                            <div style={{width: "8px", height: "1px"}}></div>
                            <div style={{width: "50%"}}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Last name"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                    <div style={{paddingTop: "8px", margin: "8px 8px", display: "flex"}}>
                            <div style={{width: "50%"}}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Gender"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                            <div style={{width: "8px", height: "1px"}}></div>
                            <div style={{width: "50%"}}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Date of birth"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                    <h3 style={{color: "black", textAlign: "left", marginTop: "16px", marginLeft: "16px"}}>Contact Information</h3>
                    <div style={{margin: "8px"}}>
                            <div style={{width: "80%"}}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Phone number"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                    <div style={{margin: "8px"}}>
                            <div style={{width: "80%", paddingTop: "8px"}}>
                                <TextField
                                    
                                    id="outlined-password-input"
                                    label="Email"
                                    type="text"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="personalInfo"
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
                </div>
            </section>
        );
    }
export default PersonalInfo;