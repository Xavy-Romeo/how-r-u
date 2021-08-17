import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import logo_transparent from '../../assets/logo_transparent.png';
import happy from '../../assets/happy.jpg';
import okay from '../../assets/okay.jpg';
import anxious from '../../assets/anxious.jpg';
import sad from '../../assets/sad.jpg';
import Carousel from '../Carousel';

import Tools from '../Tools';
import useStyles from './styles';  
import { meditation, activities, books } from './dataInfo';
 
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
            ?   <>
                    <Box
                        className={classes.topHeader}
                    >
                        <Grid container direction='row'>
                            <Grid item xs={3}>
                                <img width='400' height='400' src={logo_transparent} alt='logo' />
                            </Grid>
                            <Grid item xs={8}>
                                <Carousel autoPlay={4}/>
                            </Grid>
                        </Grid>
                    </Box>
                </>
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
                            width='200'
                            height='200'
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
                            width='200'
                            height='200'
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
                            width='200'
                            height='200'
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
                            width='200'
                            height='200'
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
                                        initial={'M'}
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
                                        initial={'A'}
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
                                        initial={'B'}
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