import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoView';
import TodoStore from './store/TodoStore';
import { Form } from 'react-bootstrap'

class App extends Component {
  render() {
    const todo = new TodoStore();
    todo.addTodo("Initial task")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React...</h1>
        </header>
          <div className="App-content">
              <TodoForm store={todo} />
              <TodoList store={todo} />
          </div>
      </div>
    );
  }
}

export default App;
