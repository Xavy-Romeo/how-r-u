import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { useMutation } from '@apollo/client';
import './Login.css';

import Auth from'../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';

export default function Login({ classes, loginModal, setLoginModal, signupModal }) {
    
    const [userData, setUserData] = useState({ username: '', password: ' '});

    const [login, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    // const loginSubmit = async (event) => {
    //     event.preventDefault();
              
    //     try {
    //         const { data } = await login({
    //             variables: { ...userData } 
    //         });
    //         Auth.login(data.login.token);
    //     }
    //     catch (err) {
    //         console.error(err);
    //     }

    //     setUserData({
    //         username: '', 
    //         password: ''
    //     });
    // };

    if (loginModal) {
        document.body.classList.add('modal-active');
    }
    else {
        document.body.classList.remove('modal-active');
    }
    
    return (
        <>
            {!loginModal && !signupModal && (
                <Button
                    onClick={() => {setLoginModal(true)}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Login
                </Button>
            )}

            {loginModal && (
                <div className="login-modal">
                    <div 
                        className="overlay" 
                        onClick={() => {setLoginModal(false)}}
                    ></div>
                    <div className="login-container">
                        <form className="login-form"> 
                            <h3>Login</h3>
                            
                            <label for="username">Username:</label>
                            <input type="text" placeholder="Username" name="username" id="login-username"></input>

                            <label for="password">Password:</label>
                            <input type="text" placeholder="Password" name="password" id="login-password"></input>
                            <div className="button-div">
                                <button 
                                    type="submit" 
                                    onClick={() => {
                                        // loginSubmit()
                                        setLoginModal(false)                                        
                                    }}
                                >Login</button>   
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            )}
        </>
    );
};