import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import useStyles from './styles';

export default function Signup({ signupModal, setSignupModal, loginModal }) {
    const classes = useStyles();

    const [userData, setUserData] = useState({
       firstName: '', lastName: '', email: '', username: '', password: '' 
    });

    const [addUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const signupSubmit = async () => {
        try {
            const { data } = await addUser({
              variables: { ...userData }
            })
            Auth.login(data.addUser.token);
        }
        catch (err) {
            console.error(err);
        }

        setUserData({
            firstName: '', 
            lastName: '', 
            email: '', 
            username: '', 
            password: ''
        });
    };

    if (signupModal) {
        document.body.classList.add('modalActive');
    }
    else {
        document.body.classList.remove('modalActive');
    }
    
    return (
        <>
            {!loginModal && !signupModal && (
                <Button
                    onClick={() => {setSignupModal(true)}}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    Signup
                </Button>
            )}

            {signupModal && (
                <Box className={classes.signupModal}>
                    <Box 
                        className={classes.overlay}
                        onClick={() => {setSignupModal(false)}}
                    />
                    <Box className={classes.signupContainer}>
                        <form className={classes.signupForm}> 
                            <Typography className={classes.signupTitle}>
                                Signup
                            </Typography>

                            <Box className={classes.signupNames}>
                                <Box>
                                    <label htmlFor='firstName' className={classes.inputLabel}>
                                        First Name:
                                    </label>
                                    <input
                                        onChange={handleInputChange} 
                                        type='text' 
                                        placeholder='First Name' 
                                        name='firstName' 
                                        id='signup-first-name'
                                        className={classes.input}
                                        autoComplete='on'
                                    />
                                </Box>    
                                
                                <Box className={classes.signupLast}>
                                    <label htmlFor='lastName'  className={classes.inputLabel}>
                                        Last Name:
                                    </label>
                                    <input
                                        onChange={handleInputChange} 
                                        type='text' 
                                        placeholder='Last Name' 
                                        name='lastName' 
                                        id='signup-last-name'
                                        className={classes.input}
                                        autoComplete='on'
                                    />
                                </Box>
                            </Box>

                            <label htmlFor='email'  className={classes.inputLabel}>
                                Email:
                            </label>
                            <input 
                                onChange={handleInputChange}
                                type='text' 
                                placeholder='Email' 
                                name='email' 
                                id='signup-email'
                                className={classes.input}
                                autoComplete='on'
                            />
                            
                            <label htmlFor='username'  className={classes.inputLabel}>
                                Username:
                            </label>
                            <input
                                onChange={handleInputChange} 
                                type='text' 
                                placeholder='Username' 
                                name='username' 
                                id='signup-username'
                                className={classes.input}
                                autoComplete='on'
                            />

                            <label htmlFor='password'  className={classes.inputLabel}>
                                Password:
                            </label>
                            <input
                                onChange={handleInputChange} 
                                type='password' 
                                placeholder='Password' 
                                name='password' 
                                id='signup-password'
                                className={classes.input}
                                autoComplete='on'
                            />
                            
                            <Box className={classes.buttonDiv}>
                                <button 
                                    type='button' 
                                    onClick={() => {
                                        signupSubmit()
                                        setSignupModal(false)                                        
                                    }}
                                    className={classes.signupButton}
                                >
                                    <Typography className={classes.buttonText}>
                                        Signup
                                    </Typography>
                                </button>   
                            </Box>
                        </form>
                    </Box>
                </Box>
            )}
        </>
    );
};
