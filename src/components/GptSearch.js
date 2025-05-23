import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="fixed -z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch