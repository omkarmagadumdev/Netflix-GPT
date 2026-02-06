import Header from "./Header";
import { bg_img } from "utils/constants";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="w-full h-screen object-cover pointer-events-none"
          src={bg_img}
          alt="background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>
      </div>

      <Header />

      <Link
        to="/signin"
        className="absolute top-6 right-10 z-40 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer inline-block text-center"
      >
        Sign In
      </Link>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-6">
        <h1 className="text-6xl font-bold text-center mb-6">
          Unlimited movies, shows, and more
        </h1>
        <p className="text-2xl mb-6">Starts at ₹149. Cancel at any time.</p>
        <p className="text-xl mb-10">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex gap-3 w-full max-w-3xl">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            className="flex-1 px-5 py-5 bg-black bg-opacity-60 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
          <Link
            to="/signup"
            className="bg-red-600 text-white px-10 py-5 rounded text-xl font-semibold hover:bg-red-700 flex items-center gap-2"
          >
            Get Started <span>›</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
