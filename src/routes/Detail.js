import React from 'react';
import { connect, useSelector } from 'react-redux';
import { selectTodos } from '../store';

function Detail() {
  const toDos = useSelector(selectTodos);
  const [url, id] = document.location.href.split('#/');
  console.log(id);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   const {
//     match: {
//       params: { id },
//     },
//   } = ownProps;

//   return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
// };

// export default connect(mapStateToProps)(Detail);
export default Detail;
