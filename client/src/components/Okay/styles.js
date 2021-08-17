import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    moodBackground: {
        backgroundColor: 'rgb(240,240,240)'
    },
    sectionTitle: {
        fontFamily: 'Abril Fatface, serif',
        display: 'flex',
        justifyContent: 'center',
        margin: '15px auto',
        textShadow: '1px 1px 1px white',
    },
    meditationSection: {
        height: '1825px', 
        width: '90%', 
        margin: '0 2.5% 0 7.5%'
    },
    activitiesSection: {
        height: '1825px', 
        width: '90%', 
        margin: '0 5% 0 5%'
    },
    booksSection: {
        height: '1825px', 
        width: '90%', 
        margin: '0 7.5% 0 2.5%'
    },
    sectionPic: {
        height: '150px',
        width: '100%'
    },
    comingSoon: {
        height: '150px',
        width: '100%', 
        backgroundColor: 'black', 
        marginTop: '15px' 
    },
    soonApi: {
        paddingTop: '15px', 
        fontWeight: 'bold'
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