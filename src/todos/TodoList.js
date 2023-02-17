import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [{ text: 'grocery' }, { text: 'laundry' }] }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem todo={todo} key={index} />
      ))}
    </div>
  );
};

export default TodoList;
