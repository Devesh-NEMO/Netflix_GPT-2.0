import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    <div>
      
        <MovieList title="Now playing" movies={movies.nowPlayingMovies} />
      
      
    </div>
  );
};

export default SecondaryContainer;
