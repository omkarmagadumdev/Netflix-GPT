import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
  const mainMovie = movies[0] || {};
  const { original_title: originalTitle, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen">
      <VideoBackground movieId={id} />
      <VideoTitle title={originalTitle} overview={overview} />
    </div>
  );
};

export default MainContainer;
