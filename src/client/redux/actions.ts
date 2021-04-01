/* Functions associated with the strings. */
import { INCREMENT, DECREMENT, ADD_DOC, EDIT_DOC, DELETE_DOC } from './actionTypes';

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

export const incrementCounter = () => ({
  type: INCREMENT
});

export const decrementCounter = () => ({
  type: DECREMENT
});
