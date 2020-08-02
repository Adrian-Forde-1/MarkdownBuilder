import React, { useEffect } from 'react';

//Redux
import { connect } from 'react-redux';

const RawFileSVG = (props) => {
  useEffect(() => {
    if (props.currentView === 'raw')
      document.querySelector('#raw-file-svg').classList.add('color-white');
    else
      document.querySelector('#raw-file-svg').classList.remove('color-white');
  }, [props.currentView]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="raw-file-svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      className={`${props.classes} ${props.activeColor}`}
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
  );
};

const mapStateToProps = (state) => ({
  currentView: state.views.currentView,
});

export default connect(mapStateToProps)(RawFileSVG);
