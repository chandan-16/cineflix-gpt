import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6 mt-2  text-white">
        <h1 className="text-3xl  py-4">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
            { movies && movies.map((movie) => 
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                ) }
            </div>
        </div>
    </div>
  )
}
// poster_path
export default MovieList