import React from 'react';

const AddSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      className={`${props.classes}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <g fill="currentColor">
        <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z" />
      </g>
    </svg>
  );
};

export default AddSVG;
