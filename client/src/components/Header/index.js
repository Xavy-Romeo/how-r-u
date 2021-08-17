import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Login from '../Login';
import Signup from '../SignUp';

import Auth from '../../utils/auth';
import { GET_ME } from '../../utils/queries';
import useStyles from './styles'; 

import Logo from '../../assets/logo_transparent.png';

export default function Header({ urlEndpoint, setUrlEndpoint }) {
 
  const classes = useStyles();

  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const { data } = useQuery(GET_ME);
  const userData = data?.me || [];

  return (
    <>
      <AppBar>
        <Toolbar 
          className={`${classes.toolBar} 
            ${(urlEndpoint !== 'HOME') 
              ? classes.toolBar2
              : '' }`}
        > 
          <Box
            onClick={() => setUrlEndpoint('HOME')}
          > 
            <NavLink to='/'>
              <img src={Logo} className={classes.logoHeader} alt='logo' />
            </NavLink>
          </Box>
          
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Grid container>
                {Auth.loggedIn() 
                  ? (
                    <Grid item>
                      <Typography className={classes.font} variant='h3'>
                        Hi {userData.firstName}. 
                      </Typography>
                    </Grid>
                  )
                  : null
                }
                
                <Typography  className={classes.font} variant='h3'>
                  How Are You Today?
                </Typography>
              </Grid>
            </Grid>
              
            <Grid item>
              {urlEndpoint !== 'HOME' && (
                <NavLink to='/' variant='text' className={classes.homeButton}>
                  <Button
                    onClick={() => setUrlEndpoint('HOME')}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                  >
                    HOME
                  </Button>
                </NavLink>
              )}
              {Auth.loggedIn() 
                ? (
                  <Button
                      onClick={() => {Auth.logout()}}
                      variant='contained'
                      color='primary'
                      className={classes.button}
                  >
                    Logout
                  </Button>
                )
                : (
                  <>
                    <Login 
                      loginModal={loginModal}
                      setLoginModal={setLoginModal}
                      signupModal={signupModal}
                    />
                    <Signup
                      signupModal={signupModal}
                      setSignupModal={setSignupModal}
                      loginModal={loginModal}
                    />
                  </>
                )
              }  
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>  
    </>
  );
};