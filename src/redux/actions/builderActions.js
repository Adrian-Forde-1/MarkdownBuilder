import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  UPDATE_BLOCK,
  SET_SELECTED_BLOCK,
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
} from './types';

export const addBlock = (block) => {
  return {
    type: ADD_BLOCK,
    payload: block,
  };
};

export const removeBlock = (blockId) => {
  return {
    type: REMOVE_BLOCK,
    payload: blockId,
  };
};

export const updateBlock = (block) => {
  return {
    type: UPDATE_BLOCK,
    payload: block,
  };
};

export const setSelectedBlock = (blockType) => {
  return {
    type: SET_SELECTED_BLOCK,
    payload: blockType,
  };
};

export const addListItem = (block) => {
  return {
    type: ADD_LIST_ITEM,
    payload: block,
  };
};
export const removeListItem = (block) => {
  return {
    type: REMOVE_LIST_ITEM,
    payload: block,
  };
};
