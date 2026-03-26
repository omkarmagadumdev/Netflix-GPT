# Netflix-GPT

Netflix-inspired movie discovery app with GPT-assisted recommendations.

## Live Demo
- https://netflix-gpt-ten-brown.vercel.app/

## Overview
Netflix-GPT combines a modern streaming-style UI with movie data from TMDB and an AI search experience. Users can browse trending sections, watch trailers, authenticate with Firebase, and ask GPT for curated movie suggestions using natural language.

## Features
- Netflix-style landing and authentication flow
- Browse categories: Now Playing, Popular, Top Rated, Upcoming
- Trailer-focused hero experience for featured content
- GPT Search mode for natural-language movie discovery
- Multi-language support for GPT search UI text
- Error handling using React error boundaries
- Optional backend proxy for safer AI API usage

## Tech Stack
- Frontend: React, Redux Toolkit, React Router, Tailwind CSS
- Authentication: Firebase Authentication
- Movie Data: TMDB API
- AI: OpenAI (with optional local fallback, based on project setup)
- Optional Backend: Node.js + Express (`server/index.js`)

## Project Structure
```
src/
  components/     # UI screens and reusable components
  hooks/          # Custom hooks for TMDB fetches
  utils/          # Store, slices, constants, API utilities
server/
  index.js        # Optional Express proxy for AI requests
public/           # Static assets and HTML template
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Create a `.env` file in the root directory:

```bash
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_TOKEN=your_tmdb_read_access_token

# Optional (for Express proxy)
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

### 3. Run the app
```bash
npm start
```

### 4. (Optional) Run backend proxy
```bash
npm run server
```

## Available Scripts
- `npm start` — runs the React development server
- `npm run build` — creates a production build
- `npm test` — runs test suite
- `npm run server` — starts the optional Express server

## How to Use
1. Open the app and sign up/sign in.
2. Explore movie rows on the browse page.
3. Switch to GPT Search.
4. Enter prompts like:
   - “Feel-good sci-fi movies from the last 10 years”
   - “Dark thriller movies like Se7en”

## Deployment
This project is deployed on Vercel:
- https://netflix-gpt-ten-brown.vercel.app/

If deploying your own version, add all required environment variables in your hosting platform settings.

## Security Notes
- Never commit API keys to source control.
- Prefer server-side proxying for sensitive AI keys in production.
- Rotate keys immediately if exposed.

## Future Improvements
- Save GPT recommendation history per user
- Add stronger loading/error states in all data flows
- Improve prompt-to-result quality with richer context

## License
No license specified.
