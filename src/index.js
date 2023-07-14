import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TodoForm />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('root')
);
