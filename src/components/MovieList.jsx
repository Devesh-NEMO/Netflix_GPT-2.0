import MovieCard from "./MovieCard";

const MovieList = ({title , movies}) => {
  console.log(movies);
  return (
    <div><div><h1>loading</h1></div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  )
}

export default MovieList;