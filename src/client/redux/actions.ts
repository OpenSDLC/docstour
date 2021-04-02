/* Functions associated with the strings. */
import { INCREMENT, DECREMENT, ADD_DOC, EDIT_DOC, DELETE_DOC, SAVE_URL_INPUT, FETCH_DOCS } from './actionTypes';
import { Document } from './documentReducer';
import store from './store';
export const addDoc = (name: string, url: string, notes: string) => ({
  type: ADD_DOC,
  payload: {
    name,
    url,
    notes,
  }
});

export const editDoc = () => ({
  type: EDIT_DOC
});

export const deleteDoc = () => ({
  type: DELETE_DOC
});

export const fetchDocuments = async () => {

  const fetchResult = await fetch('http://localhost:3000/api/', {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": 'true'
    }
  });
  const result = await fetchResult.json();
  result.forEach((document: any) => {
    console.log(document);
    console.log("Fetching", document)
  })
  store.dispatch({ type: 'FETCH_DOCS', payload: result })
}

// export function fetchDocuments() {
//   return async (dispatch: any) => {
//     const fetchResult = await fetch('http://localhost:3000/api/', {
//       method: 'GET',
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Credentials": 'true'
//       }
//     });
//     const result = await fetchResult.json();
//     result.forEach((document: any) => {
//       console.log(document);
//       console.log("Fetching", document)
//     })
//     dispatch({ type: 'FETCH_DOCS', payload: result })
//   }
// }

// export async function fetchDocuments(dispatch: any) {
//   const fetchResult = await fetch('http://localhost:3000/api/', {
//     method: 'GET',
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Credentials": 'true'
//     }
//   });
//   const result = await fetchResult.json();
//   result.forEach((document: any) => {
//     console.log(document);
//     console.log("Fetching", document)
//   })
//   dispatch({ type: 'FETCH_DOCS', payload: result })
// }


export const fetchDocs = (docList: Document[]) => ({
  type: FETCH_DOCS,
  payload: {

  }
})

export const incrementCounter = () => ({
  type: INCREMENT
});

export const decrementCounter = () => ({
  type: DECREMENT,
});

export const saveURLInput = () => ({
  type: SAVE_URL_INPUT,
});