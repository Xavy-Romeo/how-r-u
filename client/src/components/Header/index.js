import React from "react";
import { NavLink } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tools from '../Tools'
import logo_transparent from '../../assets/logo_transparent.png'
import happy from '../../assets/happy.jpg'
import okay from '../../assets/okay.jpg'
import anxious from '../../assets/anxious.jpg'
import sad from '../../assets/sad.jpg'


const mindfullness = [
	{
	  mydata: "Meditation is the habitual process of training your mind to focus and redirect your thoughts. The popularity of meditation is increasing as more people discover its many health benefits.",
   
    meditation: "You can use it to increase awareness of yourself and your surroundings. Many people think of it as a way to reduce stress and develop concentration.",

    whyMeditation: " People also use the practice to develop other beneficial habits and feelings, such as a positive mood and outlook, self-discipline, healthy sleep patterns, and even increased pain tolerance.",
    
	},                                
]

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};

const useStyles = makeStyles({
  navLinks: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  blankTopHeader: {
    minHeight: "3rem",
    backgroundColor: "lightgreen"
  },
  topHeader: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    marginBottom: "2rem",
    backgroundColor: "orange"
  },
  emotions: {
    paddingTop: "2rem",
    paddingBottom: "3rem",
    marginBottom: "2rem",
    backgroundColor: "lightgreen"
  },
  imgStyle: {
    borderRadius: '50%',
    marginBottom: '1.5rem'
  },
  span: {
    display: "inline-block",
    position: "relative",
    right: "4.5rem"
  },
  button: {
    marginRight: "1rem"
  }
});


export default function Header() {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.blankTopHeader}></Box>
      <Box 
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        className={classes.topHeader}
      >
        <Box>
          <NavLink to="/"><img width="400" height="400" src={logo_transparent} alt="logo" /></NavLink>
        </Box>
        <Box>
          <Button variant="contained" color="primary" className={classes.button}>
            Login
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Signup
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="space-around"
        className={classes.emotions}
      >
        <Box>
          <NavLink to="/happy"><img className={classes.imgStyle} width="100" height="100" src={happy} alt="Happy" /></NavLink>
          <span className={classes.span}>Happy</span>
        </Box>
        <Box>
          <NavLink to="/okay" > <img className={classes.imgStyle} width="100" height="100" src={okay} alt="Okay" />
          </NavLink>
          <span className={classes.span}>Okay</span>
        </Box>
        <Box>
          <NavLink to="/anxious" > <img className={classes.imgStyle} width="100" height="100" src={anxious} alt="Anxious" />
          </NavLink>
          <span className={classes.span}>Anxious</span>
        </Box>
        <Box>
          <NavLink to="/sad" > <img className={classes.imgStyle} width="100" height="100" src={sad} alt="Sad" />
          </NavLink>
          <span className={classes.span}>Sad</span>
        </Box>
      </Box>
      <Box  
        display="flex"
        flexWrap="nowrap"
        justifyContent="space-around"
        className={classes.topHeader}
      >
        {mindfullness.map((item, idx) => {
          return (<Tools key={idx}
                    mydata={item.mydata}
                    meditation={item.meditation}
                    whyMeditation={item.whyMeditation}
                   

          />)
         })}
      </Box>
    </>
  );
}

