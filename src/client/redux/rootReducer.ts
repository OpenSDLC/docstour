import { combineReducers } from 'redux';
import counterReducer, { CounterState } from './counterReducer';
import documentReducer, { DocumentState } from './documentReducer';
/*
actionTypes => actions => reducers => combineReducers => store(combinedReducers)
*/

export type RootState = {
  counter: CounterState;
  document: DocumentState;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  document: documentReducer,
});

export default rootReducer;