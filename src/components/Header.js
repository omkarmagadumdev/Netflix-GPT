import { logo_url, profile_img } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-30 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center pointer-events-auto">
      <img
        className="w-44"
        src={logo_url}
        alt="Netflix Logo"
      />
      <div className="ml-auto flex items-center gap-3">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer">
          Sign In
        </button>
        <img
          src={profile_img}
          alt="User profile"
          className="w-10 h-10 rounded object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default Header;