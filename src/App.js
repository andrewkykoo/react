import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import TodoList from './todos/TodoList.js';

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default hot(module)(App);
