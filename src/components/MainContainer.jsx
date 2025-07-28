import { useSelector } from "react-redux"


const MainContainer = () => {
  const movies = useSelector(Store=>Store.movies?.nowPlayingMovies)
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer