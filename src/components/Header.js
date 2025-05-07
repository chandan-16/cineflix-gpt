import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {

    signOut(auth).then(() => {
        navigate("/login");
      }).catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}))
            navigate("/browse")
        } else {
          dispatch(removeUser())
          navigate("/login")
        }
      });

      // UnSubscribe when component unmounts 

      return () => unsubscribe();
},[])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-9 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-46 h-20" src={LOGO} alt="CineFlix Logo" />
        { 
          user && <div className="flex p-2">
            { showGptSearch && (
              <select onChange={handleLanguageChange} className="p-2 m-2 bg-gray-900 text-white rounded-lg">
              {
                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }
            </select>) }

            <button className="py-2 px-4 mx-5 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
            <img className="h-10 mt-3 " src={USER_AVATAR} alt="user-icon" />
            <button onClick={handleSignOut} className=" font-bold text-white">Sign Out</button>
          </div> 
        }

    </div>
  )
}

export default Header