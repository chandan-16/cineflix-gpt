const VideoTitle = ({title, overview}) => {


  return (
    <div className="w-screen aspect-video pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
       
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="">
            <button className=" text-white-600 bg-white p-3 text-black  w-014 text-xl rounded-lg px-10 hover:bg-opacity-80"> <i className="px-1 bi bi-play-fill"></i>Play</button>
            <button className="bg-gray-700 mx-2 text-white p-3  w-014 text-xl bg-opacity-50 rounded-lg px-10 hover:bg-opacity-80"><i className="px-1 bi bi-info-circle"></i> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle