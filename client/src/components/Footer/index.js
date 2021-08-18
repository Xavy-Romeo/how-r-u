import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from './styles';
import Logo from '../../assets/logo_transparent.png';

import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function Footer({ urlEndpoint, setUrlEndpoint }) { 
    const classes = useStyles();
    
    return(
        <>
            <Toolbar 
                className={`${classes.toolBar} 
                ${(urlEndpoint !== 'HOME') 
                    ? classes.toolBar2
                    : '' 
                }`}
            > 
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item className={classes.logoFootCont}>
                        <Box
                            onClick={() => setUrlEndpoint('HOME')}
                            > 
                            <NavLink to='/'>
                                <img src={Logo} className={classes.logoFooter} alt='logo' />
                            </NavLink>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Typography className={`${classes.footerText} suicideLine`} variant='h4'>
                            Suicide Hotline: 800-273-8255
                        </Typography>
                    </Grid>
                    <Grid item className={classes.footerCopy}>
                        <Typography className={classes.footerText} variant='h5'>
                            &copy; {new Date().getFullYear()}
                        </Typography>
                        <Typography className={classes.footerText} variant='h5'>
                            HowRU
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    );
};