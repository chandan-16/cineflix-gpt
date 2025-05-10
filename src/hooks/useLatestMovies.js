import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addLatestMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useLatestMovies = (movieId) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/latest", API_OPTIONS);
    
      // const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
     
      dispatch(addLatestMovies(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useLatestMovies;