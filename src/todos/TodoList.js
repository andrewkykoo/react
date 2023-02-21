import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, markCompletedTodo } from './actions';
import { loadTodos } from './thunks';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletedPressed: (text) => dispatch(markCompletedTodo(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
