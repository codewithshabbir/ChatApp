import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import { NavLink } from "react-router";

const Verify = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 shadow-lg rounded-2xl text-center flex flex-col items-center gap-4">
        <MdOutlineVerified className="text-8xl text-blue-500"/>
        <h1 className="text-3xl font-bold text-blue-600">Email Verified!</h1>
        <p className="text-gray-600"> 
          Thank you for verifying your email. You can now sign in to your account.
        </p>
        <NavLink to="/signin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition cursor-pointer">
            Go to Sign In
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Verify;