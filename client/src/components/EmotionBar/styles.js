import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    emotions: {
        paddingTop: '2rem',
        paddingBottom: '3rem',
        marginBottom: '2rem',
        backgroundColor: 'lightgreen',
    },
    moodContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    imgStyle: {
        borderRadius: '50%',

        margin: '1.25rem 0 .25rem 0',
        '&:hover':{
        boxShadow: '5px 10px 15px black'
        }
    },
    span: {
        display: 'inline-block',
        position: 'relative',
        textShadow: '1px 1px 1px white',
        color: 'rgb(36, 8, 88)',
        fontWeight: 'bold',
        fontSize: '22px',
        margin: '0 auto'
    },
});

export default useStyles;