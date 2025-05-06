import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  // const  dispatch = useDispatch()


  // const getMovieVideos = async () => {

  //   const data = await fetch('https://api.themoviedb.org/3/movie/1233069/videos?language=en-US', API_OPTIONS)
  //   const json = await data.json();
  //   console.log(json)

  //   const filterData = json.results.filter(video => video.type === "Trailer")
  //   const trailer = filterData.length ? filterData[0] : json.results[0]
  //   console.log(trailer)
  //   dispatch(addTrailerVideo(trailer))

  // }

  // useEffect(() => {
  //   getMovieVideos();
  // },[])



  return (
    <div className='w-screen z-0'>
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground

// {
//   "id": 1233069,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer [Subtitled]",
//       "key": "tlLsFEDHtWs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-04-15T11:00:00.000Z",
//       "id": "67fe95ca437f0b80eead3fd0"
//     }
//   ]
// }