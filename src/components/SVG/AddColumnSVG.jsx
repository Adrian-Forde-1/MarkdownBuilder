import React from 'react';

const AddColumnSVG = (props) => {
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
        d="M30 5H18c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V9c0-2.2-1.8-4-4-4zM18 39V9h12v30H18z"
      />
      <circle fill="#43A047" cx="38" cy="38" r="10" />
      <g fill="#fff">
        <path d="M36 32h4v12h-4z" />
        <path d="M32 36h12v4H32z" />
      </g>
    </svg>
  );
};

export default AddColumnSVG;
