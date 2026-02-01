import { logo_url } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-30 w-full px-8 py-5 flex justify-between items-center pointer-events-auto">
      <img className="w-44" src={logo_url} alt="Netflix Logo" />

      {/* Language Dropdown */}
      <div className="flex items-center gap-1.5 bg-black/60 border border-white/20 rounded-sm px-2.5 py-1.5 hover:border-white/40 transition-all duration-200 cursor-pointer">
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 01-1.198-.49 7.01 7.01 0 012.276-1.52 6.7 6.7 0 00-.597.932 8.854 8.854 0 00-.48 1.079zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 011.565-.667c-.054.29-.08.569-.08.838 0 .738.211 1.468.608 2.091l.355.618c-.321.227-.779.418-1.343.568a6.844 6.844 0 01-1.54-.44zm1.538 1.5l-.747.08c.074.415.233.822.465 1.204.174-.195.272-.44.272-.701 0-.215-.057-.424-.123-.583H5.047zm-.537-2a7.5 7.5 0 00-.063-1h.843c-.116.32-.18.658-.18 1s.064.68.18 1h-.78zm2.59 0c0-.736.18-1.452.524-2.084l-.49-.848A2.5 2.5 0 006 6.5c0 .414.336.75.75.75h.35zM14.5 8a6.5 6.5 0 00-6.5-6.5V8H14.5z"/>
        </svg>
        <select
          id="lang-select"
          className="bg-transparent text-white text-sm font-medium focus:outline-none appearance-none pr-3 cursor-pointer"
          defaultValue="en"
        >
          <option className="bg-black text-white" value="en">
            English
          </option>
          <option className="bg-black text-white" value="hindi">
            हिन्दी
          </option>
          <option className="bg-black text-white" value="spanish">
            Español
          </option>
        </select>
        <svg
          className="w-3 h-3 text-white -ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
