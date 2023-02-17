import React from 'react';

const TodoListItem = ({ todo, id }) => {
  return (
    <div key={id}>
      <h3>{todo.text}</h3>
      <div>
        <button>v</button>
        <button>x</button>
      </div>
    </div>
  );
};

export default TodoListItem;
