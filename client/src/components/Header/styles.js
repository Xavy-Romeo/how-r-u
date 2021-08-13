import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    navLinks: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
    blankTopHeader: {
        minHeight: "3rem",
        backgroundColor: "lightgreen",
    },
    topHeader: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
        marginBottom: "2rem",
        backgroundColor: "orange",
    },
    emotions: {
        paddingTop: "2rem",
        paddingBottom: "3rem",
        marginBottom: "2rem",
        backgroundColor: "lightgreen",
    },
    imgStyle: {
        borderRadius: "50%",
        marginBottom: "1.5rem",
        '&:hover':{
          boxShadow: "5px 10px 15px black"
        }
    },
    span: {
        display: "inline-block",
        position: "relative",
        right: "4.5rem",
    },
    button: {
        marginRight: "1rem",
    },
    media: {
            height: 500,
    }
});

export default useStyles;