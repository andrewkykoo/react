import React from 'react';

const TodoListItem = ({ todo, id, onRemovePressed }) => {
  return (
    <div key={id}>
      <h3>{todo.text}</h3>
      <div>
        <button>v</button>
        <button onClick={() => onRemovePressed(todo.text)}>x</button>
      </div>
    </div>
  );
};

export default TodoListItem;
