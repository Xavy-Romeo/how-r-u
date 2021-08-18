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
        height: '200px', 
        width: '200px',
        margin: '1.25rem 0 .25rem 0',
        '&:hover':{
            boxShadow: '5px 10px 15px black'
        },
        '@media (max-width:959px)': {
            height: '140px',
            width: '140px'
        },
        '@media (max-width:600px)': {
            height: '100px',
            width: '100px'
        },
        '@media (max-width:600px)': {
            height: '140px',
            width: '140px'
        },
    },
    span: {
        display: 'inline-block',
        position: 'relative',
        textShadow: '1px 1px 1px white',
        color: 'rgb(36, 8, 88)',
        fontWeight: 'bold',
        fontSize: '22px',
        margin: '0 auto',
        '@media (max-width:600px)': {
            fontSize: '18px',
        },
    },
});

export default useStyles;