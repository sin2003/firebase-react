import React from 'react';
import app from '../firebase-config.js';

const Main = () => {

    
	const logout = () => {
        const auth= getAuth();
		signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
	}
	
	return (
		<div style={{"marginTop" : "200px"}}>
			<center>
			Anonymous Login Success
			<button style={{"marginLeft" : "20px"}}
			onClick={logout}>
				Logout
			</button>
			</center>
		</div>
	);
}

export default Main;
