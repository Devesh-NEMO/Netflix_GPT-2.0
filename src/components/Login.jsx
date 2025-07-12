import { useState } from "react"
import Header from "./header"
const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState (true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (

    <div>
      <Header />
      <div className="absolute">  
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
         alt = "logo" />
      </div>
      <form className="absolute w-3/12 p-12 bg-black/75 text-white my-36 mx-auto right-0 left-0 rounded-md shadow-lg">

        <h1 className="font-bold text-3xl pb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 my-2 bg-gray-700 rounded-md"/>)}

        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 my-2 bg-gray-700 rounded-md"/>

          
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 bg-gray-700 rounded-md"/>


        <button
          type="submit"
          className="w-full p-3 mt-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-md">         
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm text-gray-300 mt-4">
          {isSignInForm ? "New to Netflix? " : "Already a user? "}
            <span onClick={toggleSignInForm} className="text-white underline hover:text-red-500 cursor-pointer">
              {isSignInForm ? "Sign up here" : "Sign in now"}
            </span>
        </p>


      </form>
    </div>
  )
}

export default Login
