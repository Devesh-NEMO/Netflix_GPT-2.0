import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../assets/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../assets/userSlice";
import { useEffect } from "react";
import { LOGO } from "../assets/constants";
import { toggleGptSearchView } from "../assets/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearchClick = () => {
    dispatch (toggleGptSearchView())
  }

  return (
    <header className="absolute w-full px-4 md:px-6 py-3 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      {/* Logo */}
      <img
        className="w-24 md:w-36 object-contain"
        src={LOGO}
        alt="logo"
      />

      {/* User Section */}
      {user && (
        <div className="flex items-center gap-2 md:gap-4">
          {/* GPT Search Button */}
          <button
            onClick={handleGptSearchClick}
            className="px-3 md:px-5 py-1 md:py-2 bg-blue-600 hover:bg-blue-800 text-white text-xs md:text-sm font-semibold rounded-md transition"
          >
            GPT Search
          </button>

          {/* Profile Image */}
          <img
            alt="usericon"
            src={user?.photoURL}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300"
          />

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="text-xs md:text-sm font-semibold text-white hover:text-red-500 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
