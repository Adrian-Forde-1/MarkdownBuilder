import { ADD_BLOCK, REMOVE_BLOCK, UPDATE_BLOCK } from './types';

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
