import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList"
import "./components/Todo.css"

const todos = [{
  task:"Walk the dog",
  id: 1,
  completed: false,
},
{
  task:"Code until my hands are numb",
  id: 2,
  completed: false,
},
{
  task:"Sleep",
  id: 3,
  completed: false,
}

]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    todos:todos
  }
}

handleToggle = (id) => {
  const newTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
      return( {
        ...todo,
        completed: !todo.completed
      });
    } else {
      return todo
    }
  })
  this.setState({
    todos:newTodos
  });
}


handleClear = e => {
  this.setState({
    todos: this.state.todos.filter(todo => (!todo.completed))
  });
}

handleAdd = (todoName) => {
this.setState({
  todos: [...this.state.todos, {
    task: todoName,
    id: this.state.todos.length,
    completed: false
  }]
});
}




  render() {
    return (
      <div>
        <h2>Time to get to work!</h2>
        <TodoForm handleAdd={this.handleAdd}/>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
