import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//React Router DOM
import { withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Actions
import { addBlock } from '../../redux/actions/builderActions';

const SideNav = (props) => {
  const toggleSideNav = () => {
    const sideNav = document.querySelector('#sidenav');
    sideNav.classList.toggle('open');
  };

  const addBuildingBlock = (type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      value: '',
    };
    props.addBlock(newBlock);
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
              <button
                onClick={() => {
                  addBuildingBlock('H1');
                }}
              >
                H1
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('H2');
                }}
              >
                H2
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('H3');
                }}
              >
                H3
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('H4');
                }}
              >
                H4
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('H5');
                }}
              >
                H5
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('H6');
                }}
              >
                H6
              </button>
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
              <button
                onClick={() => {
                  addBuildingBlock('OL');
                }}
              >
                Ordered List
              </button>
              <button
                onClick={() => {
                  addBuildingBlock('UOL');
                }}
              >
                Unordered List
              </button>
            </div>
          </li>
          <li className="sidenav-item">
            <a
              href="#text"
              onClick={() => {
                addBuildingBlock('Text');
              }}
            >
              Text
            </a>
          </li>
          <li className="sidenav-item">
            <a
              href="#blockquote"
              onClick={() => {
                addBuildingBlock('BQ');
              }}
            >
              Blockquote
            </a>
          </li>
          <li className="sidenav-item">
            <a
              href="#code"
              onClick={() => {
                addBuildingBlock('Code');
              }}
            >
              Code
            </a>
          </li>
          <li className="sidenav-item">
            <a
              href="#horizontalrule"
              onClick={() => {
                addBuildingBlock('HR');
              }}
            >
              Horizontal Rule
            </a>
          </li>
          <li className="sidenav-item">
            <a
              href="#link"
              onClick={() => {
                addBuildingBlock('Link');
              }}
            >
              Link
            </a>
          </li>
          <li className="sidenav-item">
            <a
              href="#image"
              onClick={() => {
                addBuildingBlock('Img');
              }}
            >
              Image
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addBlock,
};

export default connect(null, mapDispatchToProps)(withRouter(SideNav));
