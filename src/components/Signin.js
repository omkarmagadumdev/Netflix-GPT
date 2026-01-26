import React, { useRef, useState } from 'react'
import { logo_url } from 'utils/constants';
import { checkValidData } from 'utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';



const Signin = () => {
  const [isSignInForm,setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = ()=>{
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)
    if(message) return
    
    if(isSignInForm){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredetial)=>{
          const user = userCredetial.user
          updateProfile(user, {
            displayName: name.current?.value || "",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === 'auth/email-already-in-use') {
            setErrorMessage("This email is already registered. Please sign in instead.");
          } else {
            setErrorMessage(`${errorCode}: ${errorMessage}`);
          }
        })

    }
    else{
       
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(() => {
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`${errorCode}: ${errorMessage}`)
          });
    }
  }

  const toggleSigninForm = ()=>{
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black flex flex-col items-center justify-start pt-16 px-4">
      <div className="w-full max-w-md">
        <div className="mb-24">
           <div className="absolute inset-x-0 top-0 z-30 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center pointer-events-auto">
                <img 
                  className="w-44 p-5 " 
                  src={logo_url} 
                  alt="Netflix Logo" 
                />
                </div>
               
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-3 text-white">Enter your info to <span>{!isSignInForm? "Signin" : "Signup"}</span></h2>
          <p className="text-gray-400 text-lg mb-8">Or get started with a new account.</p>

          <form className="flex flex-col gap-4 mb-8" onSubmit={(e)=>e.preventDefault()}>
            {isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-gray-700 transition"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email or mobile number"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-gray-700 transition"
            />
            <input
              ref={password}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-gray-700 transition"
            />
            <p className='text-red-600'>{errorMessage}</p>
            <button type="button" onClick={handleButtonClick} className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded transition">
              { !isSignInForm? "Continue" : "Sing up"}
            </button>
          </form>

          <div className="mb-10">
            <button type="button" className="text-white text-lg font-medium hover:opacity-70 transition">
              Get Help <span>▼</span>
            </button>
          </div>

          <div className="text-gray-600 text-sm leading-relaxed">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-500 cursor-pointer hover:underline">Learn more</span>
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-4">{isSignInForm? "Alreay a User?":"New to Netflix?"}
            
            <button onClick={toggleSigninForm} className="text-white font-semibold hover:underline ml-1">
              {!isSignInForm? "Sign up":"Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin