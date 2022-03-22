import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo:"",
      priority: "high",
    };
  }

  handleChange = (event) => {
    this.setState({ toDo: event.target.value });
  };

  handlePriority = (event) => {
    this.setState({ priority: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.toDo, this.state.priority);
    this.setState({ toDo: "", priority: "high" });
  };

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Todo*</label>

          <input
            type="text"
            className="input"
            placeholder="add task"
            value={this.state.toDo}
            onChange={this.handleChange}
          />

          <label>Priority </label>

          <select
            className="select"
            value={this.state.priority}
            onChange={this.handlePriority}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="add-button"
            disabled={!this.state.toDo || !this.state.priority}
          >
            Add Task
          </button>
        </div>
      </form>
    );
  }
}

export default Form;

// function Form(props) {
