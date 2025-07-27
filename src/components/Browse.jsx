import { useEffect } from "react";
import { API_OPTIONS } from "../assets/constants"
import Header from "./header"
import { addNowplayingMovies } from "../assets/moviesSlice";
import { useDispatch } from "react-redux";

const Browse = () => {

  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowplayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <div>
            <Header />

    </div>
  )
}

export default Browse
