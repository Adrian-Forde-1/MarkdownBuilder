import React from 'react';

const ImageSVG = (props) => {
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
        d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5l1.5 2l3-4l5.5 7h-7z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ImageSVG;
