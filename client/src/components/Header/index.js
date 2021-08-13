import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import Login from '../Login';
import Signup from '../SignUp';
import Auth from '../../utils/auth';
import { GET_ME } from '../../utils/queries';
import useStyles from './styles'; 

export default function Header() {
 
  const classes = useStyles();

  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const { data } = useQuery(GET_ME);
  const userData = data?.me || [];

  return (
    <>
      <AppBar style={{ backgroundColor: '#65AC8D', color: 'blue', display: 'flex', justifyContent: 'space-between' }}>
          <Toolbar>
            {Auth.loggedIn() 
              ? (
                <Grid item xs={1}>
                <Typography variant='h6' marginRight='15px'>
                  Hi {userData.firstName}. 
                </Typography>
                </Grid>
              )
              : null
            }
            
            <Grid container justifyContent='space-between'>
              <Typography variant='h6'>
                How Are You Today?
              </Typography>
            
              <Box>
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
            </Grid>
          </Toolbar>
          
        </AppBar>  
    </>
  );
};