import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../assets/fireBase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../assets/userSlice";
import { useEffect } from "react";
import { LOGO } from "../assets/constants";

const header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(store => store.user);
const handleSignOut = () =>{
  signOut(auth).then(() => {})
  .catch((error) => {
    navigate("/error")
  });
}

  useEffect (() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
       if (user) {
        const {uid ,email ,displayName ,photoURL } = user;
        dispatch(addUser({
          uid : uid,
          email : email,
          displayName: displayName,
          photoURL: photoURL}));
          navigate("/browse")
        }
       else {
        dispatch(removeUser());
        navigate("/")
        }
      });

  }, []);

  return (
    <div className='absolute w-screen px-6 py-3 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-35' src={LOGO}
      alt = "logo"/>

      { user && (
        <div className="flex">
        <img alt="usericon" src={user?.photoURL} className="w-9 h-9" />
        <button onClick={handleSignOut} className="font-bold text-white cursor-pointer ">
          (Sign Out)
          </button>
      </div>)}
    </div>
  )
}

export default header
