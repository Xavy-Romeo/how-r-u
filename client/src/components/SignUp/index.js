import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import './Signup.css';

export default function Signup({ classes, signupModal, setSignupModal, loginModal }) {
    
    const signupSubmit = event => event.preventDefault();

    if (signupModal) {
        document.body.classList.add('modal-active');
    }
    else {
        document.body.classList.remove('modal-active');
    }
    
    return (
        <>
            {!loginModal && !signupModal && (
                <Button
                    onClick={() => {setSignupModal(true)}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Signup
                </Button>
            )}

            {signupModal && (
                <div className="signup-modal">
                    <div 
                        className="overlay"
                        onClick={() => {setSignupModal(false)}}
                    ></div>
                    <div className="signup-container">
                        <form className="signup-form"> 
                            <h3>Signup</h3>

                            <div className="signup-names">
                                <div>
                                    <label for="firstName">First Name:</label>
                                    <input type="text" placeholder="First Name" name="firstName" id="signup-first-name"></input>
                                </div>    
                                
                                <div className="signup-last">
                                    <label for="lastName">Last Name:</label>
                                    <input type="text" placeholder="Last Name" name="lastName" id="signup-last-name"></input>
                                </div>
                            </div>

                            <label for="email">Email:</label>
                            <input type="text" placeholder="Email" name="email" id="signup-email"></input>
                            
                            <label for="username">Username:</label>
                            <input type="text" placeholder="Username" name="username" id="signup-username"></input>

                            <label for="password">Password:</label>
                            <input type="text" placeholder="Password" name="password" id="signup-password"></input>
                            <div className="button-div">
                                <button 
                                    type="submit" 
                                    onClick={() => {
                                        signupSubmit()
                                        setSignupModal(false)                                        
                                    }}
                                >Signup</button>   
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
