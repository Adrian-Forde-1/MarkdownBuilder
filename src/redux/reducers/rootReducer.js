import { combineReducers } from 'redux';

//Reducers
import builderReducer from './builderReducer';

const rootReducer = combineReducers({
  builder: builderReducer,
});

export default rootReducer;
