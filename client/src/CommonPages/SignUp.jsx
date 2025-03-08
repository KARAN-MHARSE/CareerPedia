import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-gray-100 max-h-screen min-h-screen">
      <div className="flex flex-col lg:flex-row w-full  overflow-hidden">
        {/* Left Section */}
        <section className="hidden lg:flex lg:w-1/2">
          <img
            src="https://i.pinimg.com/736x/7b/b8/a1/7bb8a1c2902ef64ebd058249a369de5e.jpg"
            alt="A robotic hand reaching for an object in the water with blue dots and lines on it"
            className="w-full max-h-screen min-h-screen object-cover"
          />
        </section>

        {/* Right Section */}
        <section className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8">Sign Up for an Account</h1>
          <form className="w-full  max-w-md">
            <div className="mb-4 flex gap-2">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="FirstName"
                aria-label="FirstName"
              />
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="LastName"
                aria-label="LastName"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email Id"
                aria-label="Email"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                placeholder="Mobile Number"
                aria-label="Mobile Number"
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
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Confirm Password"
                aria-label="Password"
              />
            </div>
            <button
              className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="my-6 text-center">
            <p className="text-gray-600">or sign up with</p>
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
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/sign-in");
              }}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
