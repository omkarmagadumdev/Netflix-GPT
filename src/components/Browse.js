
import Header from './Header'
import {  profile_img_green, profile_img_red, profile_img_yellow} from '../utils/constants'
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import useNowPlayingMovies from 'customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  const user = useSelector((store) => store.user);
  useNowPlayingMovies()
  const handleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Header will handle navigation
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });

  }
  return (
    <div className="relative w-full h-screen overflow-y-auto bg-black">
      <Header />
      <div className="absolute top-6 right-10 z-40">
        <div className="relative group">
          <div className="w-10 h-10 rounded-md cursor-pointer overflow-hidden">
            <img src={profile_img_red} alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute top-14 right-0 w-64 bg-black bg-opacity-95 border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {/* Profile Options */}
            <div className="border-b border-gray-700 py-2">
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 rounded-md overflow-hidden bg-red-500">
                  <img src={profile_img_red} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-sm">{user?.displayName || "User"}</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 rounded-md overflow-hidden bg-blue-500">
                  <img src={profile_img_yellow} alt="Profile 1" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-sm">Family</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 cursor-pointer">
                <div className="w-8 h-8 rounded-md overflow-hidden bg-pink-500">
                  <img src={profile_img_green} alt="Profile 2" className="w-full h-full object-cover" />
                </div>
                <span className="text-white text-sm">Childrens</span>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="py-2">
              <div className="px-4 py-2 text-white text-sm hover:bg-gray-800 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Manage Profiles
              </div>
              <div className="px-4 py-2 text-white text-sm hover:bg-gray-800 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Transfer Profile
              </div>
              <div className="px-4 py-2 text-white text-sm hover:bg-gray-800 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account
              </div>
              <div className="px-4 py-2 text-white text-sm hover:bg-gray-800 cursor-pointer flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Help Centre
              </div>
            </div>
            
            {/* Sign Out */}
            <div className="border-t border-gray-700">
              <div onClick = {handleSignOut} className="px-4 py-3 text-white text-sm text-center hover:bg-gray-800 cursor-pointer">
                Sign out of Netflix
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse