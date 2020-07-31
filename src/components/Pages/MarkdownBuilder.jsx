import React from 'react';

//React Router DOM
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Actions
import { removeBlock, updateBlock } from '../../redux/actions/builderActions';

//Components
import SideNav from '../Navigation/SideNav.jsx';

const MarkdownBuilder = (props) => {
  const renderTextBlock = (block) => {
    return (
      <div className="w-full flex justify-center items-start mb-4 pl-4">
        <div className=" px-2 h-8 flex justify-center items-center text-white bg-theme_black-100">
          <span>{block.type}</span>
        </div>
        <textarea
          className="flex-1 border border-theme_black-100 min-h-8 h-8 p-2"
          name={`${block.id}`}
          id={`${block.id}`}
          cols="30"
          rows="10"
          style={{ maxHeight: 'auto' }}
          onChange={(e) => {
            var block = props.blocks.find((block) => block.id === e.target.id);
            block.value = e.target.value;
            props.updateBlock(block);
          }}
        ></textarea>
        <div
          onClick={() => {
            props.removeBlock(block.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            className="text-theme_red-100 text-lg ml-2 cursor-pointer"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
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
        </div>
      </div>
    );
  };

  const renderListBlock = (block) => {
    <div className="w-full flex justify-center items-start mb-4 pl-4">
      <div className=" px-2 h-8 flex justify-center items-center text-white bg-theme_black-100">
        <span>{block.type}</span>
      </div>
      <ul id={`${block.id}-ol`}>
        <li></li>
      </ul>
      <div
        onClick={() => {
          props.removeBlock(block.id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          className="text-theme_red-100 text-lg ml-2 cursor-pointer"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
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
      </div>
    </div>;
  };

  const renderImageBlock = (block) => {
    return (
      <div className="w-full flex justify-center items-start mb-4 pl-4">
        <div className=" px-2 h-8 flex justify-center items-center text-white bg-theme_black-100">
          <span>{block.type}</span>
        </div>
        <input
          type="file"
          id={`${block.id}-image`}
          name={`${block.id}-image`}
          onChange={(e) => {
            var block = props.blocks.find((block) => block.id === e.target.id);
            block.value = e.target.value;
            props.updateBlock(block);
          }}
        />
        <div
          onClick={() => {
            props.removeBlock(block.id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
            className="text-theme_red-100 text-lg ml-2 cursor-pointer"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
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
        </div>
      </div>
    );
  };

  const decideWhichBlockToRender = (block) => {
    if (block.type === 'Image') {
      return renderImageBlock(block);
    } else if (block.type === 'UOL' || block.type === 'OL') {
      return renderListBlock(block);
    } else {
      return renderTextBlock(block);
    }
  };

  return (
    <div>
      <SideNav />
      <div>
        <ul
          className="pt-12 w-full pr-4 flex flex-col items-center justify-center"
          style={{ transition: 'padding-left 300ms ease-in-out' }}
          id="building-blocks-container"
        >
          {props.blocks &&
            props.blocks.length > 0 &&
            props.blocks.map((block, index) => (
              <li className="w-full" key={index}>
                {decideWhichBlockToRender(block)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  removeBlock,
  updateBlock,
};

const mapStateToProps = (state) => ({
  blocks: state.builder.blocks,
});

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownBuilder);
