/*import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.Movies);
  console.log("Movies slice:", movies);

  return (
    <div>
      {movies?.nowPlayingMovies ? (
        <MovieList title="Now playing" movies={movies.nowPlayingMovies} />
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default SecondaryContainer;*/
