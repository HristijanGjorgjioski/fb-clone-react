import React, { useEffect } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        post ? post.map((p) => (
            <div key={p._id}>
                <Paper className={classes.paper}>
                    <Card className={classes.card}>
                        <Typography variant="h6" color="textSecondary">{p.name}</Typography>
                        <CardMedia className={classes.image} component="img" image={p.photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={'Image'} />
                        <CardContent>
                            <Typography variant="h6">{p.description}</Typography>
                        </CardContent>
                        {(user?.data?.result._id === p.creator) && (
                            <CardActions>
                                <Button size="small" color="primary"><MoreHorizIcon /></Button>
                                <Button size="small" color="secondary"><DeleteIcon /></Button>
                            </CardActions>
                        )}
                    </Card>
                </Paper>
            </div>
        )) : null
    )
}

export default Post
