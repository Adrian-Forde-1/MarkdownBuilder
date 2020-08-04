import React from 'react';

//Redux
import { connect } from 'react-redux';

//Actions
import {
  updateBlock,
  removeBlock,
  setSelectedBlock,
} from '../../../redux/actions/builderActions';

//Components
import ListBlockItem from './ListBlockItem.jsx';

const ListBlock = (props) => {
  const updateList = (itemIndex, itemValue) => {
    const newArray = Object.assign({}, props.block);
    newArray.items[itemIndex].value = itemValue;
    props.updateBlock(newArray);
  };

  const removeListItem = (itemIndex) => {
    const newArray = Object.assign({}, props.block);
    newArray.items = newArray.items.filter(
      (item, index) => index !== itemIndex
    );
    props.updateBlock(newArray);
  };

  return (
    <div
      className="w-full flex justify-center items-start mb-4 pl-4"
      onClick={() => props.setSelectedBlock(props.block)}
    >
      <div className=" px-2 h-8 flex justify-center items-center text-white bg-theme_black-100">
        <span>{props.block.type}</span>
      </div>
      <ul
        className="flex-1 flex flex-col justify-center items-center"
        id={`${props.block.id}-${props.block.type}`}
      >
        {props.block.items.map((item, index) => (
          <ListBlockItem
            value={item.value}
            itemIndex={index}
            updateList={updateList}
            removeListItem={removeListItem}
            listItemNum={props.block.items.length}
            key={index}
          />
        ))}
      </ul>
      <div
        onClick={() => {
          props.removeBlock(props.block.id);
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

const mapDispatchToProps = {
  updateBlock,
  removeBlock,
  setSelectedBlock,
};

export default connect(null, mapDispatchToProps)(ListBlock);
