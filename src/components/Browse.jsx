import useNowPlayMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

        {/* -- Main Container -- */}
          {/* -- Video_Background -- */}
          {/* -- Video_Title -- */}
        {/* -- Secondary Container -- */}
          {/* -- Movies_List * n -- */}
            {/* -- Cards * n -- */}

    </div>
  )
}

export default Browse
