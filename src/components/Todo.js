import React from 'react';

const Todo = props => {


  return (
    <div onClick={()=>{
        props.handleToggle(props.todo.id)
    }} className={`todo ${props.todo.completed ? "completed" : ""}`}>
     {props.todo.task}
    </div>
  );
};

export default Todo;