import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = (movieId) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
      // const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS)
  
      const json = await data.json();
      console.log("data", json)
     
      dispatch(addTopRatedMovies(json.results))
    }
  
    useEffect(() => {
      getNowPlayingMovies();
    },[])
}

export default useTopRatedMovies;