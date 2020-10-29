import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  Hidden
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    color: '#000',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'normal',
    textTransform: 'capitalize',
    justifyContent: 'flex-start',
    letterSpacing: 0,
    fontSize: 15,
    padding: 5,
    width: '100%',
  },
  icon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  },
  heading: {
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    fontSize: 16,
    fontWeight: 500
  },
  title: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  iconButton,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        className={clsx(classes.button, href === '#' ? classes.heading : null)}
        component={RouterLink}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size="20"
          />
        )}
        <Hidden mdDown>
          <span className={classes.title}>
            {title}
          </span>
        </Hidden>
        <Hidden lgUp>
          {iconButton ? null : (
            <span className={classes.title}>
              {title}
            </span>
          )}
        </Hidden>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
