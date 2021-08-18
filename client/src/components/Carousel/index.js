import React, { useState, useEffect, useRef } from 'react';

import picInfo from './picInfo';
import useStyles from './styles';

import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import Box from '@material-ui/core/Box';

export default function Carousel(props) {
    const classes = useStyles();
    
    const [currentPic, setCurrentPic] = useState(0);
    const length = picInfo.length;

    const nextPic = () => {
        setCurrentPic(currentPic === length - 1 
            ? 0 
            : currentPic + 1
        );
    };

    const prevPic = () => {
        setCurrentPic(currentPic === 0 
            ? length - 1 
            : currentPic -1 
        );
    };

    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextPic;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };
        if (props.autoPlay !== null) {
            const interval = setInterval(play, props.autoPlay * 1000);
            return () => clearInterval(interval);
        }
    }, [props.autoPlay]);

    return (
        <Box className={classes.carouselContainer}>  
            <ArrowBackIosSharpIcon 
                onClick={() => prevPic()}
                className={classes.arrowLeft} 
                fontSize='large'
            />
            {picInfo.map((slide, index) => {
                return(
                    <Box 
                        className={index === currentPic
                            ? `${classes.slide} ${classes.slideActive}`
                            : `${classes.slide}`
                        }
                        key={index} 
                    >   
                        {index === currentPic && (
                            <img 
                            src={slide.image} 
                            alt={slide.des} 
                            className={classes.carouselPic}
                            />
                        )}
                    </Box>
                );
            })}
            <ArrowForwardIosSharpIcon 
                onClick={() => nextPic()}
                className={classes.arrowRight} 
                fontSize='large' 
            />
        </Box>
    );
};

Carousel.props = {
    autoPlay: null
};