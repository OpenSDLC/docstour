import { combineReducers } from 'redux';
import counterReducer, { CounterState } from './counterReducer';
import documentReducer, { DocumentState, Document } from './documentReducer';
/*
actionTypes => actions => reducers => combineReducers => store(combinedReducers)
*/

export type RootState = {
  counter: CounterState;
  document: DocumentState;
  indivDoc: Document;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  document: documentReducer,
});

export default rootReducer;