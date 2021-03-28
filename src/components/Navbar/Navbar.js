import React from 'react';
import { Box, Button, AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core';
import { Person, Home, ExitToApp } from '@material-ui/icons';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box display='flex' flexGrow={1}>
                    <MenuItem className={classes.menuItem}>
                        <Home className={classes.icon} />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <Person className={classes.icon} />
                    </MenuItem>
                </Box>
                <MenuItem variant="contained" className={classes.logout}>
                    <ExitToApp className={classes.icon} />
                </MenuItem>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
