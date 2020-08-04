import React from 'react';

const AddRowSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      className={`${props.classes}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M43 30V18c0-2.2-1.8-4-4-4H9c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4zM9 18h30v12H9V18z"
      />
      <circle fill="#43A047" cx="38" cy="38" r="10" />
      <g fill="#fff">
        <path d="M32 36h12v4H32z" />
        <path d="M36 32h4v12h-4z" />
      </g>
    </svg>
  );
};

export default AddRowSVG;
