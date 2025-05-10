import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useLatestMovies from "../hooks/useLatestMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpComingMovies";


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useLatestMovies();
  useUpcomingMovies();

  return (
    <>
    <Header />
    {
      showGptSearch ? <GptSearch/> : 
      <> 
        <MainContainer /> 
        <SecondaryContainer /> 
      </>
    }
    </>
  )
}

export default Browse