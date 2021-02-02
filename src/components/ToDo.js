import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function ToDo({ text, onBtnClick, id }) {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => dispatch(remove(id))}>DEL</button>
    </li>
  );
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onBtnClick: () => dispatch(remove(ownProps.id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ToDo);
export default ToDo;
