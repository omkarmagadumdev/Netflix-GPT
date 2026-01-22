import React from 'react'
import { logo_url } from 'utils/constants';

const Signin = () => {
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
          <h2 className="text-3xl font-semibold mb-3 text-white">Enter your info to sign in</h2>
          <p className="text-gray-400 text-lg mb-8">Or get started with a new account.</p>

          <form className="flex flex-col gap-4 mb-8">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-gray-700 transition"
            />
            <input
              type="email"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-gray-700 transition"
            />
            <button type="button" className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded transition">
              Continue
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
        </div>
      </div>
    </div>
  );
};

export default Signin