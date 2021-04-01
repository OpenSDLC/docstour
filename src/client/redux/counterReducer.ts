// import types 
import { INCREMENT, DECREMENT } from './actionTypes';
import { DefaultState, Action } from '../types';
// define default state of each reducer

const defaultState: DefaultState = {
  count: 0,
};

// use defaul params to assign default state to state param
export default function counterReducer(state = defaultState, action: Action) {
  let newCount = state.count;
  switch(action.type) {
    case INCREMENT:
      return {
        ...state, count: newCount + 1,
      };
    case DECREMENT:
      return {
        ...state, count: newCount - 1,
      };
    default: return state;
  }
}