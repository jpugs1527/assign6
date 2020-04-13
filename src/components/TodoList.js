import React, { Component } from 'react';
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>To-Do List</h2>
        <TodoForm />
      </div>
    );
  }
}

export default TodoList;