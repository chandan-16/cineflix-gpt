import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

import "../components/gptSearchBar.css";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="gptBackground">
      <div className="pt-[10%] flex justify-center rounded-lg">
          <form className="w-1/2  bg-black grid grid-cols-12">
              <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-4 m-2 col-span-9 bg-white rounded-lg" />
              <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2">{lang[langKey].search}</button>
          </form>
      </div>
    </div>
  )
}

export default GptSearchBar