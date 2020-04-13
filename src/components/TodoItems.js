import React, { Component } from 'react';

class TodoItems extends Component {
  constructor(props) {
    super(props);
  
    this.createTodos = this.createTodos.bind(this);
  }

  createTodos(item) {
    // adds list item for each todo that has been created along with button for delete
    return <li key={item.key}>{item.value} <button onClick={() => this.delete(item.key)}>x</button></li>
  }

  // Calls parent delete function
  delete(key) {
    this.props.delete(key);
  }

  render() {    
    // uses .map to iterate over the items array passed to this component and call createTodos on it
    var todos = this.props.items.map(this.createTodos)

    return (
      <ol>
        {todos}
      </ol>
    );
  }
}

export default TodoItems;