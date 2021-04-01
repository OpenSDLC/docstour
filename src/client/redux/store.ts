import { createStore } from 'redux';
import rootReducer from './rootReducer';

/*
actionTypes => actions => reducers => combineReducers => store(combinedReducers)
*/

const store = createStore(rootReducer);

export default store;