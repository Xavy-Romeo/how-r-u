import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import logo_transparent from '../../assets/logo_transparent.png';
import happy from '../../assets/happy.jpg';
import okay from '../../assets/okay.jpg';
import anxious from '../../assets/anxious.jpg';
import sad from '../../assets/sad.jpg';

import Tools from '../Tools';
import useStyles from './styles';  

const meditation = [
    {
        mydata:
            'Meditation — is the habitual process of training your mind to focus and redirect your thoughts. The popularity of meditation is increasing as more people discover its many health benefits.',
    
        meditation:
            'You can use it to increase awareness of yourself and your surroundings. Many people think of it as a way to reduce stress and develop concentration.',
    
        whyMeditation:
            ' People also use the practice to develop other beneficial habits and feelings, such as a positive mood and outlook, self-discipline, healthy sleep patterns, and even increased pain tolerance.',
        Mindfulness: 'Meditation/Music'
    },
];
  
const activities = [
    {
        mydata:
            'Activities — such as walking, stretching or jogging — that involve repetitive movements of large muscle groups can be particularly stress relieving.',
    
        activities:
            'Exercise is one of the most important things you can do to combat stress. It might seem contradictory, but putting physical stress on your body through exercise can relieve mental stress.',
    
        whyActivities:
            'The benefits are strongest when you exercise regularly. People who exercise regularly are less likely to experience anxiety than those who don’t exercise',
        Mindfulness: 'Actvities'
    },
];
  
const books = [
    {
        mydata:
            ' Books — Prioritizing mental health is especially important these days. Reading helps to ground yourself and cut down on your anxiety.',
    
        books:
            ' Books rooted in mindfulness are a great place to start.',
    
        whyBooks:
            ' Reading can invite you to think in new ways, expand your imagination, deepen your empathy, help you temporarily escape reality, and increase your knowledge and awareness of others.',
        
        Mindfulness: 'Books'
    },
];
 
export default function Content({ urlEndpoint, setUrlEndpoint }) {  
    const classes = useStyles();

    const [location, setLocation] = useState('');

    let presentLocation = useLocation();
  
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
            <Box className={classes.blankTopHeader}></Box>
            {urlEndpoint === 'HOME'
            ?   <Box
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='space-between'
                    className={classes.topHeader}
                >
                    <Box>
                        <NavLink to='/'>
                            <img width='400' height='400' src={logo_transparent} alt='logo' />
                        </NavLink>
                    </Box>
                </Box>
            : null
            }
            <Box
                display='flex'
                flexWrap='nowrap'
                justifyContent='space-around'
                className={classes.emotions}
            >
                <Box className={classes.moodContainer}>
                    <NavLink to='/happy'>
                        <img
                            className={classes.imgStyle}
                            width='100'
                            height='100'
                            src={happy}
                            alt='Happy'
                        />
                        
                    </NavLink>
                    <span className={classes.span}>Happy</span>
                </Box>
                <Box className={classes.moodContainer}>
                    <NavLink to='/okay'>
                        <img
                            className={classes.imgStyle}
                            width='100'
                            height='100'
                            src={okay}
                            alt='Okay'
                        />
                        </NavLink>
                    <span className={classes.span}>Okay</span>
                </Box>
                <Box className={classes.moodContainer}>
                    <NavLink to='/anxious'>
                        <img
                            className={classes.imgStyle}
                            width='100'
                            height='100'
                            src={anxious}
                            alt='Anxious'
                        />
                    </NavLink>
                    <span className={classes.span}>Anxious</span>
                </Box>
                <Box className={classes.moodContainer}>
                    <NavLink to='/sad'>
                        <img
                            className={classes.imgStyle}
                            width='100'
                            height='100'
                            src={sad}
                            alt='Sad'
                        />
                        </NavLink>
                    <span className={classes.span}>Sad</span>
                </Box>
            </Box>
            {urlEndpoint === 'HOME'
                ?   <Box
                        display='flex'
                        flexWrap='nowrap'
                        justifyContent='space-around'
                        className={classes.topHeader}
                    >
                        <Box
                            display='flex'
                            flexWrap='nowrap'
                            justifyContent='space-around'
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
                            display='flex'
                            flexWrap='nowrap'
                            justifyContent='space-around'
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
                            display='flex'
                            flexWrap='nowrap'
                            justifyContent='space-around'
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
};