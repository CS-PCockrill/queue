import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx'

import ProductListObject from '../Inventory/ProductListObject';
import AddItem from '../Inventory/AddItem';

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

const Orders = () => {
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
                <h2 className={classes.title}>Orders</h2>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xl={9} xs={12} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12} >
            <div style={{background: '#fff', borderRadius: "0.5em", height: 650, padding: 20}}>
              <h3>Current orders</h3>
              <div className={classes.verticalcenter} style={{backgroundColor: "black", width: "100%", height: "40px", borderRadius: "0.5rem", display: "flex", color: "white", justifyContent: "space-evenly", fontWeight: "bold"}}>
                <span>Image</span>
                <span>Title</span>
                <span>Stock</span>
                <span>Price</span>
                <span>Visibility</span>
              </div>
              <div style={{marginTop: "16px"}}>
                  {/* <ProductListObject />
                  <ProductListObject />
                  <ProductListObject />
                  <ProductListObject /> */}
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} >
            <div style={{background: '#fff', borderRadius: "0.5em", padding: 20}}>
              <AddItem />
            </div>
          </Grid>
        </Grid>

      </Container>
  );
};

export default Orders;
