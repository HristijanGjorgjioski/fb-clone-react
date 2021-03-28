import React, { useState } from 'react'
import FileBase from 'react-file-base64';

import { Paper, TextField, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles()
    const [postData, setPostData] = useState({ description: '', selectedFile: '' });

    const onFormSubmit = () => {
        
    }

    return (
        <Paper className={classes.paper}>
            <form className={classes.form} autoComplete="off" noValidate onSubmit={onFormSubmit}>
                <Typography variant="h6">Create a Post</Typography>
                <TextField name="description" variant="outlined" label="Description" fullWidth multiline rows={4} onChange={(e) => setPostData({ ...postData, description: e.target.value})} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.button} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            </form>
        </Paper>
    )
}

export default Form
