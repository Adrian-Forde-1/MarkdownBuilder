import React from 'react';

//Styling
import '../../styles/navbar.css';

//React Router DOM
import { Link } from 'react-router-dom';

const Navbar = () => {
  // window.addEventListener('scroll', (e) => {
  //   document
  //     .querySelector('#navbar')
  //     .classList.toggle('sticky', window.scrollY > 0);
  // });
  return (
    <div
      className="navbar w-full ease-out bg-theme_red-100 lg:px-40 px-12 lg:py-0 py-2 flex flex-wrap items-center fixed inset-x-0 top-0"
      style={{ transform: 'translateY(-100px)' }}
      id="navbar"
      style={{ zIndex: '100' }}
    >
      <div className="flex-1 flex justify-between items-center text-white">
        <Link to="/">Markdown Creator</Link>
      </div>

      <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-list text-white"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: '20px' }}
        >
          <path
            fillRule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </label>
      <input type="checkbox" className="hidden" id="menu-toggle" />

      <div className="hidden lg:flex lg:item-center lg:w-auto w-full" id="menu">
        <nav>
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
            <li>
              <a href="#" className="nav-item" style={{ fontWeight: '300' }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-item"
                style={{ fontWeight: '300' }}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
