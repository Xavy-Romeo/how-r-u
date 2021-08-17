import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolBar: {
        backgroundColor: '#65AC8D', 
        color: 'blue', 
        display: 'flex', 
        justifyContent: 'space-between',
    },
    toolBar2: {
        backgroundColor: 'orange'
    },
    logoHeader: {
        height: '60px',
        marginRight: '15px',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    navLinks: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    button: {
        marginRight: '1rem',
    },
    media: {
            height: 500,
    },
    font: {
        fontFamily: 'Kanit, sans-serif',
        marginRight: '20px',
        fontWeight: 'bold',
        textShadow: '1px 1px 1px white',
        color: 'rgb(36, 8, 88)'
    },
    homeButton: {
        textDecoration: 'none',
    }
});

export default useStyles;