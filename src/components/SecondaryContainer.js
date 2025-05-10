import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
 
  return (
    <div className=" bg-black  ">
      <div className="mt-0 md:-mt-52 md:pl-12 pl-4 relative z-20 px-10">
        <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.addUpComingMovies} />
        <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
        <MovieList title={"More"} movies={movies.addMoreMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;