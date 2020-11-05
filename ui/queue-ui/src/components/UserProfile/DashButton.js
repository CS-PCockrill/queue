import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './DashButton.css';

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
    paper: {
      position: 'absolute',
      width: "30%",
      height: "70%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #fff',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const DashButton = (props) => {
    const classes = useStyles()

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Add your details here!
          </p>
        </div>
      );

    return(
        <div>
        <Button id="addContainer" onClick={handleOpen}>
            <div id="addIcon">
            <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
              <circle id="Ellipse_6" data-name="Ellipse 6" cx="35" cy="35" r="35"/>
              <g id="icon_content_add_24px" data-name="icon/content/add_24px" transform="translate(17 18)">
                <path id="_Color" data-name=" ↳Color" d="M35,20H20V35H15V20H0V15H15V0h5V15H35Z" fill="#fff"/>
              </g>
            </svg>

            </div>
            <div>
                <span id="addLabel">{props.label}</span>
            </div>
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <props.component />
        </Modal>
        </div>
    );
}
export default DashButton;

{/* <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="35" cy="35" r="35" fill="#20abf5"/>
                    <g id="icon_content_add_24px" data-name="icon/content/add_24px" transform="translate(17 18)">
                        <path id="_Color" data-name=" ↳Color" d="M35,20H20V35H15V20H0V15H15V0h5V15H35Z" fill="#fff"/>
                    </g>
                </svg> */}