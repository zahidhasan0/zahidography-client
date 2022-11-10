import React from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="p-4 my-20  w-4/5 mx-auto text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Get In Touch
      </h5>

      <div className="justify-center items-center space-y-4  sm:space-y-0 sm:space-x-4">
        <Link className="text-6xl text-blue-700 bg-gray-200 p-8 hover:bg-gray-300 mr-8">
          <FaFacebookMessenger />
        </Link>
        <Link
          href="https://facebook.com"
          className="text-6xl text-green-600 bg-gray-200 p-8 hover:bg-gray-300 mr-8"
        >
          <FaWhatsapp />
        </Link>
      </div>
      <div>
        <h3 className="text-2xl font-semibold my-8">Get more updates..</h3>

        <form className="flex items-center mb-10">
          <label for="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail"
              required=""
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
