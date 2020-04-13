import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.state = {
      items: []
    };
  }

  addTodo(e) {
    e.preventDefault();
    if (this.inputValue.value !== "") {
      var newTodo = {
        key: Date.now(),
        value: this.inputValue.value
      };

      // update state with added item
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newTodo)
        };
      });

      // reset the input field
      this.inputValue.value = "";
    }
  }

  deleteTodo(key) {
    // Filters through items and only returns the ones that have not had delete called on them
    var filteredItems = this.state.items.filter(function (todo) {
      return (todo.key !== key);
    });

    // update state with non deleted items
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input ref={(text) => this.inputValue = text} placeholder="Add new todo" />
          <button type="submit">+</button>
        </form>
        <TodoItems items={this.state.items} delete={this.deleteTodo}/>
      </div>
    );
  }
}

export default TodoForm;