import React from 'react';
import { v4 as uuidv4 } from 'uuid';

//React Router DOM
import { Link, withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Actions
import { addBlock } from '../../redux/actions/builderActions';

//Components
import SidenavButton from '../Partials/SidenavButton.jsx';

const SideNav = (props) => {
  const toggleSideNav = () => {
    const sideNav = document.querySelector('#sidenav');
    sideNav.classList.toggle('open');
    if (document.querySelector('#building-blocks-container')) {
      if (sideNav.classList.contains('open')) {
        document.querySelector('#building-blocks-container').style.paddingLeft =
          '14rem';
      } else {
        document.querySelector('#building-blocks-container').style.paddingLeft =
          '1rem';
      }
    }
  };

  const addTextBlock = (type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      value: '',
    };
    props.addBlock(newBlock);
  };

  const addListBlock = (type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      items: [{ value: '' }],
    };

    props.addBlock(newBlock);
  };

  const addImageBlock = () => {
    const id = uuidv4();
    const newBlock = {
      id,
      type: 'Image',
      path: '',
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
                <Link
                  to="/builder"
                  className="px-4 border-b-2 text-white border-transparent flex justify-center items-center bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    className="text-white"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M280.16 242.79l-26.11-26.12a32 32 0 0 0-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.11 32.11 0 0 0 9.21 23.94l39 39.43a.46.46 0 0 0 .07.07A32.29 32.29 0 0 0 87 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 0 0 .11-45.34z"
                      fill="currentColor"
                    />
                    <path
                      d="M490 190l-.31-.31l-34.27-33.92a21.46 21.46 0 0 0-15.28-6.26a21.89 21.89 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22c.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74a.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68a119.92 119.92 0 0 0-14.18 16.22a16 16 0 0 0 18.65 24.34a74.45 74.45 0 0 1 8.58-2.63a63.46 63.46 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09c11.7 9.41 17.33 22.09 18.26 41.09c.18 3.82-7.72 18.14-20 34.48a16 16 0 0 0 1.45 21l34.41 34.41a16 16 0 0 0 22 .62c9.73-8.69 24.55-21.79 29.73-25c7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0 1 11.29 2.38a1.24 1.24 0 0 1-.31.95l-1.82 1.73l-.3.28a21.52 21.52 0 0 0 .05 30.54l34.26 33.91a21.45 21.45 0 0 0 15.28 6.25a21.7 21.7 0 0 0 15.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 0 0 490 190z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/preview"
                  className="px-4 border-b-2 text-white border-transparent flex justify-center items-center bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    className="text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/raw"
                  className="px-4 border-b-2 text-white border-transparent flex justify-center items-center bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="1em"
                    height="1em"
                    className="text-white"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
                      />
                    </g>
                  </svg>
                </Link>
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
              <SidenavButton
                buttonName={'H1'}
                addBlock={() => addTextBlock('H1')}
              />
              <SidenavButton
                buttonName={'H2'}
                addBlock={() => addTextBlock('H2')}
              />
              <SidenavButton
                buttonName={'H3'}
                addBlock={() => addTextBlock('H3')}
              />
              <SidenavButton
                buttonName={'H4'}
                addBlock={() => addTextBlock('H4')}
              />
              <SidenavButton
                buttonName={'H5'}
                addBlock={() => addTextBlock('H5')}
              />
              <SidenavButton
                buttonName={'H6'}
                addBlock={() => addTextBlock('H6')}
              />
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
              <SidenavButton
                buttonName={'Ordered List'}
                addBlock={() => addListBlock('OL')}
              />
              <SidenavButton
                buttonName={'Unordered List'}
                addBlock={() => addListBlock('UOL')}
              />
            </div>
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Text'}
              addBlock={() => addTextBlock('Text')}
            />
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Blockquote'}
              addBlock={() => addTextBlock('BQ')}
            />
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Code'}
              addBlock={() => addTextBlock('Code')}
            />
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Horizontal Rule'}
              addBlock={() => addTextBlock('HR')}
            />
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Link'}
              addBlock={() => addTextBlock('Link')}
            />
          </li>
          <li className="sidenav-item">
            <SidenavButton
              buttonName={'Image'}
              addBlock={() => addImageBlock('Image')}
            />
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
