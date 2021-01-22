import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = () => {};

const store = createStore(reducer);

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
