import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-30 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center pointer-events-auto">
      <img 
        className="w-44" 
        src={logo_url} 
        alt="Netflix Logo" 
      />
      <Link to="/signin">
      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer">
        Sign In
      </button>
      </Link>
    </div>
  );
}

export default Header