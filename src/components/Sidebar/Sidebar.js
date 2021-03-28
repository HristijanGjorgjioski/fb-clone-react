import React from 'react';

import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            Sidebar
        </div>
    )
}

export default Sidebar;
