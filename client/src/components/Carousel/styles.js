import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    carouselContainer: {
        minWidth: '97.5%'
    },
    carouselPic: {
        minWidth: '100%',
        height: '400px',
        borderRadius: '10px',
        padding: '5px',
        backgroundColor: '#65AC8D',
        border: '7px solid black',
        '@media (min-width:2800px)': {
            height: '500px',
        },
        '@media (max-width:959px)': {
            marginLeft: '-2%',
            height: '300px',
        },
        '@media (max-width:599px)': {
            height: '200px',
        },
    },
    slide: {
        opacity: 0,
        transitionDuration: '1s ease'
    },
    slideActive: {  
        opacity: 1,
        transitionDuration: '1s',
        transform: 'scale(1.03)',
        '@media (max-width:959px)': {
            transform: 'scale(1)'
        },
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
        zIndex: 999,
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'rgba(255,255,255,.7)',
            border: '2px solid black'
        },
        '@media (max-width:1919px)': {
            left: '33%'
        },
        '@media (max-width:1279px)': {
            top: '87%',
            left: '20%'
        },
        '@media (max-width:959px)': {
            top: '80%',
        },
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
        zIndex: 999,
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'rgba(255,255,255,.7)',
            border: '2px solid black',
        },
        '@media (max-width:1919px)': {
            right: '15%'
        },
        '@media (max-width:1279px)': {
            top: '87%',
            right: '20%'
        },
        '@media (max-width:959px)': {
            top: '80%',
        },
    }
});

export default useStyles;