# Netflix-GPT

A Netflix-style movie discovery app with AI-powered search. Browse trending titles, watch trailers, and get GPT-curated recommendations using natural language.

## Highlights
- AI search with natural-language prompts and curated movie suggestions
- TMDB-powered browsing: now playing, popular, top rated, upcoming
- Trailer playback and rich movie cards
- Firebase authentication flow with profile UI
- Language support for GPT search copy
- Resilient GPT flow with OpenAI and optional local Ollama fallback

## Tech Stack
- Frontend: React 19, Redux Toolkit, React Router, Tailwind CSS
- Backend (optional): Express proxy for OpenAI
- Auth: Firebase Authentication
- Data: The Movie Database (TMDB)
- AI: OpenAI Responses API or local Ollama

## Architecture
- `src/components`: UI and feature views
- `src/hooks`: TMDB data fetch hooks
- `src/utils`: Redux slices, config, API helpers
- `server/`: Optional Express proxy for OpenAI

## Getting Started
### 1) Install
```bash
npm install
```

### 2) Environment Variables
Create a `.env` file in the project root:
```bash
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_TMDB_TOKEN=your_tmdb_read_access_token
# Optional for the Express proxy
OPENAI_API_KEY=your_openai_key
PORT=5000
```

Notes:
- TMDB requires both the API key and the Read Access Token.
- The GPT UI prompts for an OpenAI key and stores it in browser session storage.
- If no OpenAI key is provided, the app tries a local Ollama instance at `http://localhost:11434`.

### 3) Run
```bash
npm start
```

Optional: run the proxy server in another terminal:
```bash
npm run server
```

## Usage
- Sign up or sign in.
- Use the “GPT Search” button to switch between browse and AI search.
- Enter a natural-language query to receive 5 curated movie titles.

## Scripts
- `npm start` runs the React app
- `npm run server` runs the Express proxy
- `npm test` runs tests
- `npm run build` builds production assets

## Project Structure
```
src/
  components/          # UI and feature components
  hooks/               # TMDB data fetch hooks
  utils/               # Redux slices, constants, helpers
server/
  index.js             # OpenAI proxy
```

## Security Notes
- Do not commit API keys.
- The OpenAI key is requested via prompt and stored only in session storage.
- Use the Express proxy if you want to avoid exposing keys in the client.

## Roadmap
- Persist GPT recommendations with user profiles
- Add real filtering for genre/year/rating
- Improve error handling and observability

## License
No license specified.
