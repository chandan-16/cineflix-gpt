import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
 
  return (
    <div className=" bg-black  ">
      <div className="-mt-100 relative z-20 px-10">
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.addUpComingMovies} />
        {/* <MovieList title={"Latest"} movies={movies.addLatestMovies} /> */}
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;