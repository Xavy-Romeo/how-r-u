import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Button from "@material-ui/core/button";
import Auth from '../../utils/auth';
import './Signup.css';


export default function Signup({ classes, signupModal, setSignupModal, loginModal }) {
    
    const [userData, setUserData] = useState({
       firstName: '', lastName: '', email: '', username: '', password: '' 
    });

    const [addUser, { error }] = useMutation(ADD_USER);

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
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        onChange={handleInputChange} 
                                        type="text" 
                                        placeholder="First Name" 
                                        name="firstName" 
                                        id="signup-first-name"
                                        value={userData.firstName}
                                    ></input>
                                </div>    
                                
                                <div className="signup-last">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        onChange={handleInputChange} 
                                        type="text" 
                                        placeholder="Last Name" 
                                        name="lastName" 
                                        id="signup-last-name"
                                        value={userData.lastName}
                                    ></input>
                                </div>
                            </div>

                            <label htmlFor="email">Email:</label>
                            <input 
                                onChange={handleInputChange}
                                type="text" 
                                placeholder="Email" 
                                name="email" 
                                id="signup-email"
                                value={userData.email}
                            ></input>
                            
                            <label htmlFor="username">Username:</label>
                            <input
                                onChange={handleInputChange} 
                                type="text" 
                                placeholder="Username" 
                                name="username" 
                                id="signup-username"
                                value={userData.username}
                            ></input>

                            <label htmlFor="password">Password:</label>
                            <input
                                onChange={handleInputChange} 
                                type="text" 
                                placeholder="Password" 
                                name="password" 
                                id="signup-password"
                                value={userData.password}
                            ></input>
                            
                            <div className="button-div">
                                <button 
                                    type="button" 
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
