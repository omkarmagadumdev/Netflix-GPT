export const logo_url = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"

export const bg_img = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"

// Stable placeholder avatar (pravatar hosts static PNGs)
export const profile_img_red = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const profile_img_green = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
export const profile_img_yellow = "https://i.pinimg.com/736x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"

// Get your API key from https://www.themoviedb.org/settings/api
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const  API_options =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
