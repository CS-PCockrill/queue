import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1.5),
        width: '100%',
      },
    },
    input: {
        display: "none",
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#fff !important",
        boxShadow: "0 0 10px -2px rgba(0, 0, 0, 0.095)",
      },
  }));
  

const AddItem = props => {
    const classes = useStyles()
    const [image, setImage] = React.useState("");
    const imageRef = React.useRef(null);

    function useDisplayImage() {
        const [result, setResult] = React.useState("");

        function uploader(e) {
            const imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
            });

            reader.readAsDataURL(imageFile);
        }

        return { result, uploader };
    }

    const { result, uploader } = useDisplayImage();

    return(
        <div>
            <h3 style={{marginBottom: 0}}>Add New</h3>
            <span style={{fontSize: "12px"}}>Add some information for the item you would like to create</span>
            <div style={{marginTop: "16px", width: "100%", borderRadius: "0.5em"}}>
                <form className={classes.root}>
                    <TextField
                        id="productName"
                        label="Product name"
                        type="text"
                        variant="outlined"
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            style: {color: "gray"}
                        }}
                    />
                    <TextField
                        id="productName"
                        label="Category"
                        type="text"
                        variant="outlined"
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            }
                        }}
                        InputLabelProps={{
                            style: {color: "gray"}
                        }}
                    />
                    <div style={{display: "flex"}}>
                        <div style={{width: "50%"}}>
                            <TextField
                            id="outlined-cityText"
                            label="Price"
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
                            label="Inventory"
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

                    <div className={classes.inputRoot}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label for="file-upload">
                            <Button variant="contained" style={{backgroundColor: "black", color: "white"}} component="span" startIcon={<PhotoCamera />}>
                            Upload
                            </Button>
                        </label>
                        <input
                            type="file"
                            className={classes.input}
                            id="file-upload"
                            onChange={
                                (e) => {
                                setImage(e.target.files[0]);
                                uploader(e);
                            }}
                        />
                        {/* {result && <img ref={imageRef} src={result} alt="" />} */}
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        {result && <img ref={imageRef} src={result} alt="" style={{height: "90px", width: "90px", backgroundColor: "orange"}}/>}
                        
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Button onClick={console.log("Adding item")}  style={{backgroundColor: "black", color: "white", width: "50%", height: 40}}>Publish</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddItem;