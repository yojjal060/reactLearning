// Navbar.jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeContext from './DarkModeContext';
import Switch from './switch';

export default function Navbar() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`border-gray-200 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} h-screen`}>
    <nav className={`border-gray-200 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} border border-x-gray-500`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className={`self-center whitespace-nowrap h-8 font-oswald font-extrabold text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
            YOOjj
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${isDarkMode ? 'text-white' : 'text-gray-500'} rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 ${isDarkMode ? 'focus:ring-gray-600' : 'focus:ring-gray-200'}`}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border gap-5 border-gray-100 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `font-oswald block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 ${isDarkMode ? 'text-white md:text-blue-500' : 'text-blue-700'}`
                    : `font-oswald block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${isDarkMode ? 'text-gray-400 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-black'}`
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `font-oswald block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 ${isDarkMode ? 'text-white md:text-blue-500' : 'text-blue-700'}`
                    : `font-oswald block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${isDarkMode ? 'text-gray-400 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-black'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? `font-oswald block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 ${isDarkMode ? 'text-white md:text-blue-500' : 'text-blue-700'}`
                    : `font-oswald block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${isDarkMode ? 'text-gray-400 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-black'}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? `font-oswald block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 ${isDarkMode ? 'text-white md:text-blue-500' : 'text-blue-700'}`
                    : `font-oswald block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${isDarkMode ? 'text-gray-400 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-black'}`
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `font-oswald block py-2 px-3 rounded md:bg-transparent md:text-blue-700 md:p-0 ${isDarkMode ? 'text-white md:text-blue-500' : 'text-blue-700'}`
                    : `font-oswald block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ${isDarkMode ? 'text-gray-400 md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' : 'text-black'}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Switch />
            </li>
          </ul>
          
        </div>
        
      </div>
    </nav>
    <h1 className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} flex h-5 p-36 justify-center text-2xl`}>{isDarkMode ? 'Black lives Matter' : 'Yagami Light'}</h1>
   </div> 
  );
}
