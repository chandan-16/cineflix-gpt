import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpComingMovies";
import useMoreMovies from "../hooks/useMoreMovies";


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useMoreMovies();

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