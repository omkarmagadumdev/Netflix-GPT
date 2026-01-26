import { logo_url } from "../utils/constants";


const Header = () => {

  return (
    <div className="absolute inset-x-0 top-0 z-30 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center pointer-events-auto">
      <img
        className="w-44"
        src={logo_url}
        alt="Netflix Logo"
      />
      
    </div>
  );
};

export default Header;