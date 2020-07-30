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
  const renderTextArea = (block) => {
    return (
      <div className="w-full flex justify-center items-start mb-4 pl-4">
        <div className="p-2 text-white bg-theme_black-100">{block.type}</div>
        <textarea
          className="flex-1 border border-theme_black-100 p-2"
          name={`${block.id}`}
          id={`${block.id}`}
          cols="30"
          rows="10"
          onChange={(e) => {
            var block = props.blocks.find((block) => block.id === e.target.id);
            block.value = e.target.value;
            props.updateBlock(block);
          }}
        ></textarea>
      </div>
    );
  };
  return (
    <div>
      <SideNav />
      <div>
        <ul className="pt-12 w-full pr-4 pl-56 flex flex-col items-center justify-center">
          {props.blocks &&
            props.blocks.length > 0 &&
            props.blocks.map((block, index) => (
              <li className="w-full" key={index}>
                {renderTextArea(block)}
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
