import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

import "../components/gptSearchBar.css";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="gptBackground pt-[45%] md:-pt[20%] md:flex-row md:justify-between md:bg-gray-500">
      <div className="pt-[30%] flex justify-center rounded-lg">
          <form className="w-full   bg-black ">
              <input type="text" placeholder={lang[langKey].gptSearchPlaceholder} className="p-3 m-1 col-span-9 bg-white rounded-lg" />
              <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2">{lang[langKey].search}</button>
          </form>
      </div>
    </div>
  )
}

export default GptSearchBar