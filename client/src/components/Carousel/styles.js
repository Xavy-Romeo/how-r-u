import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    carouselPic: {
        minWidth: '100%',
        height: '400px',
        borderRadius: '10px',
        padding: '5px',
        backgroundColor: '#65AC8D',
        border: '7px solid black'
    },
    slide: {
        opacity: 0,
        transitionDuration: '1s ease'
    },
    slideActive: {  
        opacity: 1,
        transitionDuration: '1s',
        transform: 'scale(1.03)'
    },
    arrowLeft: {
        position: 'absolute',
        top: '50%',
        left: '27%',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '10px',
        backgroundColor: 'rgba(255,255,255, .5)',
        cursor: 'pointer',
        zIndex: 9999,
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'rgba(255,255,255,.7)',
            border: '2px solid black'
        }
    },
    arrowRight: {
        position: 'absolute',
        top: '50%',
        right: '9%',
        border: '1px solid black',
        borderRadius: '50%',
        padding: '10px',
        backgroundColor: 'rgba(255,255,255,.5)',
        cursor: 'pointer',
        zIndex: 9999,
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'rgba(255,255,255,.7)',
            border: '2px solid black',
        }
    }
});

export default useStyles;