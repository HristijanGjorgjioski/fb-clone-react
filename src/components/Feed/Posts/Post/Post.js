import React from 'react'
import { Card, CardMedia, Paper, Typography } from '@material-ui/core';

import useStyles from './styles';

const Post = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Card className={classes.card}>
                <Typography variant="h6" color="textSecondary">Hristijan Gjorgjioski</Typography>
                <CardMedia className={classes.image} component="img" image={"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} title={'Image'} />
                <Typography variant="h6">Description</Typography>
            </Card>
        </Paper>
    )
}

export default Post
