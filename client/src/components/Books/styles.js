import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bookCard: {
        backgroundColor: 'black', 
        margin: '15px'
    },
    bookImage: {
        height: '225px',
        width: '150px',
        margin: '20px auto 0 auto',
    },
    bookInfo: {
        fontFamily: 'Playfair Display, serif',
        color: 'white'
    },
    bookButton: {
        display: 'flex', 
        justifyContent: 'center'
    }
});

export default useStyles;