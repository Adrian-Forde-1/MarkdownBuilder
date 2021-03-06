import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/colors.css';

//React Router DOM
import { Link, withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Actions
import {
  addBlock,
  addListItem,
  updateBlock,
} from '../../redux/actions/builderActions';
import {
  changeToBuilderView,
  changeToPreviewView,
  changeToRawView,
} from '../../redux/actions/viewActions';
import {
  TEXT_BLOCK,
  LIST_BLOCK,
  TABLE_BLOCK,
  IMAGE_BLOCK,
  UNORDEREDLIST_BLOCK,
  ORDEREDLIST_BLOCK,
  NULL_BLOCK,
} from '../../redux/actions/types';

//Components
import OrderedListSVG from '../SVG/OrderedListSVG.jsx';
import UnorderedListSVG from '../SVG/UnorderedListSVG.jsx';
import HeadingSVG from '../SVG/HeadingSVG.jsx';
import BackSVG from '../SVG/BackSVG.jsx';
import LinkSVG from '../SVG/LinkSVG.jsx';
import QuoteSVG from '../SVG/QuoteSVG.jsx';
import TableSVG from '../SVG/TableSVG.jsx';
import ImageSVG from '../SVG/ImageSVG.jsx';
import TextSVG from '../SVG/TextSVG.jsx';
import CodeSVG from '../SVG/CodeSVG.jsx';
import HammerSVG from '../SVG/HammerSVG.jsx';
import MagnifyingGlassSVG from '../SVG/MagnifyingGlassSVG.jsx';
import RawFileSVG from '../SVG/RawFileSVG.jsx';
import BoldSVG from '../SVG/BoldSVG.jsx';
import ItalicSVG from '../SVG/ItalicSVG.jsx';
import StrikeThrough from '../SVG/StrikeThroughSVG.jsx';
import RemoveColumnSVG from '../SVG/RemoveColumnSVG.jsx';
import AddColumnSVG from '../SVG/AddColumnSVG.jsx';
import RemoveRowSVG from '../SVG/RemoveRowSVG.jsx';
import AddRowSVG from '../SVG/AddRowSVG.jsx';
import AddSVG from '../SVG/AddSVG.jsx';

const SideNav = (props) => {
  const addTextBlock = (blockType, type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      blockType,
      value: '',
      bold: false,
      italic: false,
      strikeThrough: false,
    };
    props.addBlock(newBlock);
  };

  const addListBlock = (blockType, type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      blockType,
      type,
      items: [{ value: '' }],
    };

    props.addBlock(newBlock);
  };

  const addImageBlock = () => {
    const id = uuidv4();
    const newBlock = {
      id,
      blockType: IMAGE_BLOCK,
      type: 'Image',
      path: '',
    };

    props.addBlock(newBlock);
  };

  const addTableBlock = () => {
    const id = uuidv4();
    const newBlock = {
      id,
      blockType: TABLE_BLOCK,
      type: 'Table',
      rows: 3,
      cols: 3,
      items: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };

    props.addBlock(newBlock);
  };

  const addNewListItem = () => {
    const updatedBlock = Object.assign({}, props.selectedBlock);
    updatedBlock.items.push({ value: '' });
    props.addListItem(updatedBlock);
  };

  const addTableColumn = () => {
    const block = props.blocks.find(
      (block) => block.id === props.selectedBlock.id
    );
    const updatedBlock = Object.assign({}, block);
    for (let i = 0; i < updatedBlock.rows; i++) {
      updatedBlock.items[i].push('');
    }
    updatedBlock.cols += 1;

    props.updateBlock(updatedBlock);
  };

  const addTableRow = () => {
    const block = props.blocks.find(
      (block) => block.id === props.selectedBlock.id
    );
    const updatedBlock = Object.assign({}, block);
    const newRow = [];
    for (let i = 0; i < updatedBlock.cols; i++) {
      newRow.push('');
    }
    updatedBlock.items.push(newRow);
    updatedBlock.rows += 1;

    props.updateBlock(updatedBlock);
  };

  const removeTableColumn = () => {};

  const removeTableRow = () => {};

  return (
    <nav
      className="pinkpurple-purple-linear-gradient builder-nav flex items-center px-4"
      style={{ transform: 'translateY(-100px)', height: '6vh' }}
      style={{ zIndex: '100' }}
    >
      <Link
        to="/"
        className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent mr-4"
      >
        <BackSVG classes="text-white text-2xl" />
      </Link>
      <ul className="nav-list">
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer relative"
          style={{ position: 'relative' }}
        >
          <HeadingSVG classes="text-theme-gray-100 text-base hover:text-white" />
          <div className="sub-menu bg-theme_pink-100">
            <ul className=" text-white">
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H1')}
              >
                H1
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H2')}
              >
                H2
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H3')}
              >
                H3
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H4')}
              >
                H4
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H5')}
              >
                H5
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock(TEXT_BLOCK, 'H6')}
              >
                H6
              </li>
            </ul>
          </div>
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addListBlock(ORDEREDLIST_BLOCK, 'OL')}
        >
          <OrderedListSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addListBlock(UNORDEREDLIST_BLOCK, 'UOL')}
        >
          <UnorderedListSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock(TEXT_BLOCK, 'Text')}
        >
          <TextSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock(TEXT_BLOCK, 'Link')}
        >
          <LinkSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock(TEXT_BLOCK, 'BQ')}
        >
          <QuoteSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock(TEXT_BLOCK, 'Code')}
        >
          <CodeSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTableBlock()}
        >
          <TableSVG classes="text-theme-gray-100 text-base hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addImageBlock()}
        >
          <ImageSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
      </ul>

      {props.selectedBlock.blockType === TEXT_BLOCK && (
        <ul className="nav-list mx-auto">
          <li className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer">
            <BoldSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
          <li className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer">
            <ItalicSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
          <li className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer">
            <StrikeThrough classes="text-theme-gray-100 text-base hover:text-white" />
          </li>
        </ul>
      )}
      {props.selectedBlock.blockType === TABLE_BLOCK && (
        <ul className="nav-list mx-auto">
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => removeTableColumn()}
          >
            <RemoveColumnSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => removeTableRow()}
          >
            <RemoveRowSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => addTableColumn()}
          >
            <AddColumnSVG classes="text-theme-gray-100 text-base hover:text-white" />
          </li>
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => addTableRow()}
          >
            <AddRowSVG classes="text-theme-gray-100 text-base hover:text-white" />
          </li>
        </ul>
      )}
      {props.selectedBlock.blockType === UNORDEREDLIST_BLOCK && (
        <ul className="nav-list mx-auto">
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => addNewListItem()}
          >
            <AddSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
        </ul>
      )}
      {props.selectedBlock.blockType === ORDEREDLIST_BLOCK && (
        <ul className="nav-list mx-auto">
          <li
            className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
            onClick={() => addNewListItem()}
          >
            <AddSVG classes="text-theme-gray-100 text-lg hover:text-white" />
          </li>
        </ul>
      )}
      <div
        className="flex item-center w-auto ml-auto "
        style={{
          height: '6vh',
        }}
      >
        <nav className="flex items-center">
          <ul className="flex items-center justify-between text-base pt-0">
            <li>
              <button
                className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent"
                onClick={() => props.changeToBuilderView()}
              >
                <HammerSVG classes="text-theme-gray-100 text-xl" />
              </button>
            </li>
            <li>
              <button
                className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent"
                onClick={() => props.changeToPreviewView()}
              >
                <MagnifyingGlassSVG classes="text-theme-gray-100 text-xl" />
              </button>
            </li>
            <li>
              <button
                className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent"
                onClick={() => props.changeToRawView()}
              >
                <RawFileSVG classes="text-theme-gray-100 text-xl" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  addBlock,
  addListItem,
  updateBlock,
  changeToBuilderView,
  changeToPreviewView,
  changeToRawView,
};

const mapStateToProps = (state) => ({
  currentView: state.views.currentView,
  selectedBlock: state.builder.selectedBlock,
  blocks: state.builder.blocks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideNav));
