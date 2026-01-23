import React from "react";
import { Link } from "react-router-dom";
import { logo_url } from "../utils/constants";

const Signup = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="flex items-center justify-between px-6 py-4">
        <img
          src={logo_url}
          alt="Netflix logo"
          className="h-10 sm:h-12"
        />
        <Link
          to="/signin"
          className="text-sm font-semibold text-gray-900 hover:underline"
        >
          Sign In
        </Link>
      </header>

      <main className="flex flex-1 justify-center px-4 pb-16">
        <div className="w-full max-w-xl text-left mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            <span className="block">Welcome back! Joining</span>
            <span className="block">Netflix is easy.</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-8">
            Sign in and you will be watching in no time.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black placeholder:text-gray-500 text-base"
            />

            <p className="text-gray-500 text-sm -mt-1">
              Message and data rates may apply
            </p>

            <button
              type="button"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition-colors duration-150"
            >
              Send sign-in code
            </button>

            <div className="text-center text-gray-500 text-sm font-medium">OR</div>

            <button
              type="button"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 rounded transition-colors duration-150"
            >
              Use password
            </button>

            <label className="flex items-center gap-2 text-gray-800 text-sm">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-black border-gray-400 cursor-pointer"
              />
              Remember me
            </label>

            <p className="text-sm text-gray-800">
              New to Netflix?
              <Link to="/" className="font-semibold hover:underline ml-1">
                Sign up now.
              </Link>
            </p>

            <p className="text-xs text-gray-500 leading-relaxed mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
              <span className="text-blue-600 hover:underline ml-1 cursor-pointer">Learn more</span>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;