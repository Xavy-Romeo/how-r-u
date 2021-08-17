import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolBar: {
        backgroundColor: '#65AC8D', 
        display: 'flex', 
        justifyContent: 'space-between',
    },
    toolBar2: {
        backgroundColor: 'orange'
    },
    logoFooter: {
        height: '60px',
        marginRight: '15px',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    footerText: {
        fontFamily: 'Kanit, sans-serif',
        textShadow: '1px 1px 1px white',
        color: 'rgb(36, 8, 88)'
    },

});

export default useStyles;