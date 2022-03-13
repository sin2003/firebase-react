import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyBcbRgEfPxkppilSF7hRRlV3OE2XiU1Onw",
  
    authDomain: "fir-react-project-f5386.firebaseapp.com",
  
    projectId: "fir-react-project-f5386",

    databaseURL: "https://fir-react-project-f5386-default-rtdb.firebaseio.com/",
  
    storageBucket: "fir-react-project-f5386.appspot.com",
  
    messagingSenderId: "145453388569",
  
    appId: "1:145453388569:web:3c69ae3f653d8692ea2b88"
  
  };
const app = initializeApp(firebaseConfig); 

export default app;