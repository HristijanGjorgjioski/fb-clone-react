import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4)
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    button: {
        marginBottom: 10
    }
}));
