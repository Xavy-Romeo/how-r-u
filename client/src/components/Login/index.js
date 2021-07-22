import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import './Login.css';

export default function Login({ classes }) {
     
    const [modalOpen, setModalOpen] = useState(false);

    if (modalOpen) {
        document.body.classList.add('modal-active');
    }
    else {
        document.body.classList.remove('modal-active');
    }
    
    return (
        <>
            {!modalOpen && (
                <Button
                    onClick={() => {setModalOpen(true)}}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                >
                    Login
                </Button>
            )}

            {modalOpen && (
                <div className="login-modal">
                    <div className="overlay"></div>
                    <div className="login-container">
                        <form className="login-form"> 
                            <h3>Login</h3>
                            
                            <label for="username">Username:</label>
                            <input type="text" placeholder="Username" name="username"></input>

                            <label for="password">Password:</label>
                            <input type="text" placeholder="Password" name="password"></input>
                            <div className="button-div">
                                <button type="submit" onClick={() => {setModalOpen(false)}}>Login</button>   
                            </div>
                        </form>
                    </div>
                    
                </div>
                
            )}
        </>
    );
};