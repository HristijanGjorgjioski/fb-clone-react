import React from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, Button, Typography, CardContent } from '@material-ui/core';

import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();

    const onButtonClick = async () => {
        const url = 'https://api.imgflip.com/get_memes';
        const response = await axios.get(url);
        const data = response.data.data.memes[0];
    }

    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia component="img" alt="Fact Image" height="140" title="Fact Image" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">Fact</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Search for the keywords to learn more about each warning. To ignore, add // eslint-disable-next-line to the line before.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Button className={classes.button} variant="contained" color="primary" onClick={onButtonClick}>NEXT FACT</Button>
        </div>
    )
}

export default Sidebar;
