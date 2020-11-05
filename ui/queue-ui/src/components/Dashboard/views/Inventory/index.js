import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx'

import ProductListObject from './ProductListObject';
import AddItem from './AddItem';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: 1,
    color: '#001c4c'
  },
  verticalcenter: {
    display: 'flex',
    alignItems: 'center'
  },
  calendarBox: {
    width: '100%'
  }
}));

const Inventory = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root}>
        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                lg={3}
                md={3}
                sm={3}
                xl={3}
                xs={12}
                className={classes.verticalcenter}
            >
                <h2 className={classes.title}>Inventory</h2>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xl={9} xs={12} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12} >
            <div style={{background: '#fff', borderRadius: "0.5em", height: 650, padding: 20}}>
              <h3>Products & Services</h3>
              <div className={classes.verticalcenter} style={{backgroundColor: "black", width: "100%", height: "40px", paddingLeft: "12px", paddingRight: "12px", borderRadius: "0.5rem", display: "flex", color: "white", justifyContent: "space-between", fontWeight: "bold"}}>
                <span>Product Name</span>
                <div style={{border: "1px solid white", display: "flex", justifyContent: "space-evenly", width: "65%"}}>
                  <span>Price</span>
                  <span>Inventory</span>
                  <span>Status</span>
                </div>
              </div>
              <div style={{marginTop: "16px"}}>
                  <ProductListObject />
                  <ProductListObject />
                  <ProductListObject />
                  <ProductListObject />
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} >
            <div style={{background: '#fff', borderRadius: "0.5em", height: 500, padding: 20}}>
              <AddItem />
            </div>
          </Grid>
        </Grid>

      </Container>
  );
};

export default Inventory;
