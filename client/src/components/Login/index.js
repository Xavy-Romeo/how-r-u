import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import './Login.css';

export default function Login({ classes, loginModal, setLoginModal, signupModal }) {
    
    const loginSubmit = event => event.preventDefault();
    
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
                    <div className="overlay"></div>
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
                                        loginSubmit()
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