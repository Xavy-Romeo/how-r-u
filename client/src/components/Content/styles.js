import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    blankTopHeader: {
        minHeight: '3rem',
        backgroundColor: 'lightgreen',
    },
    topHeader: {
        position: 'relative',
        display: 'flex',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        marginBottom: '2rem',
        backgroundColor: 'orange',
    },
    logoSubHeader: {
        width: '400px',
        height: '400px',
        '@media (max-width:1279px)': {
            display: 'flex',
            margin: '0 auto'
        },
        '@media (max-width:959px)': {
            width: '300px',
            height: '300px',
            display: 'flex',
            margin: '0 auto'
        },
        '@media (max-width:599px)': {
            width: '250px',
            height: '250px',
        },
    },
    button: {
        marginRight: '1rem',
    },
    infoContainer: {
        position: 'relative',
        display: 'flex',
        // flexWrap: 'nowrap',
        justifyContent: 'space-around',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        marginBottom: '2rem',
        backgroundColor: 'orange', 
        '@media (max-width:1279px)': {
            justifyContent: 'center',
            margin: '0 auto'
        },            
    }
});

export default useStyles;