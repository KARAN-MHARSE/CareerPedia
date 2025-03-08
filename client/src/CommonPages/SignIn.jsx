import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full  overflow-hidden">
        {/* Left Section */}
        <section className="hidden lg:flex lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/7b/b8/a1/7bb8a1c2902ef64ebd058249a369de5e.jpg"
            alt="A robotic hand reaching for an object in the water with blue dots and lines on it"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Right Section */}
        <section className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8">Sign in to Your Account</h1>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <button
              className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 text-center">
            <p className="text-gray-600">or sign in with</p>
          </div>

          {/* Google Sign In Button */}
          <button
            className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 w-full max-w-md"
            aria-label="Sign in with Google"
          >
            <FcGoogle />
            <p>Sign in with Google</p>
          </button>

          <p className="mt-6 text-sm font-semibold text-gray-600">
            Don't have an account?{" "}
            <span
              onClick={() => {
                navigate("/sign-up");
              }}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
