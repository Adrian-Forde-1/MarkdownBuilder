import React from 'react';

//Redux
import { connect } from 'react-redux';

//Actions
import { removeBlock, updateBlock } from '../../redux/actions/builderActions';

//Components
import SideNav from '../Navigation/SideNav.jsx';
import TextBlock from '../Partials/TextBlock.jsx';
import ListBlock from '../Partials/ListBlock/ListBlock.jsx';
import ImageBlock from '../Partials/ImageBlock.jsx';

const MarkdownBuilder = (props) => {
  const decideWhichBlockToRender = (block) => {
    if (block.type === 'Image') {
      return <ImageBlock block={block} />;
    } else if (block.type === 'UOL' || block.type === 'OL') {
      return <ListBlock block={block} />;
    } else {
      return <TextBlock block={block} />;
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
