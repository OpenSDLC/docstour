// import types 
import * as types from './actionTypes';
import { ADD_DOC, EDIT_DOC, DELETE_DOC } from './actionTypes';
// define default state of each reducer
interface DocumentState {
  docList: Document[]
}

interface DocumentAction {
  type: string,
  payload: Document,
}
interface Document {
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
  // let newUrl = state.url;
  // let newNotes = state.notes;
  const newDocList = [... docList];
  switch(action.type) {
    case ADD_DOC:
      
      return {
        // name, url, notes
        ...state, docList: newDocList.push(action.payload),
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
