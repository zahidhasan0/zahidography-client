import React from "react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="p-4 my-20  w-3/5 mx-auto text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Get In Touch
      </h5>

      <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
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

        <form class="flex items-center mb-10">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail"
              required=""
            />
          </div>
          <button
            type="submit"
            class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
