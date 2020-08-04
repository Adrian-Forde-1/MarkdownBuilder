import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/colors.css';

//React Router DOM
import { Link, withRouter } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';

//Actions
import { addBlock } from '../../redux/actions/builderActions';
import {
  changeToBuilderView,
  changeToPreviewView,
  changeToRawView,
} from '../../redux/actions/viewActions';
import {
  TEXT_BLOCK,
  LIST_BLOCK,
  TABLE_BLOCK,
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

const SideNav = (props) => {
  const toggleSideNav = () => {
    const sideNav = document.querySelector('#sidenav');
    gray - 250;
    sideNav.classList.toggle('open');
    if (document.querySelector('#building-blocks-container')) {
      if (sideNav.classList.contains('open')) {
        document.querySelector('#building-blocks-container').style.paddingLeft =
          '14rem';
      } else {
        document.querySelector('#building-blocks-container').style.paddingLeft =
          '1rem';
      }
    }
  };

  const addTextBlock = (type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      value: '',
      bold: false,
      italic: false,
      strikeThrough: false,
    };
    props.addBlock(newBlock);
  };

  const addListBlock = (type) => {
    const id = uuidv4();
    const newBlock = {
      id,
      type,
      items: [{ value: '' }],
    };

    props.addBlock(newBlock);
  };

  const addImageBlock = () => {
    const id = uuidv4();
    const newBlock = {
      id,
      type: 'Image',
      path: '',
    };

    props.addBlock(newBlock);
  };

  const addTableBlock = () => {
    const id = uuidv4();
    const newBlock = {
      id,
      type: 'Table',
      items: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    };

    props.addBlock(newBlock);
  };

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
                onClick={() => addTextBlock('H1')}
              >
                H1
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock('H2')}
              >
                H2
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock('H3')}
              >
                H3
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock('H4')}
              >
                H4
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock('H5')}
              >
                H5
              </li>
              <li
                className="flex items-center justify-center"
                onClick={() => addTextBlock('H6')}
              >
                H6
              </li>
            </ul>
          </div>
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addListBlock('OL')}
        >
          <OrderedListSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addListBlock('UOL')}
        >
          <UnorderedListSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock('Text')}
        >
          <TextSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock('Link')}
        >
          <LinkSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock('BQ')}
        >
          <QuoteSVG classes="text-theme-gray-100 text-lg hover:text-white" />
        </li>
        <li
          className="px-4 border-b-2 border-transparent flex justify-center items-center bg-transparent cursor-pointer"
          onClick={() => addTextBlock('Code')}
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

      {props.selectedBlock === TEXT_BLOCK && (
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
  changeToBuilderView,
  changeToPreviewView,
  changeToRawView,
};

const mapStateToProps = (state) => ({
  currentView: state.views.currentView,
  selectedBlock: state.builder.selectedBlock,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideNav));
