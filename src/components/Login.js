import { useState } from 'react';

import Header from "./Header"
import "./Login.css";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }


  return (
    <div className="loginBackground ">
        <Header />
        <form className="p-12 bg-black bg-black-500 absolute w-2/12 my-36 mx-auto right-0 left-0 text-white block center bg-opacity-90">
          <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
          { !isSignInForm && (<input type="text" placeholder="Full Name"  className="p-4 my-2 block w-full bg-gray-900"/>)}
            <input type="email" placeholder="Email Address"  className="p-4 my-2 block w-full bg-gray-900"/>
            <input type="password" placeholder="Password"  className="p-4 my-2 block w-full bg-gray-900"/>
            <button className="p-3 my-5 bg-red-700 w-full text-lg rounded-lg cursor-pointer">{ isSignInForm ? "Sign In" : "Sign Up" }</button>

            <p className="py-1 cursor-pointer" onClick={toggleSignInForm}> { isSignInForm ? "New to Cineflex-gpt? Sign In" : "Already register. Sign Up Now." }</p>
        </form>
    </div>
  )
}

export default Login

