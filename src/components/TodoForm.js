import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.input)
    this.setState({
        input: "",
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="input" value={this.state.input} />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;