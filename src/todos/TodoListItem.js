import React from 'react';

const TodoListItem = ({
  todo,
  id,
  onRemovePressed,
  onMarkCompletedPressed,
}) => {
  return (
    <div key={id}>
      <h3>{todo.text}</h3>
      <div>
        {todo.isCompleted ? null : (
          <button onClick={() => onMarkCompletedPressed(todo.id)}>v</button>
        )}
        <button onClick={() => onRemovePressed(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default TodoListItem;
