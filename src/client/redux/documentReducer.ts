// import types 
import * as types from './actionTypes';
import { ADD_DOC, EDIT_DOC, DELETE_DOC } from './actionTypes';
// define default state of each reducer
export interface DocumentState {
  docList: Document[]
}

interface DocumentAction {
  type: string,
  payload: Document,
}
export interface Document {
  name: string;
  url: string;
  notes: string;
}
  // name: '',
  // url: '',
  // notes: '',

const documentState: DocumentState = {
  docList: []
};

// use defaul params to assign default state to state param
export default function documentReducer(state = documentState, action: DocumentAction) {
  const { docList } = state;
  const newDocList = [...docList];
  switch(action.type) {
    case ADD_DOC:
      newDocList.push(action.payload);
      return {
        ...state, docList: newDocList,
      };

    case EDIT_DOC:
      return {
        ...state
      };

    case DELETE_DOC:
      return {

      };

    default: return state;
  }
}