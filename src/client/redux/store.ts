import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from "redux-thunk";
/*
actionTypes => actions => reducers => combineReducers => store(combinedReducers)
*/

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;