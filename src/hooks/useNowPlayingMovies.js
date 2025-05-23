import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = (movieId) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);
      // const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
  
      const json = await data.json();
     
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;