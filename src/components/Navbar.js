import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar(props) {
  const [mode, setMode] = useState("light");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    setMode(mode === "dark" ? "light" : "dark");
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center cursor-default">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-cyan-500 dark:text-white">
              {props.title}
            </span>
          </div>
          <div className="flex order-2">
            <button
              onClick={handleModeSwitch}
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              {toggle === false ? (
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  id="theme-toggle-light-icon"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="items-center justify-between flex w-auto">
            <ul className="flex p-3  border-gray-100 rounded-lg  flex-row md:space-x-8 mt-0 text-sm font-medium border-0 bg-white dark:bg-gray-800  dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700  dark:hover:bg-transparent dark:border-gray-700 active:text-blue-700 focus:text-blue-700 dark:focus:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700  dark:hover:bg-transparent dark:border-gray-700 active:text-blue-700 focus:text-blue-700 dark:focus:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
