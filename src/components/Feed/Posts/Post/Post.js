import React from 'react'
import { Card, CardMedia, Paper, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'));

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };
    

    return (
        post ? post[0].map((p) => (
            <Paper key={p._id} className={classes.paper}>
                <Card className={classes.card}>
                    <Typography variant="h6" color="textSecondary">{p.creator}</Typography>
                    <CardMedia className={classes.image} component="img" image={p.photo} title={'Image'} />
                    <Typography variant="h6">{p.description}</Typography>
                </Card>
            </Paper>
        )) : null
    )
}

export default Post
