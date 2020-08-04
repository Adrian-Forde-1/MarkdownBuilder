//Actions
import {
  ADD_BLOCK,
  REMOVE_BLOCK,
  UPDATE_BLOCK,
  SET_SELECTED_BLOCK,
  NULL_BLOCK,
} from '../actions/types';

const initialState = {
  blocks: [],
  selectedBlock: {},
};

const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return {
        ...state,
        blocks: state.blocks.concat(action.payload),
      };
    case REMOVE_BLOCK:
      return {
        ...state,
        blocks: state.blocks.filter((block) => block.id !== action.payload),
      };
    case UPDATE_BLOCK:
      return {
        ...state,
        blocks: state.blocks.map((block) => {
          if (block.id !== action.payload.id) return block;
          else {
            return action.payload;
          }
        }),
      };
    case SET_SELECTED_BLOCK:
      return {
        ...state,
        selectedBlock: action.payload,
      };
    default:
      return state;
  }
};

export default builderReducer;
