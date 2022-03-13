import React,{useEffect} from 'react';
import app from '../firebase-config.js';
import {getAuth,onAuthStateChanged} from 'firebase/auth';


// import {useAuthState} from 'react-firebase-hooks/auth';
// import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Login from './Login';
import Main from './Main';
  
function App() {
  
  //const [user] = useAuthState(app.auth());
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  if (user) {
        // User is signed in.
        return <Main />
  } else {
        // No user is signed in.
        return <Login />
}

  // onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     return <Main />
  //   } else {
  //     // No user is signed in.
  //     return <Login />
  //   }
  // });
  
//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => { // detaching the listener
//         if (user) {
//           return <Main /> // ...your code to handle authenticated users. 
//         } else {
//           return <Login />  // No user is signed in...code to handle unauthenticated users. 
//         }
//     });
//     return () => unsubscribe(); // unsubscribing from the listener when the component is unmounting. 
// }, []);

  // return (
    
  //   <div>
  //     <Router>
  //       <Routes>
  //         <Route exact path="/" element={<h1>Home Page</h1>} />
  //         <Route exact path="login" element={<Login/>} />
  //         <Route exact path="main" element={<Main />} />
          
  //       </Routes>
  //     </Router>

  //   </div>
    
  // );
  // return (
  //   <div>
  //     app page
  //   </div>
  // )
  // if (true){
  //   return <Main/>
  // }
  
}
  
export default App;