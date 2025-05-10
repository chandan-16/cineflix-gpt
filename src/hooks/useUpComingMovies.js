import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = (movieId) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
      // const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
  
      const json = await data.json();
     
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useUpcomingMovies;