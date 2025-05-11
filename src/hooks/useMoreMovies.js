import { useDispatch } from "react-redux";
import { API_OPTIONS } from './../utils/constants';

import { useEffect } from "react";
import { addMoreMovies } from "../utils/moviesSlice";

const useMoreMovies = (movieId) => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/person/popular", API_OPTIONS);
        const json = await data.json();

        dispatch(addMoreMovies(json.results.reverse()));
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[])
}

export default useMoreMovies;