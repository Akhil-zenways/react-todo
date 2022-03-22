import React, { Component } from "react";

export class List extends Component {
  render(props) {
    const iscompleted = this.props.isDone;
    let lable;
    if (iscompleted) {
      lable = <label className="line-through">{this.props.name}</label>;
    } else {
      lable = <label className="solid">{this.props.name}</label>;
    }

    return (
      <li className="todo_list">
        <div>
          {lable}
          <br />

          <label>{this.props.priority}</label>
        </div>
        <div>
          <button
            id={this.props.id}
            className="done-button"
            disabled={this.props.isDone}
            onClick={() => this.props.markTaskDone(this.props.id)}
          >
            Done
          </button>
          <button
            type="button"
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default List;

// function List(props) {
