import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    <div className="bg-black">
      <div className="-mt-52  pl-12 relative z-20">
      
        <MovieList title="Now playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.PopularMovies} />
        <MovieList title="English" movies={movies.nowPlayingMovies} />
        <MovieList title="Anime" movies={movies.nowPlayingMovies} /> 
      
      </div>
    </div>
  );
};

export default SecondaryContainer;
0