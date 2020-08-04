import React from 'react';

const ListBlockItem = (props) => {
  return (
    <li className="flex justify-center items-center w-full relative">
      <input
        type="text"
        className="flex flex-1 border border-theme_black-100 pl-2 pr-6 min-h-8 h-8"
        value={props.value}
        onChange={(e) => props.updateList(props.itemIndex, e.target.value)}
      />
      {props.listItemNum > 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          className="text-theme_red-100 text-base ml-2 cursor-pointer absolute"
          style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
          onClick={(e) => props.removeListItem(props.itemIndex, e.target.value)}
        >
          <path
            d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z"
            fill="currentColor"
          />
          <path
            d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32zM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416zM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14z"
            fill="currentColor"
          />
        </svg>
      )}
    </li>
  );
};

export default ListBlockItem;
