// import { createStore } from 'redux';
import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDos',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const rootReducer = combineReducers({
  toDos: toDoSlice.reducer,
});

//* configureStore activates Redux Dev Tool
const store = configureStore({ reducer: toDoSlice.reducer });

//* createSlice also gives actions which can be dispatched by others
export const { add, remove } = toDoSlice.actions;
console.log(add);

export const selectTodos = (state) => state;

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

//* now it's OK to mutate the state by 'immer'
//* 2 options: mutate the state OR return new state, but not both

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // mutate the state
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), // return new state
// });
