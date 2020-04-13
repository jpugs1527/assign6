import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;