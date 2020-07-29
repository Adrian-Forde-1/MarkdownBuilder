import React from 'react';

const SideNav = () => {
  return (
    <div
      className="fixed bottom-0 w-56 bg-theme_black-100"
      style={{
        height: '94%',
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
  );
};

export default SideNav;
