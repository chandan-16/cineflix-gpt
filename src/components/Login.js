import { useState, useRef } from 'react';
import { checkValidSignInData,  } from "../utils/validate.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from '../utils/firebase.js';
import { USER_AVATAR } from '../utils/constants.js';


import Header from "./Header"
import "./Login.css";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);



  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
 

    const msg = checkValidSignInData(email.current.value, password.current.value);
      setErrorMessage(msg);


    if(msg) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR 
        }).then(() => {
        
        }).catch((error) => {
          setErrorMessage(error.message)
        });
        
    
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
      
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });

    }

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div className="loginBackground ">
        <Header />
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 p-12 bg-black bg-black-500 absolute w-2/13 my-36 mx-auto right-0 left-0 text-white block center bg-opacity-90">
          <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
          { !isSignInForm && (<input ref={name}  type="text" placeholder="Full Name"  className="p-4 my-2 block w-full bg-gray-900"/>)}

            <input 
            ref={email}
            type="text" 
            placeholder="Email Address"  
            className="p-4 my-2 block w-full bg-gray-900"/>

            <input 
            ref={password}
            type="password"
            placeholder="Password"  
            className="p-4 my-2 block w-full bg-gray-900"/>

            <p className='text-red-600 py-2'>{errorMessage}</p>

            <button onClick={handleButtonClick} className="p-3 my-5 bg-red-700 w-full text-lg rounded-lg cursor-pointer">{ isSignInForm ? "Sign In" : "Sign Up" }</button>

            <p className="py-1 cursor-pointer" onClick={toggleSignInForm}> { isSignInForm ? "New to Cineflex-gpt? Sign Up Now" : "Already register. Sign In Now." }</p>
        </form>
    </div>
  )
}

export default Login

