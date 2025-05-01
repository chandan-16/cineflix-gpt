import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

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


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-46 h-20" src={LOGO} alt="CineFlix Logo" />
        { 
        user && <div className="flex p-2">
          <img className="h-10 mt-3 " src={user?.photoURL} alt="user-icon" />
          <button onClick={handleSignOut} className=" font-bold text-white">Sign Out</button>
        </div> 
        }

    </div>
  )
}

export default Header