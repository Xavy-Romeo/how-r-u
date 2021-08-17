import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sectionTitle: {
        fontFamily: 'Abril Fatface, serif',
        display: 'flex',
        justifyContent: 'center',
        margin: '15px auto',
        textShadow: '1px 1px 1px white',
    },
    subtitle: {
        fontFamily: 'Playfair Display, serif',
        marginBottom: '5px',
        textShadow: '1px 1px 1px white',
    },
    loading: {
        fontFamily: 'Playfair Display, serif',
        color: 'red'
    }
});

export default useStyles;