// import types 
import { INCREMENT, DECREMENT } from './actionTypes';
import { Action } from '../types';
// define default state of each reducer
export interface CounterState {
  count: number;
}
const counterState: CounterState = {
  count: 0,
};

// use defaul params to assign default state to state param
export default function counterReducer(state = counterState, action: Action) {
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