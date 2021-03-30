import React, { useContext, useEffect, useState } from 'react'
import FileBase from 'react-file-base64';
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import { MainContext } from '../../../context/context';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({ description: '', selectedFile: '' });
    const { createPost } = useContext(MainContext);
    const user = JSON.parse(localStorage.getItem('user'));

    const clear = () => {
        setPostData({ description: '', selectedFile: '' })
    }


    const onFormSubmit = async (e) => {
        e.preventDefault();
        createPost({ ...postData, creator: user?.data?.result?.name });
        clear();
    }

    return (
        <Paper className={classes.paper}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={onFormSubmit}>
                <Typography variant="h6">Create a Post</Typography>
                <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} onChange={(e) => setPostData({ ...postData, description: e.target.value})} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}

export default Form;
