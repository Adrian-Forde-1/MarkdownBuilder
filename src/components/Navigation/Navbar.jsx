import React from 'react';

//Styling
import '../../styles/navbar.css';

//React Router DOM
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 lg:px-40 px-16 lg:py-0 py-2 flex flex-wrap items-center ">
      <div className="flex-1 flex justify-between items-center text-pink-800 font-bold">
        <Link to="/">Markdown</Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-list text-pink-800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />

      <div className="hidden lg:flex lg:item-center lg:w-auto w-full" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <Link
                to="#"
                className="lg:p-2 py-2 px-0 block border-b-2 text-white border-transparent hover:border-pink-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="lg:p-2 py-2 px-0 block border-b-2 text-white border-transparent hover:border-pink-800"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
