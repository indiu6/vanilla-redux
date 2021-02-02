import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import ToDo from '../components/ToDo';
import { add, selectTodos } from '../store';

function Home() {
  const [text, setText] = useState('');
  const toDos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText('');
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return { toDos: state };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToDo: (text) => dispatch(add(text)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home);
export default Home;
