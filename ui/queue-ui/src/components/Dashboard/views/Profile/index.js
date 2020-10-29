import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import clsx from 'clsx'

import UpdateAddress from '../../../UserProfile/UpdateAddress';
import PaymentInfo from '../../../UserProfile/PaymentInfo';
import PersonalInfo from '../../../UserProfile/PersonalInfo';
import CompleteRegistration from '../../../UserProfile/CompleteRegistration';

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

const Profile = () => {
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
                sm={3}
                xl={3}
                xs={12}
                className={classes.verticalcenter}
            >
                <h2 className={classes.title}>Profile</h2>
            </Grid>
            <Grid item lg={9} sm={9} xl={9} xs={12} />
        </Grid>

        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
                <article style={{background: '#fff', height: '100%', width: '100%', borderRadius: 12, padding: '3px 6px 15px'}}>
                    <UpdateAddress />
                </article>
            </Grid>

            <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
                <article style={{background: '#fff', height: '100%', width: '100%', borderRadius: 12, padding: '3px 6px 15px'}}>
                    <PaymentInfo />
                </article>
            </Grid>

            <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
                <article style={{background: '#fff', height: '100%', width: '100%', borderRadius: 12, padding: '3px 6px 15px'}}>
                    <PersonalInfo />
                </article>
            </Grid>

            <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={12}
                xs={12}
            >
                <article style={{height: '100%', width: '100%', borderRadius: 12, padding: '3px 6px 15px'}}>
                    <CompleteRegistration />
                </article>
            </Grid>
        </Grid>
      </Container>
  );
};

export default Profile;
