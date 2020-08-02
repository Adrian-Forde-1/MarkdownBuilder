import { combineReducers } from 'redux';

//Reducers
import builderReducer from './builderReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  builder: builderReducer,
  views: viewReducer,
});

export default rootReducer;
