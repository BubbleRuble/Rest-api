import { Component } from "react";
import TodoList from "./TodoList";

class Todo extends Component {
  state = {
    task: '',
  }
  
  onClick = () => {
    return (
      <TodoList />
    )
  }


  render() {
    return (
      <form>
        <label>
          <input type="text" name='name'/>Введіть текст
        </label>
        <button type='button' onClick={this.onClick}>Додати</button>
      </form>
    )
  }
}

export default Todo;