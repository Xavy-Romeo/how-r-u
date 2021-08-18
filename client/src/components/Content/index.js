import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import logo_transparent from '../../assets/logo_transparent.png';
import Carousel from '../Carousel';

import Info from '../Info';
import useStyles from './styles';  
import { meditation, activities, books } from './dataInfo';
import EmotionBar from '../EmotionBar';
 
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
                            <Grid item xs={12} lg={3}>
                                <img src={logo_transparent} className={classes.logoSubHeader} alt='logo' />
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                <Grid container  style={{ minWidth: '100%'}}>
                                    <Grid item xs={1} xl={0}></Grid>
                                    <Grid item xs={10} xl={12}>
                                        <Carousel autoPlay={4} style={{minWidth: '100%'}} />    
                                    </Grid>
                                    <Grid item xs={1} xl={0}></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </>
            : null
            }
            
            <EmotionBar />

            {urlEndpoint === 'HOME'
                ?   <Grid container className={classes.infoContainer}>
                        <Grid item className={classes.infoContainer} xs={12} sm={5} md={4}>
                            {meditation.map((item, idx) => {
                                return (
                                    <Info
                                        key={idx}
                                        mydata={item.mydata}
                                        meditation={item.meditation}
                                        whyMeditation={item.whyMeditation}
                                        Mindfulness={item.Mindfulness}
                                        initial={'M'}
                                    />
                                );
                            })}
                        </Grid>
                        <Grid item className={classes.infoContainer} xs={12} sm={5} md={4}>
                            {activities.map((item, idx) => {
                                return (
                                    <Info
                                        key={idx}
                                        mydata={item.mydata}
                                        activities={item.activities}
                                        whyActivities={item.whyActivities}
                                        Mindfulness={item.Mindfulness}
                                        initial={'A'}
                                    />
                                );
                            })}
                        </Grid>
                        <Grid item className={classes.infoContainer} xs={12} sm={5} md={4}>
                            {books.map((item, idx) => {
                                return (
                                    <Info
                                        key={idx}
                                        mydata={item.mydata}
                                        books={item.books}
                                        whyBooks={item.whyBooks}
                                        Mindfulness={item.Mindfulness}
                                        initial={'B'}
                                    />
                                );
                            })}
                        </Grid>
                    </Grid>
                : null
            }
        </>
    );
};