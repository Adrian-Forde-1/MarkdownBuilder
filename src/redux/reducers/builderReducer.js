//Actions
import { ADD_BLOCK, REMOVE_BLOCK } from '../actions/types';

const initialState = {
  block: [],
};

const builderReducer = (state = initialState, action) => {
  switch (action) {
    case ADD_BLOCK:
      return {
        ...state,
        block: block.push(action.payload),
      };
    case REMOVE_BLOCK:
      return {
        ...state,
        block: block.filter(block.id !== action.payload),
      };
    default:
      return state;
  }
};

export default builderReducer;
