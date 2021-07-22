import React, { useState } from 'react';
import Button from "@material-ui/core/Button";

export default function Login({ classes }) {
     
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <>
            <Button
                onClick={() => {setModalOpen(true)}}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Login
            </Button>

            {modalOpen && (
                <div>
                    <div className="overlay"></div>
                    <div>
                        <h2> HELLO HELLO HELLO MODAL!!!!</h2>
                    </div>
                    <button onClick={() => {setModalOpen(false)}}></button>
                </div>
                
            )}
        </>
    );
};