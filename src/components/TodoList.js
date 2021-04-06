import React from "react";

import Todo from "./Todo";

const TodoList = props => {

  const handleClick = () => {
    props.handleClear();
  }

  return (
    <div>
      {props.todos.map(todo => (
        <Todo handleToggle={props.handleToggle} key={todo.id} todo={todo} />
      ))}

      <button onClick={handleClick} >
        Clear completed
      </button>
    </div>
  );
};

export default TodoList;

