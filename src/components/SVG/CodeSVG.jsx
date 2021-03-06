import React from 'react';

const CodeSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      className={`${props.classes}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path
        d="M31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7z"
        fill="currentColor"
      />
      <path
        d="M1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7z"
        fill="currentColor"
      />
      <path
        d="M12.419 25.484L17.639 6l1.932.518L14.35 26z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CodeSVG;
