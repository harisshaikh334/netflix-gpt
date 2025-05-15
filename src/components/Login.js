import React, { useState } from 'react';
import Header  from './Header';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleSignInForm = () => {
    setIsLogin(!isLogin);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="netflix" />
      </div>
      <form className="p-12 bg-black w-3/12 my-36 absolute mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isLogin ? "Sign In" : "Sign Up"}</h1>
        { isLogin === false &&
          <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700" />
        }
        <input type="text" placeholder="Email or Phone Number" className="p-4 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isLogin ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isLogin ? "New to Netflix? Signup Now" : "Already a user? Sign In"}</p>
      </form>
    </div>
  )
}

//logo https://tse4.mm.bing.net/th/id/OIP.YR5iWREy5jyMKZ24aMfxkwHaEK?rs=1&pid=ImgDetMain
// bg imgage 
export default Login