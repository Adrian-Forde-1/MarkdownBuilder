import React from 'react';

const RemoveRowSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      className={`${props.classes}`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.41 13L12 15.59L14.59 13L16 14.41L13.41 17L16 19.59L14.59 21L12 18.41L9.41 21L8 19.59L10.59 17L8 14.41L9.41 13M22 9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3M4 9h4V6H4v3m6 0h4V6h-4v3m6 0h4V6h-4v3z"
        fill="currentColor"
      />
    </svg>
  );
};

export default RemoveRowSVG;
