import { useSelector } from "react-redux"
// import useNowPlayingMovies from './../hooks/useNowPlayingMovies';
import VideoTitle from './VideoTitle';
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    // const movies = useSelector(store => store.movies?.useNowPlayingMovies)
    const movies = useSelector(store => store.movies.addNowPlayingMovies);
    

    if (!movies) return;

    const mainMovie = movies[0]

    const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[35%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer