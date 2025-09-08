import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Loading movies...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
