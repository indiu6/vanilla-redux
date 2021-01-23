import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, data: toDo });
};

form.addEventListener('submit', onSubmit);

//todo COUNT

// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const number = document.querySelector('span');

// number.innerHTML = 0;

// const ADD = 'add';
// const MINUS = 'minus';

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerHTML = countStore.getState();
// };

// countStore.subscribe(onChange);

// add.addEventListener('click', () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener('click', () => {
//   countStore.dispatch({ type: MINUS });
// });
