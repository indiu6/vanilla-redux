// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

//* configureStore activates Redux Dev Tool
const store = configureStore({ reducer: toDos.reducer });

//* createSlice also gives actions
export const { add, remove } = toDos.actions;

console.log(add);

export default store;

//todo Replaced by createAction

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//     id: Date.now(),
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

//todo Replaced by createReducer

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: action.Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

//todo Replaced by createSlice

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// //todo now it's OK to mutate the state by 'immer'
// //* 2 options: mutate the state OR return new state, but not both
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // mutate the state
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), // return new state
// });
