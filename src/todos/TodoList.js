import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, markCompletedTodo } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onMarkCompletedPressed }) => {
  return (
    <div>
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onMarkCompletedPressed={onMarkCompletedPressed}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletedPressed: (text) => dispatch(markCompletedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
