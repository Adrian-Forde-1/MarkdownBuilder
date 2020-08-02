import React, { useEffect } from 'react';

//Redux
import { connect } from 'react-redux';

const HammerSVG = (props) => {
  useEffect(() => {
    if (props.currentView === 'builder')
      document.querySelector('#hammer-svg').classList.add('color-white');
    else document.querySelector('#hammer-svg').classList.remove('color-white');
  }, [props.currentView]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="hammer-svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      className={`${props.classes} ${props.activeColor}`}
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
  );
};

const mapStateToProps = (state) => ({
  currentView: state.views.currentView,
});

export default connect(mapStateToProps)(HammerSVG);
