import React from 'react';
import app from '../firebase-config.js';
import { getAuth, signInAnonymously } from "firebase/auth";


const Login = () => {

    const auth = getAuth();
    
	// Sign in Anonymously
	const signin = () => {
		signInAnonymously(auth).then(() => {

        })
        .catch((error) => {
            const errorCode = error.code;
    const errorMessage = error.message;
        })
	}
	
	return (
		<div>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In Anonymously</button>
			</center>
		</div>
	);
}

export default Login;
