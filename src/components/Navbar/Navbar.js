import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import { Person, Home, ExitToApp } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box display='flex' flexGrow={1}>
                    <MenuItem component={Link} to="/" className={classes.menuItem}><Home className={classes.icon} /></MenuItem>
                    <MenuItem component={Link} to="/profile:id" className={classes.menuItem}><Person className={classes.icon} /></MenuItem>
                </Box>
                <Button component={Link} to="/logout" variant="contained" color="secondary" className={classes.logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
