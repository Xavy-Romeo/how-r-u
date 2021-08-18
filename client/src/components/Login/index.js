import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Auth from'../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';
import useStyles from './styles'; 

export default function Login({ loginModal, setLoginModal, signupModal }) {
    const classes = useStyles();
    
    const [userData, setUserData] = useState({ username: '', password: ' '});

    const [login, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const loginSubmit = async () => {
              
        try {
            const { data } = await login({
                variables: { ...userData } 
            });
            Auth.login(data.login.token);

            if (data.login.token) {
                setUserData({
                    username: '', 
                    password: ''
                });
            }
        }
        catch (err) {
            console.error(err);
        }
    };

    if (loginModal) {
        document.body.classList.add('modalActive');
    }
    else {
        document.body.classList.remove('modalActive');
    }
    
    return (
        <>
            {!loginModal && !signupModal && (
                <Button
                    onClick={() => {setLoginModal(true)}}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    Login
                </Button>
            )}

            {loginModal && (
                <Box className={classes.loginModal}>
                    <Box 
                        className={classes.overlay} 
                        onClick={() => {setLoginModal(false)}}
                    />
                    <Box className={classes.loginContainer}>
                        <form 
                            className={classes.loginForm} 
                            onSubmit={e => e.preventDefault()}
                        > 
                            <Typography className={classes.loginTitle}>
                                Login
                            </Typography>
                            
                            <label htmlFor='username'>
                                <Typography  className={classes.inputLabel}>
                                    Username:
                                </Typography>
                            </label>
                            <input
                                onChange={handleInputChange} 
                                type='text' 
                                placeholder='Username' 
                                name='username' 
                                id='login-username'
                                className={classes.input}
                                autoComplete='on'
                                required
                            />

                            <label htmlFor='password'>
                                <Typography  className={classes.inputLabel}>
                                    Password:
                                </Typography>
                            </label>
                            <input
                                onChange={handleInputChange} 
                                type='password' 
                                placeholder='Password' 
                                name='password' 
                                id='login-password'
                                className={classes.input}
                                autoComplete='on'
                                required
                            />

                            <Box className={classes.buttonDiv}>
                                <button
                                    type='submit'  
                                    onClick={() => {
                                        loginSubmit()
                                    }}
                                    className={classes.loginButton}
                                >
                                    <Typography className={classes.buttonText}>
                                        Login
                                    </Typography>
                                </button>   
                            </Box>
                        </form>
                        {error && 
                            <Typography className={classes.loginError} variant='h5'>
                                Login failed
                            </Typography>
                        }
                    </Box>
                </Box> 
            )}
        </>
    );
};