import { BUILDER_VIEW, PREVIEW_VIEW, RAW_VIEW } from '../actions/types';

const initialState = {
  currentView: 'builder',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUILDER_VIEW:
      return { ...state, currentView: 'builder' };
    case PREVIEW_VIEW:
      return { ...state, currentView: 'preview' };
    case RAW_VIEW:
      return { ...state, currentView: 'raw' };
    default:
      return state;
  }
};

export default viewReducer;
