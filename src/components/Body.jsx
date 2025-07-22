import {createBrowserRouter} from "react-router-dom"
import Login from "./Login"
import Browse from './browse'
import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../assets/fireBase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../assets/userSlice"


const Body = () => {
const dispatch = useDispatch();

const appRouter = createBrowserRouter ([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    useEffect (() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
       if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid ,email ,displayName } = user;
        dispatch(addUser({uid : uid, email : email, displayName: displayName}));
        }
       else {
        dispatch(removeUser());
        }
      });

  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
