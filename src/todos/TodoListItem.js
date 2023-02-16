import React from 'react';

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <h3>{todo.text}</h3>
      <div>
        <button>v</button>
        <button>x</button>
      </div>
    </div>
  );
};

export default TodoListItem;
