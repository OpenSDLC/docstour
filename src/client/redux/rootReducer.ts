import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import documentReducer from './documentReducer';

/*
actionTypes => actions => reducers => combineReducers => store(combinedReducers)
*/

const rootReducer = combineReducers({
  counter: counterReducer,
  document: documentReducer,
});

export default rootReducer;
