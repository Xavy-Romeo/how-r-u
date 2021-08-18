import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
        marginRight: '1rem',
    },
    modalActive: {
        overflowY: 'hidden'
    },
    overlay: {
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        background: 'rgba(0,0,0,0.7)'
    },
    loginContainer: {
        position: 'fixed',
        backgroundColor: 'orange',
        top: '15%',
        left: '60%',
        padding: '0 30px 20px 30px',
        border: '2px solid black',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.6) 5px 5px',
        width: '400px',
        '@media (max-width:1199px)': {
            left: '2%'
        },
        '@media (max-width:599px)': {
            width: '250px',
        },
    },
    loginTitle: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '10px',
        textAlign: 'center',
    },
    input: {
        fontFamily: 'Playfair Display, serif',
        margin: '5px 0 10px 0',
        padding: '5px',
        width: '100%',
        border: '1px solid black',
        borderRadius: '4px',
        backgroundColor: 'lightgrey',
        '&:focus': {
            backgroundColor: 'white',
            outline: 'none' 
        }
    },
    inputLabel: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 'bold'
    },
    buttonDiv: {
        marginTop: '5px',
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: 'lightgreen',
        padding: '3px',
        width: '85%',
        border: '1px solid black',
        borderRadius: '4px',
        fontSize: '15px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgb(76, 146, 76)'
        } 
    },
    buttonText: {
        fontFamily: 'Playfair Display, serif',
        fontWeight: 'bold'
    },
    loginError: {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center'
    }
});

export default useStyles;