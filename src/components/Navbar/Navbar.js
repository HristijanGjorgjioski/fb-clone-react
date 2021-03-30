import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';
import { Person, Home } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

import { UserContext } from '../../context/context';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const { logout } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const onLogout = (e) => {
        logout(history);
    }

    useEffect(() => {
        const token = user?.token

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location])

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box display='flex' flexGrow={1}>
                    <MenuItem component={Link} to="/" className={classes.menuItem}><Home className={classes.icon} /></MenuItem>
                    <MenuItem component={Link} to="/profile:id" className={classes.menuItem}><Person className={classes.icon} /></MenuItem>
                </Box>
                { user?.result ? 
                    <>
                    <Typography className={classes.email} variant="h6" color="textSecondary">{user?.result.email}</Typography>
                    <Button component={Link} to="/auth" variant="contained" color="secondary" className={classes.logout} onClick={onLogout}>Logout</Button>
                    </>
                : 
                    <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.logout}>Signin</Button> 
                }
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
