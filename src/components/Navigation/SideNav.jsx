import React from 'react';

//React Router DOM
import { withRouter } from 'react-router-dom';

const SideNav = (props) => {
  const toggleSideNav = () => {
    const sideNav = document.querySelector('#sidenav');
    sideNav.classList.toggle('open');
  };
  return (
    <div>
      <div
        className="w-ful bg-theme_black-100 px-6 py-0 flex items-center fixed inset-x-0 top-0"
        style={{ transform: 'translateY(-100px)', height: '6vh' }}
        style={{ zIndex: '100' }}
      >
        <button
          className="cursor-pointer block border-none"
          onClick={toggleSideNav}
        >
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
        </button>

        <div
          className="flex item-center w-auto ml-auto "
          style={{
            height: '6vh',
          }}
        >
          <nav className="flex items-center">
            <ul className="flex items-center justify-between text-base pt-0">
              <li>
                <a
                  href="#"
                  className="px-4 block border-b-2 text-white border-transparent"
                  style={{ fontWeight: '300' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="px-4 block border-b-2 text-white border-transparent"
                  style={{ fontWeight: '300' }}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="fixed bottom-0 w-56 bg-theme_black-100"
        id="sidenav"
        style={{
          height: '94vh',
          color: 'white',
          zIndex: '100',
        }}
      >
        <ul className="w-full">
          <li className="sidenav-item" id="headings">
            <a href="#headings">
              Headings
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-plus text-white ml-auto"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                />
              </svg>
            </a>
            <div
              className="sidenav-item__dropdown smenu"
              style={{ fontWeight: '100' }}
            >
              <button>H1</button>
              <button>H2</button>
              <button>H3</button>
              <button>H4</button>
              <button>H5</button>
              <button>H6</button>
            </div>
          </li>
          <li className="sidenav-item" id="lists">
            <a href="#lists">
              Lists
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-plus text-white ml-auto"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                />
              </svg>
            </a>
            <div
              className="sidenav-item__dropdown smenu"
              style={{ fontWeight: '100' }}
            >
              <button>Ordered List</button>
              <button>Unordered List</button>
            </div>
          </li>
          <li className="sidenav-item">
            <a href="#blockquote">Blockquote</a>
          </li>
          <li className="sidenav-item">
            <a href="#code">Code</a>
          </li>
          <li className="sidenav-item">
            <a href="#horizontalrule">Horizontal Rule</a>
          </li>
          <li className="sidenav-item">
            <a href="#link">Link</a>
          </li>
          <li className="sidenav-item">
            <a href="#image">Image</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(SideNav);
