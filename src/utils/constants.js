export const logo_url =
  "https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg";

export const bg_img =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80";

// Stable placeholder avatar (pravatar hosts static PNGs)
export const profile_img_red = "https://i.pravatar.cc/300?img=12";
export const profile_img_green = "https://i.pravatar.cc/300?img=22";
export const profile_img_yellow = "https://i.pravatar.cc/300?img=32";

// Get your API key from https://www.themoviedb.org/settings/api
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
