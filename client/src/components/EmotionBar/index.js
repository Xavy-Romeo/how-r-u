import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import happy from '../../assets/happy.jpg';
import okay from '../../assets/okay.jpg';
import anxious from '../../assets/anxious.jpg';
import sad from '../../assets/sad.jpg';
import useStyles from './styles';

export default function EmotionBar() {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.emotions} justifyContent='space-around'>
            <Box className={classes.moodContainer}>
                <NavLink to='/happy'>
                    <img
                        className={classes.imgStyle}
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
                        src={sad}
                        alt='Sad'
                    />
                    </NavLink>
                <span className={classes.span}>Sad</span>
            </Box>
        </Grid>
    );
};