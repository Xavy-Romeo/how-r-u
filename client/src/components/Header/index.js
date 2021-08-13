import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import logo_transparent from "../../assets/logo_transparent.png";
import happy from "../../assets/happy.jpg";
import okay from "../../assets/okay.jpg";
import anxious from "../../assets/anxious.jpg";
import sad from "../../assets/sad.jpg";

import Login from "../Login";
import Signup from "../SignUp";
import Auth from "../../utils/auth";
import { GET_ME } from "../../utils/queries";
import Tools from "../Tools";

const meditation = [
  {
    mydata:
      "Meditation — is the habitual process of training your mind to focus and redirect your thoughts. The popularity of meditation is increasing as more people discover its many health benefits.",

    meditation:
      "You can use it to increase awareness of yourself and your surroundings. Many people think of it as a way to reduce stress and develop concentration.",

    whyMeditation:
      " People also use the practice to develop other beneficial habits and feelings, such as a positive mood and outlook, self-discipline, healthy sleep patterns, and even increased pain tolerance.",
      Mindfulness: "Meditation/Music"
  },
];

const activities = [
  {
    mydata:
      "Activities — such as walking, stretching or jogging — that involve repetitive movements of large muscle groups can be particularly stress relieving.",

    activities:
      "Exercise is one of the most important things you can do to combat stress. It might seem contradictory, but putting physical stress on your body through exercise can relieve mental stress.",

    whyActivities:
      "The benefits are strongest when you exercise regularly. People who exercise regularly are less likely to experience anxiety than those who don’t exercise",
      Mindfulness: "Actvities"
  },
];

const books = [
  {
    mydata:
      " Books — Prioritizing mental health is especially important these days. Reading helps to ground yourself and cut down on your anxiety.",

    books:
      " Books rooted in mindfulness are a great place to start.",

    whyBooks:
      " Reading can invite you to think in new ways, expand your imagination, deepen your empathy, help you temporarily escape reality, and increase your knowledge and awareness of others.",
      Mindfulness: "Books"
  },
];

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

export default function Header() {
  const [location, setLocation] = useState('');
  const [urlEndpoint, setUrlEndpoint] = useState('HOME');
  const classes = useStyles();

  let presentLocation = useLocation();

  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const { data } = useQuery(GET_ME);
  const userData = data?.me || [];

  useEffect(() => {
    setLocation(presentLocation.pathname)
    switch (presentLocation.pathname) {
      case '/':
        {urlEndpoint !== 'HOME' && (
          setUrlEndpoint('HOME')
        )}
        break;
      
      case '/happy':
        setUrlEndpoint('HAPPY')
        break;

      case '/anxious':
        setUrlEndpoint('ANXIOUS')
        break;

      case '/sad':
        setUrlEndpoint('SAD')
        break;

      case '/okay':
        setUrlEndpoint('OKAY')
        break;
      default:
        break;
    }
  }, [presentLocation.pathname]);

  return (
    <>
    <AppBar style={{ backgroundColor: "#65AC8D", color: "blue", display: "flex", justifyContent: "space-between" }}>
        <Toolbar>
          {Auth.loggedIn() 
            ? (
              <Typography variant="h6" marginRight="15px">
                Hi {userData.firstName}. 
              </Typography>
            )
            : null
          }

          <Typography variant="h6">
            How Are You Today?
          </Typography>
        
            
          <Box>
            {urlEndpoint !== "HOME" && (
              <Button>
                <Typography>{urlEndpoint}</Typography>
              </Button>
            )}

            {Auth.loggedIn() 
              ? (
                <Button
                    onClick={() => {Auth.logout()}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Logout
                </Button>
              )
              : (
                <>
                  <Login 
                    classes={classes}
                    loginModal={loginModal}
                    setLoginModal={setLoginModal}
                    signupModal={signupModal}
                  />
                  <Signup
                    classes={classes}
                    signupModal={signupModal}
                    setSignupModal={setSignupModal}
                    loginModal={loginModal}
                  />
                </>
              )
            }  
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box className={classes.blankTopHeader}></Box>
      {urlEndpoint === "HOME"
        ? <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            className={classes.topHeader}
          >
            <Box>
              <NavLink to="/">
                <img width="400" height="400" src={logo_transparent} alt="logo" />
              </NavLink>
            </Box>
            
          </Box>
        : null
      }
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="space-around"
        className={classes.emotions}
      >
        <Box>
          <NavLink to="/happy">
            <img
              className={classes.imgStyle}
              width="100"
              height="100"
              src={happy}
              alt="Happy"
            />
          </NavLink>
          <span className={classes.span}>Happy</span>
        </Box>
        <Box>
          <NavLink to="/okay">
            {" "}
            <img
              className={classes.imgStyle}
              width="100"
              height="100"
              src={okay}
              alt="Okay"
            />
          </NavLink>
          <span className={classes.span}>Okay</span>
        </Box>
        <Box>
          <NavLink 
            to="/anxious"
            classes={classes.button}
          >
            {" "}
            <img
              className={classes.imgStyle}
              width="100"
              height="100"
              src={anxious}
              alt="Anxious"
            />
          </NavLink>
          <span className={classes.span}>Anxious</span>
        </Box>
        <Box>
          <NavLink to="/sad">
            {" "}
            <img
              className={classes.imgStyle}
              width="100"
              height="100"
              src={sad}
              alt="Sad"
            />
          </NavLink>
          <span className={classes.span}>Sad</span>
        </Box>
      </Box>
      {urlEndpoint === "HOME"
        ? <Box
            display="flex"
            flexWrap="nowrap"
            justifyContent="space-around"
            className={classes.topHeader}
          >
            <Box
              display="flex"
              flexWrap="nowrap"
              justifyContent="space-around"
              className={classes.topHeader}
            >
              {meditation.map((item, idx) => {
                return (
                  <Tools
                    key={idx}
                    mydata={item.mydata}
                    meditation={item.meditation}
                    whyMeditation={item.whyMeditation}
                    Mindfulness={item.Mindfulness}
                  />
                );
              })}
            </Box>
          <Box
            display="flex"
            flexWrap="nowrap"
            justifyContent="space-around"
            className={classes.topHeader}
          >
            {activities.map((item, idx) => {
              return (
                <Tools
                  key={idx}
                  mydata={item.mydata}
                  activities={item.activities}
                  whyActivities={item.whyActivities}
                  Mindfulness={item.Mindfulness}
                />
              );
            })}
          </Box>
          <Box
            display="flex"
            flexWrap="nowrap"
            justifyContent="space-around"
            className={classes.topHeader}
          >
            {books.map((item, idx) => {
              return (
                <Tools
                  key={idx}
                  mydata={item.mydata}
                  books={item.books}
                  whyBooks={item.whyBooks}
                  Mindfulness={item.Mindfulness}
                  
                />
              );
            })}
          </Box>
          
        </Box>
      : null
    }
    </>
  );
}
